import { log } from "node:console";
import User from "../../models/auth.model.js";
import UserProfile from "../../models/user.profile.model.js";
import { RegisterDto } from "./auth.dto.js";
import { hashPassword, comparePassword } from "../../utils/hashPassword.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/generateToken.js";
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";

export async function registerUser(payload: RegisterDto) {
  const email = payload.email?.toLowerCase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw { status: 409, message: "User already exists" };
  }

  const hashedPassword = await hashPassword(payload.password);

  const createdUser = await User.create({
    ...payload,
    email,
    password: hashedPassword,
  });

  // Create user profile automatically
  await UserProfile.create({
    userId: createdUser._id.toString(),
  });

  return {
    id: createdUser._id,
    fullname: createdUser.fullname,
    email: createdUser.email,
    role: createdUser.role,
  };
}

export async function loginUser(email: string, password: string) {
  const user = await User.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw { status: 401, message: "Invalid credentials" };
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw { status: 401, message: "Invalid credentials" };
  }

  return user;
}

export async function refreshToken(token: string) {
  try {
    const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as any;
    const user = await User.findById(decoded.id);
    if (!user) {
      throw { status: 401, message: "Invalid refresh token" };
    }

    const accessToken = generateAccessToken({ id: user._id, email: user.email, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id });
    return { accessToken, refreshToken };
  } catch (error) {
    throw { status: 401, message: "Invalid refresh token" };
  }
}

export async function fetchAllUsers() {
    log("Fetching all users...");
  return await User.find().select("-password");
}

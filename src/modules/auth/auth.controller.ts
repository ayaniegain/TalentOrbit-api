import { Request, Response, NextFunction } from "express";
import { registerUser, fetchAllUsers, loginUser, refreshToken as refreshTokenService } from "./auth.service.js";
import { RegisterDto } from "./auth.dto.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/generateToken.js";

export async function getAllUsers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    console.log("Auth routes initialized"); // Debug log to confirm route setup
   
    try {
      console.log("Auth routes initialized2"); // Debug log to confirm route setup
    const users = await fetchAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    try {
        const payload: RegisterDto = req.body;
    const user = await registerUser(payload);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}


 export async function login(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    try {
        const { email, password } = req.body;

        console.log("Received login request:", { email, password });

        const user = await loginUser(email, password);

        const accessToken = generateAccessToken({ id: user._id, email: user.email, role: user.role });
        const refreshToken = generateRefreshToken({ id: user._id });

        res.status(200).json({
          success: true,
          data: {
            user: {
              id: user._id,
              fullname: user.fullname,
              email: user.email,
              role: user.role,
            },
            accessToken,
            refreshToken,
          },
        });
    } catch (error) {
        next(error);
    }
}

export async function refresh(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    try {
        const { refreshToken: token } = req.body;

        if (!token) {
            return res.status(400).json({ success: false, message: "Refresh token required" });
        }

        const tokens = await refreshTokenService(token);

        res.status(200).json({
            success: true,
            data: tokens,
        });
    } catch (error) {
        next(error);
    }
}

export async function logout(
  req: Request,
  res: Response,
  next: NextFunction,
) {
    try {
        // For JWT, logout is handled client-side by removing tokens
        // Server-side, we can optionally blacklist the token if implemented
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (error) {
        next(error);
    }
}


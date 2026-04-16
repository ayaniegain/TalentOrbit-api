import User from "../../models/auth.model.js";
import UserProfile from "../../models/user.profile.model.js";
import { IUserProfile, IUser } from "../../types/index.js";
import { UserProfileUpdateDto } from "./user.dto.js";

export async function getUserProfile(userId: string) {
  const user = await User.findById(userId).select("fullname email");
  const profile = await UserProfile.findOne({ userId });

  if (!user) {
    throw new Error("User not found");
  }

  return {
    fullname: user.fullname,
    email: user.email,
    ...profile?.toObject(),
  };
}

export async function updateUserProfile(userId: string, data: UserProfileUpdateDto) {
  let profile = await UserProfile.findOne({ userId });

  if (!profile) {
    profile = new UserProfile({ userId });
  }

  Object.assign(profile, data);
  await profile.save();

  return profile;
}

export async function uploadUserResume(userId: string, resumeUrl: string) {
  let profile = await UserProfile.findOne({ userId });

  if (!profile) {
    profile = new UserProfile({ userId });
  }

  profile.resumeUrl = resumeUrl;
  await profile.save();

  return profile;
}

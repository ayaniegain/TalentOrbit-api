import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function generateAccessToken(payload: object) {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, { expiresIn: "1m" });
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
}

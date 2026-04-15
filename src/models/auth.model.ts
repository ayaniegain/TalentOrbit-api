// mongoose schemas
import { Schema, model, Document } from "mongoose";
import { IUser } from "../types/index.js";

// 2. Schema
const userSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

// 3. Model
const User = model<IUser>("User", userSchema);

export default User;

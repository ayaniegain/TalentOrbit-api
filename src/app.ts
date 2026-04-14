
import express, { Application, Request, Response } from "express";
import authRouter from "./modules/auth/auth.routes.js";
import userRouter from "./modules/user/user.routes.js";
import recruiterRouter from "./modules/recruiter/recruiter.routes.js";
import jobRouter from "./modules/job/job.routes.js";
import applicationRouter from "./modules/application/application.routes.js";
import { notFoundHandler } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/recruiter", recruiterRouter);
// app.use("/api/v1/job", jobRouter);
// app.use("/api/v1/application", applicationRouter);

app.get("/health", (req: Request, res: Response) => {
  res.send("Hello from TypeScript!");
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;


import { Request, Response, NextFunction } from "express";

export function validate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    // TODO: Add zod schema validation for req.body / req.params / req.query.
    next();
  };
}

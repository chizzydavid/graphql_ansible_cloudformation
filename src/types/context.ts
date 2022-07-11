import { Request, Response } from "express";

interface IContext {
  req: Request;
  res: Response;
  requestId: string;
}

export default IContext;

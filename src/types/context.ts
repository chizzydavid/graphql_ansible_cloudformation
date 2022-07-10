import { Request, Response } from "express";

interface Context {
  req: Request;
  res: Response;
  requestId: string;
}

export default Context;

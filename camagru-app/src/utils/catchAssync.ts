import { CatchAsyncCb } from "@types";
import { NextFunction, Request, Response } from "express";

export const catchAssync = (fn: CatchAsyncCb) => (req: Request, res: Response, next: NextFunction) => {
	fn(req, res, next).catch((err: Error) => {
		next(err);
	});
};

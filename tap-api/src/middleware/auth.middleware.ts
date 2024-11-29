import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret_key";

export interface AuthenticatedRequest extends Request {
    user?: any;
}

export function authenticateJWT(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): void {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                console.error("JWT verification error:", err);
                return res.status(403).json({ message: "Forbidden" });
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}
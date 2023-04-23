import { serialize } from "cookie";

export default function handler(req, res) {
    const { method } = req;
    if (method !== "GET") return;
    const serialized = serialize("token", "", {
        path: "/",
        maxAge: 0
    });
    res.status(200).setHeader("Set-Cookie", serialized).json({
        status: 200,
        success: true,
        message: "Logged out of account."
    })
}
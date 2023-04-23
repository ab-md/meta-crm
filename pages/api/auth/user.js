import { verifyToken } from "@/utils/auth";

export default async function handler(req, res) {
    const { method, cookies } = req;
    if (method !== "GET") return;
    const { token } = cookies;
    if (!token) return res.status(401).json({
        status: 401,
        success: false,
        message: "Your not logged in."
    })
    const secret = process.env.SECRET_KEY;
    const checkToken = verifyToken(token, secret);
    console.log(checkToken);
    if (!checkToken) return res.status(401).json({
        status: 401,
        success: false,
        message: "Unauthurized token."
    })

    res.status(200).json({
        status: 200,
        success: false,
        message: "OK",
        data: checkToken,
    })
}
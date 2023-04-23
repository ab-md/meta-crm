import User from "@/model/user";
import { compareData } from "@/utils/auth";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
    const { method, body } = req;
    if (method !== "POST") return;
    const { email, password } = body;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !password) return res.status(402).json({
        status: 402,
        success: false,
        message: "Invalid data."
    })
    if (!emailRegex.test(email)) return res.status(402).json({
        status: 402,
        success: false,
        message: "Invalid email type."
    })
    if (password.length < 4) return res.status(402).json({
        status: 402,
        success: false,
        message: "Password must be at least 4 characters"
    })

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({
        status: 404,
        success: false,
        message: "User doesn't exists."
    })
    const validPass = await compareData(password, user.password);
    if (!validPass) return res.status(402).json({
        status: 402,
        success: false,
        message: "Incorrect email or password."
    })

    const secret = process.env.SECRET_KEY;
    const token = sign({ email }, secret, { expiresIn: 60 * 60 * 24 * 7 });
    res.status(200)
        .setHeader("Set-Cookie", serialize("token", token, {
            path: "/",
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7
        }))
        .json({
            status: 200,
            success: false,
            message: "Logged in successfully.",
            data: { email: user.email, token }
        })
}
import User from "@/model/user";
import { hashData } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { emailRegex } from "@/utils/utils";

export default async function handler(req, res) {
    await connectDB();
    const { method, body } = req;
    if (method !== "POST") return;
    const { email, password, repassword } = body;
    if (!email || !password || !repassword) {
        return res.status(402).json({
            status: 402,
            success: false,
            message: "Invalid data."
        })
    }
    if (!emailRegex.test(email)) return res.status(402).json({
        status: 402,
        success: false,
        message: "Invalid email type."
    })
    if (password.length < 4 || repassword < 4) return res.status(402).json({
        status: 402,
        success: false,
        message: "Password must be at least 4 characters"
    })
    if (password !== repassword) return res.status(402).json({
        status: 402,
        success: false,
        message: "Password and repassword doesn't match."
    })
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(402).json({
        status: 402,
        success: false,
        message: "User with this email already exists."
    })

    // const username = email.split("@")[0];
    const [username] = email.split("@");
    const hashedPass = await hashData(password);
    const hashedRepass = await hashData(repassword);
    try {
        const user = await User.create({
            username,
            email,
            password: hashedPass,
            repassword: hashedRepass
        })
        if (!user) return res.status(500).json({
            status: 500,
            success: false,
            message: "Error in database."
        })
        res.status(201).json({
            status: 201,
            success: true,
            message: "User Created Successfully.",
            data: user,
        })
    } catch (err) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internl server error",
            error: err,
        })
    }
}
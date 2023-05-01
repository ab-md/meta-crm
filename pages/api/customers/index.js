import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";
import { emailRegex, lengthValidate } from "@/utils/utils";

export default async function handler(req, res) {
    await connectDB();
    const { method, body } = req;
    const { name, last_name, email, phone, postal_code } = body;
    if (method === "POST") {
        if (!name || !last_name, !email, !phone) return res.status(402).json({
            status: 402,
            success: false,
            message: "Invalid data."
        })
        // if (name.length < 3) return res.status(402).json({
        //     status:402,
        //     success: false,
        //     message: "Name must be at least 3 characters."
        // })
        lengthValidate("Name", res, name, 3);
        lengthValidate("Last name", res, last_name, 3);
        lengthValidate("Phone number", res, phone, 11);
        if (!emailRegex.test(email)) return res.status(402).json({
            staus: 402,
            success: false,
            message: "Invalid email type."
        })
        try {
            const existing = await Customer.findOne({ email });
            if (existing) return res.status(406).json({
                status: 406,
                success: false,
                message: "Customer already exists"
            })
            const customer = await Customer.create({ name, last_name, email, phone, postal_code });
            if (!customer) return res.status(500).json({
                ststus: 500,
                success: false,
                message: "Error in connecting to database."
            })
            res.status(201).json({
                status: 201,
                success: true,
                message: "User created successfully.",
                data: customer
            })
        } catch (err) {
            res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error",
                error: err,
            })
        }
    } else if (method === "GET") {
        try {
            const customers = await Customer.find();
            return res.status(200).json({
                status: 200,
                success: true,
                data: customers
            })
        } catch (err) {
            res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error",
                error: err,
            })
        }
    }
}
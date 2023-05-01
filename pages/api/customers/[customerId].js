import Customer from "@/model/customer";
import connectDB from "@/utils/connectDB";
import { emailRegex, lengthValidate } from "@/utils/utils";
import { isValidObjectId } from "mongoose";

export default async function handler(req, res) {
    await connectDB();
    const { method, body: { name, last_name, phone, email, postal_code },
        query: { customerId } } = req;
    if (!isValidObjectId(customerId)) return res.status(402).json({
        status: 402,
        success: false,
        message: "Invalid customer ID."
    })
    // const customer = await Customer.findOne({_id: customerId});
    const customer = await Customer.findById(customerId);
    if (!customer) return res.status(404).json({
        status: 404,
        success: false,
        message: "Customer doesn't exists."
    })
    if (method === "GET") {
        try {
            res.status(200).json({
                status: 200,
                success: true,
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
    } else if (method === "DELETE") {
        try {
            const deletedCustomer = await Customer.deleteOne({ _id: customerId });
            if (!deletedCustomer.deletedCount) return res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error"
            })
            res.status(201).json({
                status: 201,
                success: true,
                message: "Customer deleted successfully."
            })
        } catch (err) {
            res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error",
                error: err,
            })
        }
    } else if (method === "PUT") {
        if (!name, !last_name, !email, !phone) return res.status(422).json({
            status: 422,
            success: false,
            message: "Invalid data."
        })
        if (!emailRegex.test(email)) return res.status(422).json({
            status: 422,
            success: false,
            message: "Invalid email type."
        })
        lengthValidate("Name", res, name, 3);
        lengthValidate("Last name", res, last_name, 3);
        lengthValidate("Phone number", res, phone, 11);
        try {
            const updateCustomer = await Customer.updateOne({ _id: customerId }, {
                name,
                last_name,
                email,
                phone,
                postal_code
            });
            if (updateCustomer.modifiedCount) return res.status(201).json({
                status: 201,
                success: true,
                message: "Customer updated successfully."
            })
            res.status(500).json({
                status: 500,
                success: false,
                message: "Internal server error."
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
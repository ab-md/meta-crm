import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    postal_code: { type: String },
}, {
    timestamps: true,
})

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;
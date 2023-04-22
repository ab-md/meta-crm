import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, minLength: 4, required: true },
    repassword: { type: String, minLength: 4, required: true },
})

const User = models.User || model("User", userSchema);

export default User;
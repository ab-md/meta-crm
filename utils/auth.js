import { compare, hash } from "bcrypt";
import { verify } from "jsonwebtoken";

const hashData = async (data) => {
    const hashed = hash(data, 12);
    return hashed;
}

const compareData = async (data, hashed) => {
    const compared = await compare(data, hashed);
    return compared;
}

const verifyToken = (token, secret) => {
    try {
        const valid = verify(token, secret);
        console.log(valid);
        return { email: valid.email }
    } catch (err) {
        return false;
    }
}

const authurize = async (data, setData) => {
    try {
        const req = await fetch("/api/auth/user");
        const res = await req.json();
        setData(data.success);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

export { hashData, compareData, verifyToken, authurize }
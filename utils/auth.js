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

export { hashData, compareData, verifyToken }
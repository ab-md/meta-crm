import { hash } from "bcrypt";

const hashData = async (data) => {
    const hashed = hash(data, 12);
    return hashed;
}

export { hashData }
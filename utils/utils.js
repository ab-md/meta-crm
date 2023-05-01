const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const lengthValidate = (name, res, data, num) => {
    if (data.length < num) return res.status(402).json({
        status: 402,
        success: false,
        message: `${name} must be at least ${num} characters.`
    })
}

export { emailRegex, lengthValidate }
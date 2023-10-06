import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";

const generateToken = catchAsync(async (user) => {
    return jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1d'
    })
})

export default generateToken
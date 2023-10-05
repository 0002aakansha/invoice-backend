import jwt from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";

const generateToken = catchAsync(async (user) => {
    return await jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '7d'
    })
})

export default generateToken
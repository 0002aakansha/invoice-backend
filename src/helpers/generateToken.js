import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign({ _id: user._id, name: user.name, email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1d'
    })
}

export default generateToken
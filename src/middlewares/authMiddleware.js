import jwt from 'jsonwebtoken'
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const userAuth = catchAsync(async (req, res, next) => {
    const token = req.headers.authorization
    
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.redirect('/')
                throw ('jwt expires')
            }
            else {
                req.user = decoded
                next()
            }
        })
    }
    else next(new AppError(`token not provided!`, 404))
})

export default userAuth
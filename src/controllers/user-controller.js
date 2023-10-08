import generateToken from '../helpers/generateToken';
import hashPassword, { comparePassword } from '../helpers/hashPassword';
import User from '../models/user-model'
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const Register = catchAsync(async (req, res, next) => {
    const { name, email, gstin, pan, address, contact, account, password } = req.body

    const existingUser = await User.findOne({ email })
    console.log(existingUser);
    if (existingUser) return next(new AppError(`User Already Exists!`, 400))

    // user 
    const hashedPassword = await hashPassword(password)
    const user = await new User({
        name, email, gstin, pan, account,
        address: {
            street: address.street,
            city: address.city,
            state: address.state,
            pin: address.pin,
            country: address.country
        },
        contact,
        password: hashedPassword,
    })

    const { error } = user.joiValidate(req.body)
    if (error) {
        const msg = error.details.map(err => err.message).join(', ')
        return next(new AppError(msg, 400))
    }

    const newUser = await user.save()

    res.status(201).json({
        status: "true",
        message: "user created!",
        user: {
            name: newUser.name,
            email: newUser.email,
            address: newUser.address,
            contact: newUser.contact
        }
    })
})

const Login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
        return next(new AppError(`Unauthorized User!`, 401))
    }
    else if (await comparePassword(password, existingUser.password)) {
        // generate token
        const token =  generateToken({ _id: existingUser._id, name: existingUser.name })
        res.status(200).json({
            status: "true",
            message: 'Logged in successfully',
            user: {
                name: existingUser.name,
                email: existingUser.email
            },
            token
        })
    }
    else next(new AppError('Please provide valid credentials!', 400))
})

const getAllUsers = catchAsync(async (req, res, next) => { })

const getUserById = catchAsync(async (req, res, next) => { })

export { Register, Login, getAllUsers, getUserById }
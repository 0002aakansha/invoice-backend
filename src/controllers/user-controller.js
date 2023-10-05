import generateToken from '../helpers/generateToken';
import hashPassword, { comparePassword } from '../helpers/hashPassword';
import Details from '../models/details-model';
import User from '../models/user-model'
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const Register = catchAsync(async (req, res, next) => {
    const { name, email, gstin, pan, address, contact, account, password } = req.body

    const existingUser = User.findOne({ email })

    if (!existingUser) next(new AppError(`User Already Exists!`, 400))

    // user 
    const hashedPassword = await hashPassword(password)
    const user = await User({ name, email, gstin, pan, account, password: hashedPassword, })
    const newUser = await user.save()

    // user details
    const details = await Details({ address, contact })
    const newDetail = await details.save()

    const updatedUser = await User.findByIdAndUpdate({ _id: newUser._id }, { $set: { details: newDetail._id } }, { new: true })

    res.status(201).json({
        status: "true",
        message: "user created!",
        user: {
            name: updatedUser.name,
            email: updatedUser.email,
            address: newDetail.address,
            contact: newDetail.contact
        }
    })
})

const Login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (!existingUser) next(new AppError(`Unauthorized User!`, 401))
    else if (await comparePassword(password, existingUser.password)) {
        // generate token
        const token = await generateToken({ _id: existingUser._id, name: existingUser.name })
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
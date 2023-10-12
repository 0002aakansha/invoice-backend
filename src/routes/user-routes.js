import { Router } from 'express'
import { Login, Register, getAllUsers, getUserById, deleteUserById, forgetPasswordHandler, resetPassword } from '../controllers/user-controller'
const userRouter = Router()

userRouter.post('/login', Login)
userRouter.post('/register', Register)
userRouter.get('/', getAllUsers)
userRouter.get('/forget/password', forgetPasswordHandler)
userRouter.post('/reset/password/:token', resetPassword)
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)

export default userRouter
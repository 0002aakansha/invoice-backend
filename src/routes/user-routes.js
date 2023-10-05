import { Router } from 'express'
import { Login, Register, getAllUsers, getUserById } from '../controllers/user-controller'
const userRouter = Router()


userRouter.post('/login', Login)
userRouter.post('/register', Register)
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)

export default userRouter
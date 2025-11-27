import {Router} from 'express';
import {createUser, loginUser, logoutUser} from '../controllers/user.controller.js';

const userRouter = Router(); //creates route instance for user-related endpoints 
userRouter.post('/register', createUser); //route to create a new user
userRouter.post('/login', loginUser); //route to login a user
userRouter.post('/logout', logoutUser); //route to logout a user

export default userRouter;
import express from "express";
import { getUserCreations, getUserPublishedCreations, toggleLikeCreation } from "../controllers/userController.js";
import { auth } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-published-creations', auth, getUserPublishedCreations)
userRouter.post('/toggle-like-creations', auth, toggleLikeCreation)

export default userRouter;
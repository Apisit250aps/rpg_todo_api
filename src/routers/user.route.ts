import { Router } from "express"
import userController from "../controllers/user.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const user = Router()
user.use(authenticateJWT)
user.get("/data", userController.userData)
export default user

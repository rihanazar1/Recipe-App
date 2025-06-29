import { Router } from "express";
import userRoutes from "./user.routes"

const indexRoutes = Router()

indexRoutes.use("/api/v1/user", userRoutes)

export default indexRoutes
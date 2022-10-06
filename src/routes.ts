import express from "express"
import { authControllerRoutes } from "./controllers/AuthController/AuthControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/", authControllerRoutes)


export { routes }
import express from "express"
import { mainControllerRoutes } from './controllers/MainController/MainControllerRoutes';

let routes = express.Router()

//put your routes here

routes.use("/", mainControllerRoutes)


export { routes }
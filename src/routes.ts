import express from "express"
import * as mainControllerRoutes from "./controllers/MainController/MainControllerRoutes"

let routes = express.Router()

//put your routes here

routes.use("/", mainControllerRoutes.routes)


export { routes }
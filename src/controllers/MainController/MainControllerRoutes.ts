import { MainController } from "./MainController" 
import express from "express" 

let mainControllerRoutes = express.Router()

//put your routes here

mainControllerRoutes.get("/", (request, response) => response.send("Express TS"))

export { mainControllerRoutes }
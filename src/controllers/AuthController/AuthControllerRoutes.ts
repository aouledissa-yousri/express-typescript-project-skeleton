import { AuthController } from "./AuthController" 
import express from "express" 

let authControllerRoutes = express.Router()

//put your routes here

authControllerRoutes.get("/", (request, response) => response.send(AuthController.auth()))

export { authControllerRoutes }
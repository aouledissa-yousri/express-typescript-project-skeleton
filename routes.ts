import express from "express"


let routes = express.Router()

//put your routes here

routes.get("/", (request, response) => response.send("Express TS"))

export { routes }
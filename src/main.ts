import express from "express"
import cors from "cors"
import { routes } from "./routes"

//building application
const app = express()

//hosts that are allowed to connect to the application
const corsOptions = []

app.use(express.json())
app.use(cors(corsOptions))

//detecting input server port
let port = parseInt(process.argv[2])
if(Number.isNaN(port)) port = 3000

//main routes
app.use("/", routes)


//run express server
app.listen(port, () => {
    console.log("Application is running on http://localhost:"+port)
})
import express from "express"
import { routes } from "./routes"

const app = express()
app.use(express.json())

let port = parseInt(process.argv[2])
if(Number.isNaN(port)) port = 3000


app.use("/", routes)

app.listen(port, () => {
    console.log("Application is listening at http://localhost:"+port)
})
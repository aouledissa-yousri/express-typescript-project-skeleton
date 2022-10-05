import express from "express"

const app = express()
app.use(express.json())




app.listen(3000, () => {
    console.log("Application is listening at http://localhost:3000")
})
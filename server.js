import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv();
const app = express()

app.get("/", (req, res) => {
    res.status(200).json({ Mssg: "Server is Working" })
})


app.listen(process.env.PORT, () => {
    return console.log(`Server Started on PORT:${process.env.PORT}`)
})
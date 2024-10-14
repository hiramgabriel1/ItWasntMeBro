import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(morgan("dev"))

const bootstrap = () => app.listen(PORT)

bootstrap()
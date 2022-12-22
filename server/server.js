import cors from "cors"
import morgan from 'morgan'
import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import route from "./router/route.js"
import connect from "./database/connectDb.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = 9000
const DATABASE_URL = process.env.DATABASE_URL


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())

app.use("/api", route)

connect().then(() => {
    try {
        app.listen(port, () => {
        console.log(`Server is running at https://localhost:${port}`)
        })        
    } catch (error) {
        console.log('Server not connected')        
    }
}).catch(error => {
    console.log('Invalid Db connection')
})


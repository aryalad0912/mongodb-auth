import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import authRoute from "./routes/authRoute.js";
const app = express()
dotenv.config()

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.use(express.json())
app.use("/api/v1/auth", authRoute)
const port = process.env.PORT || 27017



const start = async() =>{
    await connectDB(process.env.MONGO_URL)
    app.listen(port,()=>{
        console.log(`running on ${port}`)
    })

}
start()
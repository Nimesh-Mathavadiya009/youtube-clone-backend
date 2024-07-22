// require('dotenv').config({path : './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` server is running at port : ${process.env.PORT}`);
    })

    app.on("errror",(error) => {
        console.log("error :", error)
        throw error
    })
    
})
.catch((err) => {
    console.log("MONGO db connection error !!!!", err)
})










// import express from "express"
// const app = express()
// ( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("errror",(error) => {
//             console.log("error :", error)
//             throw error
//         })
//     } catch (error) {
//         console.log("error :", error)
//         throw error
//     }
// })()
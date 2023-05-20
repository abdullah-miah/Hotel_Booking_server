import  express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js";
import userRoute from "./api/routes/users.js";
import hotelRoute from "./api/routes/hotels.js";
import roomRoute from "./api/routes/rooms.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();


//mongodb and mongoose connection
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongoDb')
      } catch (error) {
        throw error;
      }
};
//disconnection on mongodb
mongoose.connection.on("disconnected", ()=>{
    console.log('mongodb disconnected');
});



// api call

//midlewear
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

//app listening port 
app.listen(8800, ()=>{
    connect()
    console.log('connected to backend');
})

import mongoose from "mongoose";

export const dbconnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "restaurant"
    }).then(()=>{
        console.log("Database connected");
        
    }).catch((err)=>{
        console.log("Failed to connect", err);
        
    })
}
import mongoose from "mongoose";


export const DBconnection=async()=>{
    try {
        await mongoose.connect(process.env.DBURL)
        console.log("dbconneced via mongoose")
    } catch (error) {
        console.log(error)        
    }
}
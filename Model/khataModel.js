import mongoose from "mongoose";

const khataschema=new mongoose.Schema({
    creditorId:{type:mongoose.Schema.ObjectId,ref:"User"},
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true}

})

export const KhataModel=mongoose.model("Khata",khataschema)
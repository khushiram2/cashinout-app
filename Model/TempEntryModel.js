import mongoose from "mongoose";

const tempEntrySchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,require:true},
    phone:{type:Number,required:true},
    amount:{type:Number,required:true}
})


export const TempEntryModel=mongoose.model("TempEntry",tempEntrySchema)
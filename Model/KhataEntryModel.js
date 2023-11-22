import mongoose from "mongoose";

const KhataEntrySchema= new mongoose.Schema({
    khataId:{type:mongoose.Schema.ObjectId,required:true,ref:"Khata"},
    amount:{type:Number,required:true},
    paid:{type:Boolean,default:false}
})


export const KhataEntryModel=mongoose.model("KhataEntry",KhataEntrySchema)
import mongoose from "mongoose";



const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    adminStatus:{type:Boolean,default:false},
    subUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]    
},{
    timestamps:true
})





export const User=mongoose.model("User",userSchema)
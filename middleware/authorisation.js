
import {User} from "../Model/userModel.js"


export const isEmailUnique =async (req,res,next) => {
    try {
        const {email}=req.body.userData
        const userExist=await User.findOne({email:email})
        if(userExist){
            res.status(206).send({status:true,message:"user already exist please login"})
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({status:false,message:"some error occured while checking email"})
    }
    
};

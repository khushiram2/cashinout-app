import { addNewUser, findUserByemail } from "../database/querreis.js"
import {hashPassword,comparePassword} from "../utilities/paswordUtils.js"
import { genToken } from "../utilities/tokenUtils.js"


export const registerUserController = async (req,res) => {
try {
    const {userData}=req.body   
    const hashedPassword= await hashPassword(userData.password)
    const userAddedToDB=await addNewUser({...userData,password:hashedPassword})
if(userAddedToDB){
    const token=await genToken(userAddedToDB._id)
    res.cookie("token",token,{httpOnly:true})
    res.status(200).send({status:true,message:"user registered sucessfully"})
}else{
    res.status(500).send({status:false,message:"some error occured while registering user"})
}
} catch (error) {
    console.log(error)
    res.status(500).send({status:false,message:"some error occured while registering user"})
}
}



export const loginController =async (req,res) => {
    try {
        const {email,password}=req.body
        const userFound=await findUserByemail(email)
        if(userFound){
            const match=await comparePassword(password,userFound.password)
            const token=await genToken(userFound._id)
            if(match){
                res.cookie("token",token,{httpOnly:true})
                res.status(200).send({status:true,message:"user loggedin sucessfully"})
            }else{
                res.status(200).send({status:false,message:"invalid credentials"})
            }
           
        }else{
            res.status(500).send({status:false,message:"invalid credentials"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({status:false,message:"invalid credentials"})
        
    }
};


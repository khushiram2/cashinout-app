import { Response } from "../classes/responseclass.js"
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
    const addedUserResp=new Response(true,{token:token},"user registered sucessfully")
    res.status(200).send(addedUserResp)
}else{
    const notAddedResp=new Response(false,"","couldn't register the user.please try again.")
    res.status(200).send(notAddedResp)
}
} catch (error) {
    const errResp=new Response(false,"","internal server error. please try again")
    console.log(error)
    res.status(500).send(errResp)
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
                const matchResp= new Response(true, {token:token},"user logged in sucessfully")
                res.status(200).send(matchResp)
            }else{
                const notMatchResp=new Response(false,"","invalid credentials")
                res.status(200).send(notMatchResp)
            }
           
        }else{
            const notFoundResp=new Response(false,"","user doen't exist" )
            res.status(200).send(notFoundResp)
        }
    } catch (error) {
        console.log(error);
        const errResp=new Response(false,"","error occured while loggin in")
        res.status(500).send(errResp)
        
    }
};


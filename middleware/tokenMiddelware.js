import { TokenExpiredError } from "jsonwebtoken"
import { verifyToken } from "../utilities/tokenUtils"




export const isTokenValid =async (req,res,next) => {
    try {
        const token=req.headers.authorization
        const verifiedToken= await verifyToken(token)
        if(verifiedToken){
            req.userId=verifiedToken.id
            next()
        }else{
            res.status(200).send({status:false,message:"token not valid"})
        }
    } catch (error) {
        if(error instanceof TokenExpiredError){
            res.status(500).send({status:false,message:"token expired"})
        }else{
            res.status(500).send({status:false,message:"token verification error"})
        }
       

    }
}
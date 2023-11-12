import jwt from "jsonwebtoken"


export const genToken=async(id)=>{
    try {
        const token= jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"1d"})
        if(!token)throw new Error("couldn,t assign a token")
        return token
    } catch (error) {
        console.log(error)
    }
}


export const verifyToken = async (token) => {
    try {
        const verified= await jwt.verify(token,process.env.SECRET_KEY)
        if(!verified) throw new Error("not a valid token ")
            return verified
    } catch (error) {
        console.log(error)
    }
};

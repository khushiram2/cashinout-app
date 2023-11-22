import { User } from "../Model/userModel.js";


export const addNewUser = async (userData) => {
    try {
        return await User.create(userData)
    } catch (error) {
        console.log(error)
    }
    
};

export const findUserByemail = async (email) => {
try {
    return await User.findOne({email:email})
} catch (error) {
    console.log(error)
}    
};


export const getUserById = async (id) => {
    try {
        return await User.findById(id)
    } catch (error) {
        console.log(error)
    }
}

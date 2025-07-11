import userModel from "../models/user.model.js"
import {createUser} from "../service/user.service.js"

export const registerUserController = async (req , res) => {

    const {username, email, password} = req.body

    try {
        const user = await createUser({
            username, email, password
        })

        const token = user.generateToken()

        res.cookie("token", token)

        return res.status(200).json({message : "user created successfully", user})
    } catch (error) {
        res.status(500).json({message : "user not created", error})
        console.log(error)
    }
}

export const loginUserController = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await userModel.findOne({
            username
        })

        if(!user){
            return res.status(401).json({
                message: "invalid credential"
            })
        }

        const isPasswordValid = await user.comparePassword(password)

        if(!isPasswordValid){
            return res.status(401).json({
                message: "invalid credential"
            })
        }

        const token = user.generateToken()

        res.cookie("token", token)

        return res.status(200).json({message: "user created successfully", user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"user not login", error})
    }
}
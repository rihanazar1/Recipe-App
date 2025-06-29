import {createUser} from "../service/user.service.js"

export const registerUserController = async (req , res) => {

    const {username, email, password} = req.body

    try {
        const user = await createUser({
            username, email, password
        })

        return res.status(200).json({message : "user created successfully", user})
    } catch (error) {
        res.status(500).json({message : "user not created", err})
    }
}
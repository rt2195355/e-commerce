import { hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/user.models.js';


const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        //validations
        if (!name) {
            return res.send({ error: "Name is required!!" })
        }
        if (!email) {
            return res.send({ error: "Email is required!!" })
        }
        if (!password) {
            return res.send({ error: "Password is required!!" })
        }
        if (!phone) {
            return res.send({ error: "Phone is required!!" })
        }
        if (!address) {
            return res.send({ error: "Address is required!!" })
        }

        //Check User
        const existingUser = await userModel.findOne({ email })
        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "Already Registered !! Please Login"
            })
        }

        //Register User
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save()
        res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        })



    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        })
    }
};


export { registerController };
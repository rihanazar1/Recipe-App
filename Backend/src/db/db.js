import mongoose from "mongoose";
import config from "../config/config.js";

const connect = () => {
    mongoose.connect(config.MONGO_URI)
    .then(()=> {
        console.log("Database connected")
    })
    .catch(()=> {
        console.log("Connection Denied")
    })
}

export default connect;
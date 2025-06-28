import {config} from "dotenv"
config()

const _config = {
    PORT : process.env.PORT || 4500,
    MONGO_URI : process.env.MONGO_URI || "mongodb+srv://rihanazar0:O3foRJNH1cKTvSsv@cluster1.kawjq.mongodb.net/recipe-app"
}

export default Object.freeze(_config);

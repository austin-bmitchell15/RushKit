import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
const auth = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        console.log(token);

        let decodedData;

        if (token) {
            decodedData = jwt.verify(token, process.env.TOKEN_KEY);

            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;
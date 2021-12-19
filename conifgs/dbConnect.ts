import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class dbEcomerce {
    constructor() { }
    static dbConnect = async () => {
        try {
            const dbPathUrl = process.env.MONGO_URL;
            await mongoose.connect(`${dbPathUrl}`)
            console.log('db connected')

        } catch (error) {
            console.log(error);
        }

    }
}
export default dbEcomerce;
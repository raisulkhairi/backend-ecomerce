import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart:[{type : Schema.Types.ObjectId,ref : 'cart'}],
},
    { timestamps: true },
);

const user = mongoose.model('user', userSchema);
export default user;
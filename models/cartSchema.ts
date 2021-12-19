import mongoose, { Schema } from 'mongoose';

const cartSchema = new mongoose.Schema({
    user_id: { type: String },
    products: [
        {
            productId: { type: String },
            quantity: { type: Number },
            default: { type: Number, default: 1 },
        },
    ],
},
    { timestamps: true },
)
const cart = mongoose.model('cart', cartSchema);
export default cart;
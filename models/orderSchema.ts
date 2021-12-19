import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    product: [
        {
            productId: { type: String },
            quantity: { type: Number },
            default: { type: Number, default: 1 }
        },

    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    type: { type: String, default: 'panding' },
},
    { timestamps: true },
);

const order = mongoose.model('order', orderSchema);
export default order;
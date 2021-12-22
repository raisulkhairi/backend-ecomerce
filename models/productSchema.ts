import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String },
    size: { type: String },
    color: { type: String },
    price: { type: String, required: true },

},
    { timestamps: true },
);

const product = mongoose.model('product', productSchema);
export default product;
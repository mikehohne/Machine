import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const CartSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    expired: {
        type: Boolean,
        default: false
    },
    _product: {
        type: Schema.ObjectId, ref: 'Product',
        required: true
    },
    _creator: {
        type: Schema.ObjectId, ref: 'Contact'
    },
    totalPrice: Number
})


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
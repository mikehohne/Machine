import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const CartSchema = new Schema({
    _creator: {
        type: Schema.ObjectId, ref: 'Contact'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    expired: {
        type: Boolean,
        default: false
    }
})


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
import mongoose from 'mongoose';
import shortId from 'shortid';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const OrderSchema = new Schema({
    OrderNumber: {
        type: String,
        required: true,
        //build own npm to check what last order number was and append 1
        default: shortId.generate
    },
    isCheckout: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.ObjectId, ref: 'Contact'
    },
    totalPrice: Number
})


const Order = mongoose.model('Order', OrderSchema);

export default Order;
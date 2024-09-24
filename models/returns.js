import { model, Schema } from 'mongoose';

const returnSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    }
});

const Return = model('Return', returnSchema);
export default Return;
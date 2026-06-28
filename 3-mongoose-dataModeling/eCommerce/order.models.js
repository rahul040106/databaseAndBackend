import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        reuired: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address: {
        type:String,
        required: true
    },
    status:{
        type: String,
        enum: ["Pending", "Canceled", "DELIVERED"], //choises this are the only options
        default: "PENDING"
    }
}, {timestamps:true})

export const Order = mongoose.model("Order", orderSchema)
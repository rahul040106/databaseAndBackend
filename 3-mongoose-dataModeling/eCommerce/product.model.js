import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        //server (public url)   cloudnary and url in here
        type: String
    }, 
    price: {
        type: String,
        default:0,
    },
    stock: {
        default:0,
        type: Number
    },
    catagory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Catagory"
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const Product = mongoose.model("Product", productSchema)
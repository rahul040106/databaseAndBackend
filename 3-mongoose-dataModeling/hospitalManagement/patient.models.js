import mongoose from "mongoose"

const patientRecordsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectsId,
        ref: "Hospital"
    }

}, { timestamps: true })

export const Patient = mongoose.model("Patient", patientRecordsSchema)
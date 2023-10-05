import mongoose, { Schema, model } from "mongoose";

const schema = Schema({
    name: { type: String, unique: true, trim: true, uppercase: true, required: true },
    email: { type: String, unique: true, trim: true },
    gstin: { type: String, required: true, uppercase: true, unique: true },
    pan: { type: String, uppercase: true, unique: true, required: true, trim: true },
    account: {
        acc_no: { type: String, unique: true, trim: true, required: true },
        bank: { type: String, trim: true, required: true },
        ifsc: { type: String, trim: true, required: true }
    },
    details: { type: mongoose.Schema.Types.ObjectId, ref: 'Detail' },
    password: { type: String, trim: true, required: true },
})


const User = model('user', schema)
export default User
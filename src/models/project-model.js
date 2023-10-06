import mongoose, { Schema, model } from "mongoose";

const schema = Schema({
    description: { type: String, required: true, trim: true },
    rate: { type: Number, required: true },
    totalHours: { type: String, required: true },
    amount: {},
    conversionRate: { type: Number, required: true },
    projectBelongsTo: { type: String, required: true, trim: true },
    projectCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const Project = model('project', schema)
export default Project
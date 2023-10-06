import mongoose, { Schema, model } from "mongoose";
import { projectValidator } from "../utils/joiValidator";

const projectSchema = Schema({
    description: { type: String },
    rate: { type: Number },
    totalHours: { type: String },
    amount: { type: Number },
    conversionRate: { type: Number },
    projectBelongsTo: { type: String },
    projectCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

projectSchema.methods.projectValidator = function (obj) {
    const schema = projectValidator
    return schema.validate(obj)
}

const Project = model('project', projectSchema)
export default Project
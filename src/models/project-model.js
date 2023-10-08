import mongoose, { Schema, model } from "mongoose";
import { projectValidator } from "../utils/joiValidator";

const projectSchema = Schema({
    description: { type: String, unique: true, required: true },
    rate: { type: Number, required: true },
    totalHours: { type: Number, required: true },
    projectAmount: { type: Number, required: true },
    conversionRate: { type: Number, required: true },
    projectBelongsTo: { type: mongoose.Schema.Types.ObjectId, ref: 'organization', required: true },
    projectCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
})

projectSchema.methods.projectValidator = function (obj) {
    const schema = projectValidator
    return schema.validate(obj)
}

const Project = model('project', projectSchema)
export default Project
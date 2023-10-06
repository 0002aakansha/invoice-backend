import mongoose, { Schema, model } from 'mongoose'
import { OrgValidator, UpdateValidator } from '../utils/joiValidator'

const orgSchema = Schema({
    name: { type: String, unique: true },
    gstin: { type: String, unique: true, uppercase: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        pin: { type: String },
        country: { type: String }
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
    companyCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

orgSchema.methods.orgValidator = function (obj) {
    const schema = OrgValidator
    return schema.validate(obj)
}

const Organization = model('organization', orgSchema)

export default Organization
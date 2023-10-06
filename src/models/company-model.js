import mongoose, { Schema, model } from 'mongoose'

const schema = Schema({
    name: { type: String, unique: true, required: true },
    gstin: { type: String, unique: true, uppercase: true, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pin: { type: String, required: true },
        country: { type: String, required: true }
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
    companyCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const Organization = model('organization', schema)

export default Organization
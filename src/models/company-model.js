import mongoose, { Schema, model } from 'mongoose'

const schema = Schema({
    name: { type: String, unique: true, required: true },
    gstin: { type: String, unique: true, uppercase: true, required: true },
    details: { type: mongoose.Schema.Types.ObjectId, ref: 'Detail' },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'project' }],
    companyCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
})

const Organization = model('organization', schema)

export default Organization
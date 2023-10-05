import { Schema, model } from 'mongoose'

const schema = Schema({
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        pin: { type: String },
        country: { type: String }
    },
    contact: { type: Number, trim: true }
})

const Details = model('Detail', schema)

export default Details
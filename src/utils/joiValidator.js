import Joi from "joi";

export default (
    Joi.object({
        name: Joi.string()
            .min(3)
            .max(40)
            .trim()
            .required(),
        email: Joi.string()
            .trim()
            .email({ ignoreLength: true, minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } })
            .required(),
        gstin: Joi.string()
            .trim()
            .alphanum()
            .length(15)
            .required(),
        pan: Joi.string()
            .trim()
            .alphanum()
            .length(10)
            .required(),
        account: Joi.object({
            acc_no: Joi.string()
                .trim()
                .pattern(new RegExp('^[0-9]{11,16}$'))
                .required(),
            bank: Joi.string()
                .trim()
                .required(),
            ifsc: Joi.string()
                .alphanum()
                .trim()
                .uppercase()
                .length(11)
                .required()
        }),
        address: Joi.object({
            street: Joi.string()
                .max(30)
                .required(),
            city: Joi.string()
                .min(3)
                .max(15)
                .required(),
            state: Joi.string()
                .min(3)
                .max(15)
                .required(),
            pin: Joi.string()
                .pattern(new RegExp('^[0-9]{6}$'))
                .required(),
            country: Joi.string()
                .min(3)
                .max(15)
                .required()
        }),
        contact: Joi.string()
            .trim()
            .pattern(new RegExp('^[0-9]{10}$'))
            .required(),
        password: Joi.string()
            .trim()
            .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
            .required()
    })
)
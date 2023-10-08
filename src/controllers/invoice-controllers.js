import Invoice from "../models/invoice-model"
import AppError from "../utils/appError"
import catchAsync from "../utils/catchAsync"

const createInvoice = catchAsync(async (req, res, next) => {
    const newInvoice = await Invoice({ ...req.body })
    await newInvoice.save()

    res.status(201).json({ "status": "true", newInvoice })
})

const getAllInvoice = catchAsync(async (req, res, next) => {
    const allInvoices = await Invoice.find({ invoiceCreatedBy: req.user._id}).populate({
        path: "projectsSelected",
        populate: {
            path: 'projectDetails',
            model: 'project'
        }
    })
    res.status(201).json({ "status": "true", allInvoices })
})

const getInvoiceById = catchAsync(async (req, res, next) => { })

const updateInvoice = catchAsync(async (req, res, next) => { })

const deleteInvoice = catchAsync(async (req, res, next) => { })

export { createInvoice, getAllInvoice, getInvoiceById, updateInvoice, deleteInvoice }

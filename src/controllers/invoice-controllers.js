import AppError from "../utils/appError"
import catchAsync from "../utils/catchAsync"

const createInvoice = catchAsync(async (req, res, next) => {
    console.log(req.body);
})

const getAllInvoice = catchAsync(async (req, res, next) => { })

const getInvoiceById = catchAsync(async (req, res, next) => { })

const updateInvoice = catchAsync(async (req, res, next) => { })

const deleteInvoice = catchAsync(async (req, res, next) => { })

export { createInvoice, getAllInvoice, getInvoiceById, updateInvoice, deleteInvoice }

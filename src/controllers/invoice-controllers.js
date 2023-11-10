import Invoice from "../models/invoice-model";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const createInvoice = catchAsync(async (req, res, next) => {
  const {
    createdFor,
    invoiceNumber,
    createdOn,
    dueDate,
    projects,
    subtotal,
    GST,
    GrandTotal,
    status,
    invoiceType,
    active,
  } = req.body;

  const invoice = await Invoice({
    createdFor,
    invoiceNumber,
    createdOn,
    dueDate,
    projects,
    subtotal,
    GST,
    GrandTotal,
    invoiceCreatedBy: req.user._id,
    status,
    active,
    invoiceType,
  });
  const newInvoice = await invoice.populate("createdFor");
  await invoice.save();

  res.status(201).json({ status: "true", newInvoice });
});

const getAllInvoice = catchAsync(async (req, res, next) => {
  const allInvoices = await Invoice.find({
    invoiceCreatedBy: req.user._id,
    active: true,
  })
    .populate("createdFor")
    .populate("projects.projectDetails")
    .populate("invoiceCreatedBy");
  res.status(201).json({ status: "true", allInvoices });
});

const getInvoiceById = catchAsync(async (req, res, next) => {});

const updateInvoice = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const updateData = req.body;

  const userExists = await Invoice.findById({ _id: id, active: true });
  if (!userExists)
    next(new AppError("Invalid ObjectId! Please provide valid Id."));

  const updatedInvoice = await Invoice.findByIdAndUpdate(
    { _id: id },
    { $set: updateData },
    { new: true }
  )
    .populate("createdFor")
    .populate("projects.projectDetails")
    .populate("invoiceCreatedBy");

  res.status(200).json({ status: "true", updatedInvoice });
});

const deleteInvoice = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const userExists = await Invoice.findById({ _id: id });
  if (!userExists)
    next(new AppError("Invalid ObjectId! Please provide valid Id."));

  await Invoice.findByIdAndUpdate({ _id: id }, { $set: { active: false } });

  res.status(200).json({ status: "true", message: "Invoice deleted!" });
});

export {
  createInvoice,
  getAllInvoice,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};

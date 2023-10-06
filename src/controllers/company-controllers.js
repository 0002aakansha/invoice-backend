import Organization from "../models/company-model"
import AppError from "../utils/appError"
import catchAsync from "../utils/catchAsync"

const createCompany = catchAsync(async (req, res) => {
    const { name, gstin, address } = req.body

    const org = await Organization({ name, companyCreatedBy: req.user._id })

    const session = await Organization.startSession()
    console.log(session);

    // const newOrg = await org.save()

    // const detail = await Detail({ gstin,address })
    // const newDetail = await detail.save()

    // newOrg.details = newDetail._id;
    // const updatedOrg = await newOrg.save();

    // res.status(201).json({ status: 'true', message: `Registered successfully!`, new: updatedOrg })
})

const getAllListedCompanies = catchAsync(async (req, res, next) => {
    console.log("getAll");
    const getAll = await Organization.find({ companyCreatedBy: req.user._id }).populate('details')


    if (getAll.length === 0) return next(new AppError(`There are no listed companies!`, 404))

    res.status(200).json({ status: 'true', allListedCompanies: getAll })
})

const getCompanyByID = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const searchResult = await Organization.find({ companyCreatedBy: req.user._id, _id: id })

    if (!searchResult) return next(new AppError('Not Found!, Please check company_id', 404))

    res.status(200).json({ status: 'true', companyDetail: searchResult })
})


export { createCompany, getAllListedCompanies, getCompanyByID }

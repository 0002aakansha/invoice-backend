import Organization from "../models/company-model"
import Project from "../models/project-model"
import AppError from "../utils/appError"
import catchAsync from "../utils/catchAsync"

const createProject = catchAsync(async (req, res, next) => {
    const { description, rate, amount, conversionRate, companyId } = req.body

    // find company by it's id
    const projectBelongsTo = await Organization.findOne({ companyCreatedBy: req.user._id, _id: companyId })

    if (!projectBelongsTo) return next(new AppError(`Can't found company details! Please provide valid info`, 404))

    // create new project

    const session = await Project.startSession()
    session.startTransaction()
    const opts = { session }

    const newProject = await Project({ description, rate, projectAmount: amount, conversionRate, projectBelongsTo: projectBelongsTo._id, projectCreatedBy: req.user._id })
    const result = await newProject.save(opts)

    const { error } = newProject.projectValidator({ description, rate, projectAmount: amount, conversionRate, projectBelongsTo: companyId })

    if (error) {
        const msg = error.details.map(err => err.message).join(', ')
        return next(new AppError(msg), 400)
    }

    // update companydetails collection
    projectBelongsTo.projects.push(result._id)
    await projectBelongsTo.save(opts)

    await session.commitTransaction()
    session.endSession()

    res.status(201).json({ status: 'true', message: 'project created successfully!', newProject: result })
})

const getAllProjectsOfUser = catchAsync(async (req, res, next) => {
    // getting all projects of users
    const allListedProjects = await Project.find({ projectCreatedBy: req.user._id }).populate('projectBelongsTo').populate('projectCreatedBy')

    if (allListedProjects.length === 0) return next(new AppError(`There are no listed projects!`, 404))

    res.status(200).json({ status: 'true', allListedProjects })
})

const getAllProjectsBelongsTo = catchAsync(async (req, res, next) => {
    // getting all projects of company created by user
    const allListedProjects = await Project.find({ projectCreatedBy: req.user._id, projectBelongsTo: req.params.id })

    if (allListedProjects.length === 0) return next(new AppError(`There are no listed projects!`, 404))

    res.status(200).json({ status: 'true', allListedProjects })
})

const getProjectById = catchAsync(async (req, res, next) => {
    const { cId, pId } = req.params
    // const project = await Project.findOne({ projectCreatedBy: req.user._id, projectBelongsTo: Cid, _id: Pid })
    const project = await Project.findOne({ projectBelongsTo: cId, _id: pId })

    if (!project) return next(new AppError('Not Found! Please provide valid details!', 400))

    res.status(200).json({ status: 'true', project })
})

const updateProjectById = catchAsync(async (req, res, next) => {
    const { cId, pId } = req.params
    const updatedData = req.body

    if (Object.keys(updatedData).length === 0) return next(new AppError(`Please provide data to update!`, 400))

    await Project.updateOne({ projectBelongsTo: cId, _id: pId }, { $set: { ...updatedData } }, { new: true })
    const updatedProject = await Project.findById({ _id: pId })

    if (!updatedProject) return next(new AppError('Error while updating project', 400))

    res.status(200).json({ status: 'true', updatedProject })
})

const deleteProjectById = catchAsync(async (req, res, next) => {
    const { cId, pId } = req.params

    const session = await Project.startSession()
    session.startTransaction()
    const opts = { session }

    const project = await Project.deleteOne({ projectBelongsTo: cId, _id: pId }, opts)
    if (!project.deletedCount) return next(new AppError('Not Found! Please check project_id', 400))

    await Organization.findByIdAndUpdate({ _id: cId }, { $pull: { projects: pId } }, opts)

    await session.commitTransaction()
    session.endSession()

    res.status(200).json({ status: 'true', message: 'Project deleted successfully!' })
})

export { createProject, getAllProjectsOfUser, getAllProjectsBelongsTo, getProjectById, updateProjectById, deleteProjectById }

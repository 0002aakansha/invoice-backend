import { Router } from 'express'
const companyRouter = Router()

import userAuth from '../middlewares/authMiddleware'
import { createCompany, getAllListedCompanies, getCompanyByID } from '../controllers/company-controllers'

companyRouter.post('/', userAuth, createCompany)
companyRouter.get('/', userAuth, getAllListedCompanies)
companyRouter.get('/:id', userAuth, getCompanyByID)
// companyRouter.get('/project/:id', userAuth, getProjectsOfCompany)
// companyRouter.patch('/:id', userAuth, updateCompanyByID)
// companyRouter.delete('/:id', userAuth, deleteCompanyByID)

export default companyRouter
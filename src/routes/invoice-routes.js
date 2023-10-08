import { Router } from 'express'
const invoiceRouter = Router()

import userAuth from '../middlewares/authMiddleware'
import { createInvoice, getAllInvoice } from '../controllers/invoice-controllers'

invoiceRouter.post('/', userAuth, createInvoice)
invoiceRouter.get('/', userAuth, getAllInvoice)
// invoiceRouter.get('/:id', userAuth, getCompanyByID)
// invoiceRouter.get('/project/:id', userAuth, getProjectsOfCompany)
// invoiceRouter.patch('/:id', userAuth, validateCompanyReqBody, updateCompanyById)
// invoiceRouter.delete('/:id', userAuth, deleteCompanyById)

export default invoiceRouter
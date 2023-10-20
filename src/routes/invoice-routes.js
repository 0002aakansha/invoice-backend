import { Router } from 'express'
const invoiceRouter = Router()

import userAuth from '../middlewares/authMiddleware'
import { createInvoice, deleteInvoice, getAllInvoice, updateInvoice } from '../controllers/invoice-controllers'

invoiceRouter.post('/', userAuth, createInvoice)
invoiceRouter.get('/', userAuth, getAllInvoice)
// invoiceRouter.get('/:id', userAuth, getCompanyByID)
// invoiceRouter.get('/project/:id', userAuth, getProjectsOfCompany)
invoiceRouter.patch('/:id', userAuth, updateInvoice)
invoiceRouter.delete('/:id', userAuth, deleteInvoice)

export default invoiceRouter                                    
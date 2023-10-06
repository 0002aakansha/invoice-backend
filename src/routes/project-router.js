import { Router } from 'express'
const projectRouter = Router()

import { createProject } from '../controllers/project-controllers'

projectRouter.post('/', createProject)
// projectRouter.get('/', getAllListedProjects)
// projectRouter.get('/:id', getProjectByID)
// projectRouter.patch('/:id', updateProjectByID)
// projectRouter.delete('/:id', deleteProjectByID)

export default projectRouter
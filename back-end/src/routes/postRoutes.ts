import { Router } from 'express'
import * as postController from '../controllers/postsController'

const router = Router()

router.post('/filters', postController.handleFilters)

export default router

import { Router } from 'express'
import * as postController from '../controllers/postsController'

const router = Router()

router.post('/filters', postController.handleFilters)
router.post('/cities', postController.getCities)

export default router

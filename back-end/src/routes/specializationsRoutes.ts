import { Router } from 'express'
import * as specializationsController from '../controllers/specializationsController'

const router = Router()

router.get('/specializations', specializationsController.getSpecializations)

export default router

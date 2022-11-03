import express from 'express'
import { InspectorApi } from '../controllers/allocateInspect.controller.js'

const router = express.Router()

router.post('/add', InspectorApi().create)
router.get('/:Inspector_id', InspectorApi().get)

export default router

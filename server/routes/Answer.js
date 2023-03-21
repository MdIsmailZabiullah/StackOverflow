import express from 'express'

import {postAnsers,deleteAnsers}  from '../controllers/answer.js'

const router= express.Router()

router.patch('/post/:id', postAnsers)
router.patch('/delete/:id', deleteAnsers)

export default router
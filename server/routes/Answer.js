import express from 'express'

import {postAnsers,deleteAnswer}  from '../controllers/answer.js'

const router= express.Router()

router.patch('/post/:id', postAnsers)
router.patch('/delete/:id', deleteAnswer)

export default router
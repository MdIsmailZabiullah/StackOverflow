import express from 'express'

import {postAnsers}  from '../controllers/answer.js'

const router= express.Router()

router.patch('/post/:id', postAnsers)

export default router
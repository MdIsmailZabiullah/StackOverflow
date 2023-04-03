 import express from 'express'

import {AskQuestion}  from '../controllers/Qusetions.js'
import {getAllquestions, deleteQuestion,voteQuestion}  from '../controllers/Qusetions.js'
import auth from '../middlewares/auth.js'

const router= express.Router()

router.post('/Ask', auth, AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id',auth,voteQuestion)

export default router
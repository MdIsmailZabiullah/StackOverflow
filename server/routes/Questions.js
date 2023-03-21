import express from 'express'

import {AskQuestion}  from '../controllers/Qusetions.js'
import {getAllquestions, deleteQuestion}  from '../controllers/Qusetions.js'

const router= express.Router()

router.post('/Ask',AskQuestion)
router.get('/get',getAllquestions)
router.delete('/delete/:id', deleteQuestion)

export default router
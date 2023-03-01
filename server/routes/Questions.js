import express from 'express'

import {AskQuestion}  from '../controllers/Qusetions.js'
import {getAllquestions}  from '../controllers/Qusetions.js'

const router= express.Router()

router.post('/Ask',AskQuestion)
router.get('/get',getAllquestions)

export default router
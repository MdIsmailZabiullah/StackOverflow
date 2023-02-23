import express from 'express'

import {AskQuestion}  from '../controllers/Qusetions.js'

const router= express.Router()

router.post('/Ask',AskQuestion)

export default router
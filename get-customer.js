import express from 'express'
import { customers } from './local-variable.js'
const customersRouter = express.Router()
customersRouter.get('/', (req, res) => {
    res.send(customers)
})

export default customersRouter;
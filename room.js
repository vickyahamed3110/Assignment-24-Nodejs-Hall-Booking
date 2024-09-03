import express from 'express'
import {rooms} from './local-variable.js'

const roomRouter = express.Router()
roomRouter.post('/', (req, res) => {
    const data = req.body
    try {
        rooms.push({id:Math.floor(1 + Math.random() * 99), ...data, status:'available'})
        res.send({message:'Room Created Successfully'})
    } catch (error) {
      console.log(error) 
      res.status(500).send({message:'Something went wrong'}) 
    }
    
})

export default roomRouter;
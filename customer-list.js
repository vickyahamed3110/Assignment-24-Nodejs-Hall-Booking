import express from 'express'
import { rooms } from './local-variable.js';

const customerListRouter = express.Router()
customerListRouter.get('/:customer', (req, res) =>{
    const customer_name = req.params.customer;
    const room = rooms.filter((room) => room.customer_name == customer_name)
    res.send(room.map((customer) =>({
        customer_name : customer.customer_name,
        room_name : customer.room_name,
        date : customer.date,
        start_time : customer.start_time,
        end_time : customer.end_time,
        booking_id : customer.booking_id,
        booking_status : customer.status
    })))
})

export default customerListRouter;
import express from 'express'
import { rooms, customers, booking } from './local-variable.js'

const roomBookRouter = express.Router()
roomBookRouter.get('/', (req, res) => {
    res.send(rooms)
})
roomBookRouter.post('/',(req, res) => {
    const data = req.body
    const roomIdx = rooms.findIndex((room) => room.id == data.roomId)
    if((rooms[roomIdx].status == 'available') || (data.date != rooms[roomIdx].date)){
        rooms[roomIdx] = {...data, ...rooms[roomIdx], status:'booked', booking_id: Math.floor(1 + Math.random() * 99)}
        customers.push({...data, room_name: rooms[roomIdx].name})
        booking.push({...data, booking_id: rooms[roomIdx].booking_id})
        res.send({message: "Room Booked Successfully"})
    } else {
        res.send({message: "Rooms are not available"})
    }
})
export default roomBookRouter;
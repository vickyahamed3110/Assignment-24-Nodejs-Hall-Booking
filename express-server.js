import express from 'express'
import roomRouter from './room.js';
import roomBookRouter from './book-room.js';
import customersRouter from './get-customer.js';
import customerListRouter from './customer-list.js';
const server = express()
server.use(express.json())
server.use('/room', roomRouter)
server.use('/booking', roomBookRouter)
server.use('/customers', customersRouter)
server.use('/customer', customerListRouter)
const port = 5000;
server.listen(port, () => {
console.log(Date().toString(), "express port :", port)
})
import 'reflect-metadata'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import morgan from 'morgan'

dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(morgan('dev'))

const PORT = 4000
const HOST = '0.0.0.0'

server.get('/', (request: Request, response: Response) => {
  response.send('Hello Word')
})

server.listen(PORT, HOST, () => console.log('Server running 🔥'))
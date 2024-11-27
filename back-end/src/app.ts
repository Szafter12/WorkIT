import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import spacializationsRoutes from './routes/specializationsRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api', spacializationsRoutes)

app.listen(port, () => {
	console.log(`serwer dziala na porcie ${port}`)
})

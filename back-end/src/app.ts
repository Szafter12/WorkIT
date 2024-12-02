import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import spacializationsRoutes from './routes/specializationsRoutes'
import postRoutes from './routes/postRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(cors({}))

app.use('/', spacializationsRoutes)
app.use('/', postRoutes)
app.use('/', postRoutes)

app.listen(port, () => {
	console.log(`serwer dziala na porcie ${port}`)
})

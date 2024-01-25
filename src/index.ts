import express, { json } from 'express'
import morgan from 'morgan'
import signale from 'signale'

const app = express()
app.use(express.json())
app.use(morgan("dev"))


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    signale.success("Server online " + PORT)
})
import express from 'express'
import env from './config/config'

const app = express()

app.listen(env.port, () => {
  console.log(`Listening On Port: ${env.port}`)
})

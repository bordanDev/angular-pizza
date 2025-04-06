const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('HELLO WORLD!')
})

app.listen(port, () => {
  console.log(`Example app listeting on port ${port}`)
})

app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body)
  res.send('Got a POST request')
  console.log(req.body)
})

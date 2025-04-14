const express = require('express')
const app = express()
const port = 3000


app.get('/pizzas', (req, res) => {
  res.json({ hello: 'world'})
})

app.listen(port, () => console.log('API running'))







//
// app.listen(port, () => {
//   console.log(`Example app listeting on port ${port}`)
// })
//
// app.use(express.json())
//
// app.post('/', (req, res) => {
//   console.log(req.body)
//   res.send('Got a POST request')
//   console.log(req.body)
// })

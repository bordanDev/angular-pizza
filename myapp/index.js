const express = require('express')
const app = express()
const port = 3000

const pizzasMock = require('./mocks/pizzas-mock.json')
const filtrationMock = require('./mocks/ui/filtration-mock.json')


const cors = require('cors');
app.use(cors()); // Разрешает все запросы

app.get('/pizzas', (req, res) => {
  res.json(pizzasMock)
})

app.get('/ui/filtration', (req, res) => {
  res.json(filtrationMock)
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

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

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const pizzasMock = require("./mocks/pizzas-mock.json");
const userPizzaMock = require("./mocks/user-pizzas.json");
const filtrationMock = require("./mocks/ui/filtration-mock.json");
const pizzaPageIngredMock = require("./mocks/ui/pizza-page-ingred-mock.json");

const cors = require("cors");
app.use(cors()); // Разрешает все запросы

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/pizza-list", (req, res) => {
  const availablePizza = {
    id: req.body.id,
    type: req.body.type,
    title: req.body.title,
    ingredients: req.body.ingredients,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    tag: req.body.tag,
    thickness: req.body.thickness,
    size: req.body.size,
    weight: req.body.weight,
    additionalIngredients: req.body.additionalIngredients,
  };

  pizzasMock.push(availablePizza);
  res.json(pizzasMock);
});

app.delete("/delete-user-pizza/:id", (req, res) => {
  const userPizzaId = parseInt(req.params.id);
  const index = userPizzaMock.findIndex((pizza) => pizza.id === userPizzaId);

  // When your element is not found in the list
  if (index === -1) {
    return res.status(404).json({ message: "User pizza is not found" });
  }

  userPizzaMock.splice(index, 1);
  res.json(userPizzaMock);
});

app.post("/set-user-pizza", (req, res) => {
  const userSetPizza = {
    id: req.body.id,
    type: req.body.type,
    title: req.body.title,
    ingredients: req.body.ingredients,
    price: req.body.price,
    imgUrl: req.body.imgUrl,
    tag: req.body.tag,
    thickness: req.body.thickness,
    size: req.body.size,
    weight: req.body.weight,
    additionalIngredients: req.body.additionalIngredients,
  };

  userPizzaMock.push(userSetPizza);
  res.json(userPizzaMock);
});

app.get("/get-user-pizza", (req, res) => {
  res.json(userPizzaMock);
});

app.get("/pizzas", (req, res) => {
  res.json(pizzasMock);
});

app.get("/ui/filtration", (req, res) => {
  res.json(filtrationMock);
});

app.get("/ui/pizza-page-ingredients", (req, res) => {
  res.json(pizzaPageIngredMock);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

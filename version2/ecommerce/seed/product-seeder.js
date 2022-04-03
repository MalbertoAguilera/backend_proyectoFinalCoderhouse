const Product = require("../models/schema/product");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://matias:atlas1234@sessionatlas.jvq29.mongodb.net/backendProyectoFinal2?retryWrites=true&w=majority"
  )
  .then((db) => console.log("Database connected on seeder"));

const products = [
  new Product({
    imagePath: "https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_US/games/switch/d/devil-may-cry-3-special-edition-switch/hero",
    title: "gothic",
    description: "awesome!!",
    price: 10,
  }),
  new Product({
    imagePath: "https://assets.nintendo.com/image/upload/c_fill,f_auto,q_auto,w_1200/v1/ncom/en_US/games/switch/d/devil-may-cry-3-special-edition-switch/hero",
    title: "gothic 2",
    description: "awesome 2!!",
    price: 20,
  })
];

let done = 0;

for (let index = 0; index < products.length; index++) {
  products[index].save((err, result) => {
    done++;
    if (done === products.length) {
          exit();
    }
  });
}

const exit = () =>{
      mongoose.disconnect();
      console.log("database disconected");
}
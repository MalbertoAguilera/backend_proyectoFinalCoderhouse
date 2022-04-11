const Product = require("../models/schema/Product");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://matias:atlas1234@sessionatlas.jvq29.mongodb.net/backendProyectoFinal2?retryWrites=true&w=majority"
  )
  .then((db) => console.log("Database connected on seeder"));

const products = [
  new Product({
    imagePath:
      "https://static.wikia.nocookie.net/ssbb/images/8/8c/Caratula_de_Super_Smash_Bros._para_Wii_U.jpg/revision/latest/top-crop/width/360/height/450?cb=20160114210301&path-prefix=es",
    title: "Super Smash Bros. para Wii U",
    description:
      "Battle Royal",
    price: 8500,
  }),
  new Product({
    imagePath:
      "https://http2.mlstatic.com/D_NQ_NP_891322-MLA44525763697_012021-O.webp",
    title: "Pokemon Tournament DX",
    description: "Juego animacion",
    price: 9000,
  }),
  new Product({
    imagePath:'https://cdn-products.eneba.com/resized-products/28Yl7CvGFxxJHfQ9OaOTGrlo1Bve0ejKzx7ERswo_vY_350x200_1x-0.jpeg',
    title: "Fifa 22",
    description: "Juego de futbol",
    price: 6700,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/818iH3vp4YL._SX425_.jpg",
    title: "Marvel vs Capcom Infinite",
    description: "Juego de pelea",
    price: 15200,
  }),
  new Product({
    imagePath:
      "https://www.playlanmym.com/wp-content/uploads/2019/03/Devil-May-Cry-4-Special-Edition-PS4.png",
    title: "Devil May Cry Special Edition",
    description: "Juego de accion",
    price: 12100,
  }),
  new Product({
    imagePath:
      "https://cdn-products.eneba.com/resized-products/TIXMHwK17XWP2esMi9MOG9UmB_MAQ1xF4ynlDgTRhrk_350x200_1x-0.jpeg",
    title: "Mortal Kombat 11",
    description: "Juego de pelea",
    price: 13600,
  }),
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

const exit = () => {
  mongoose.disconnect();
  console.log("database disconected");
};

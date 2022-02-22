const express = require("express");
const { Router } = express;
const routerCart = new Router();
// const { cartsDao, productsDao } = require("../class/DAO/index");

routerCart.get("/", async (req, res) => {
//   res.json(await cartsDao.getAll());
});
//Crea un carrito y devuelve su id
routerCart.post("/", async (req, res) => {
//   res.json(await cartsDao.save());
});
//Vacía un carrito y lo elimina
routerCart.delete("/:id", async (req, res) => {
//   res.json(await cartsDao.deleteById(req.params.id));
});

//Me permite listar todos los productos guardados en el carrito
routerCart.get("/:id/productos", async (req, res) => {
//   const carrito = await cartsDao.getById(req.params.id);
//   res.json(carrito.products);
});

//Para incorporar productos al carrito por su id de producto
//recibe array de productos
routerCart.post("/:id/productos", async (req, res) => {
//   const carrito = await cartsDao.getById(req.params.id);
//   const producto = await productsDao.getById(req.body.id);
//   carrito.products.push(producto);
//   await cartsDao.update(carrito);
//   res.end();
});

//Eliminar un producto del carrito por su id de carrito y de producto
routerCart.delete("/:id/productos/:id_prod", async (req, res) => {
//   const carrito = await cartsDao.getById(req.params.id);
//   const index = carrito.products.findIndex((p) => p.id == req.params.id_prod);
//   if (index != -1) {
//     carrito.products.splice(index, 1);
//     await cartsDao.update(carrito);
//   }
//   res.end();
});

module.exports = routerCart;

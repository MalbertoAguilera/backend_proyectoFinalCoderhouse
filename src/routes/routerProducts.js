const express = require("express");
const { Router } = express;
const routerProducts = new Router();
// const { productsDao } = require("../class/DAO/index");


routerProducts.get("/", async (req, res) => {
      res.send("llegue logueado")
//   const products = await productsDao.getAll();
//   res.json(products);
});

routerProducts.get("/:id", async (req, res) => {
//   res.json(await productsDao.getById(req.params.id));
});

routerProducts.post("/", async (req, res) => {
//   if (req.query.admin === "false") {
//     res.status(404).json({
//       error: -1,
//       descripcion: `Ruta ${req.originalUrl}, metodo ${req.method} NO AUTORIZADO`,
//     });
//     return;
//   }

//   res.json(await productsDao.save(req.body));
});

routerProducts.put("/:id", async (req, res) => {
//   if (req.query.admin === "false") {
//     res.status(404).json({
//       error: -1,
//       descripcion: `Ruta ${req.originalUrl}, metodo ${req.method} NO AUTORIZADO`,
//     });
//     return;
//   }
//   res.json(await productsDao.update(req.body));
});

routerProducts.delete("/:id", async (req, res) => {
//   if (req.query.admin === "false") {
//     res.status(404).json({
//       error: -1,
//       descripcion: `Ruta ${req.originalUrl}, metodo ${req.method} NO AUTORIZADO`,
//     });
//     return;
//   }
//   res.json(await productsDao.deleteById(req.params.id));
});

module.exports = routerProducts;

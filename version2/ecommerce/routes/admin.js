var express = require("express");
var router = express.Router();

router.get('/listar-productos',(req,res,next) =>{
      console.log(req.user);
      res.json({msg:"SOY ADMIN", user:req.user})
})

module.exports = router;
const express = require("express")
const router = express.Router()
const auth = require("../middleware/authorization")
const {
  createProduct,
  readAll,
  readOne,
  updateProduct,
  deleteProduct
} = require("../controllers/productController")

router.post("/create", auth, createProduct)
router.get("/readall", readAll)
router.get("/readone/:id", readOne)
router.put("/update/:id", auth, updateProduct)
router.delete("/delete/:id", auth, deleteProduct)

module.exports = router

const express = require("express")
const router = express.Router()
const auth = require("../middleware/authorization")
const {
  register,
  login,
  verifyToken,
  updateUser
} = require("../controllers/userController")

router.post("/register", register)
router.post("/login", login)
router.get("/verifytoken", auth, verifyToken)
router.put("/update", auth, updateUser)

module.exports = router

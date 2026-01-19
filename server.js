const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

const { swaggerUi, swaggerSpec } = require("./swagger")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
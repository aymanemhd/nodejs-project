const express = require("express")
const app = express()

connect()
app.use(cors())
app.post(
  "/api/webhook",
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString()
    },
  })
)
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to chawkbazar" })
})

app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", paymentRoutes)
app.use("/api", orderRoutes)

const port = env.PORT || 5000

app.listen(port, () => {
  console.log(`Your server is running at port number: ${port}`)
})
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use("*", express.static(__dirname))
app.use(bodyParser.json())


app.post("/api/v1/auth/signup", (req, res) => {
    res.json({
      message: "Successfully adding data",
      email: req.body.email
    }) 
})

app.get("/redirect", (req, res) => {
  res.json({
    message: "After authentication"
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

const axios = require("axios")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use("*", express.static(__dirname))
app.use(bodyParser.json())


app.post("/api/v1/auth/signup", async(req, res) => {
  try {
    const register = await axios.post("http://localhost:8080/api/v1/auth/signup", {
      email: req.body.email,
      password: req.body.password
  })

  res.json({
      message: register.data.message,
      status: register.data.status
    })
 
  } catch(err) {
    console.log(err)
    res.json({
      message: register.data.message,
      status: register.data.status
    })
  }

 
    
})

app.get("/redirect", (req, res) => {
  res.json({
    message: "After authentication"
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

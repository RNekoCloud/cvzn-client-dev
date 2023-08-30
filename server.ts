const express = require("express")
const path = require("path")

const app = express()
const PORT: number = 5000

app.use("/", express.static(path.join(__dirname, "public")))

app.get("/api/v1/", (req: any, res: any) => {
    res.json({
        message: "Welcome to sample API",
        success: true,
    })
})

app.get("/*", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
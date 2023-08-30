import express, { Express, Request, Response } from "express"

const path = require("path")

const app: Express = express()
const PORT: number = 5000

app.use("/", express.static(path.join(__dirname, "public")))

app.get("/api/v1/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to sample API",
        success: true,
    })
})

app.get("/*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
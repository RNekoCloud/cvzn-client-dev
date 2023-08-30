import express, { Express, Request, Response } from "express"

const path = require("path")

const app: Express = express()

app.use("/", express.static(path.join(__dirname, "public")))

app.get("/api/v1/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to sample API",
        success: true,
    })
})
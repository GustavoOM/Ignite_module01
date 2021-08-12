const express = require("express")

const app = express()

app.use(express.json())

app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
})

app.listen(3333)
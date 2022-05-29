const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const routes = require('./api/routes'); routes(app)

app.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`))
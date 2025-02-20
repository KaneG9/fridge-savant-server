const express = require('express')
const corsMiddleware = require('./cors')
const app = express()
require('dotenv').config()



const bcrypt = require('bcryptjs')

const PORT = process.env.PORT || 5000

app.use(express.json({extended: false}))

app.use(corsMiddleware)

app.get("/", (req, res) => {

    res.send("Hello")
})
//Routes
app.use('/api/users', require('./routers/users'));
app.use('/api/bookmarks', require('./routers/bookmarks'))




app.listen(PORT, () => console.log(`server started at ${PORT}`))

module.exports = app;
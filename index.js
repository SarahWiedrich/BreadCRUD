require('dotenv').config()
const express = require('express')
const breadRoutes = require('./controllers/breads_controller')

const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadRoutes)

//home page//
app.get('/', (req,res) => {
    res.send('Welcome to BREAD')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
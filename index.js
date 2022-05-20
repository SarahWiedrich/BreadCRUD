require('dotenv').config()
const express = require('express')
const breadRoutes = require('./controllers/breads_controller')
const methodOverride = require('method-override')

const app = express()

//middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


//routes
app.use('/breads', breadRoutes)

//home page//
app.get('/', (req,res) => {
    res.send('Welcome to BREAD')
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
require('dotenv').config()
const express = require('express')
const breadRoutes = require('./controllers/breads_controller')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

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

//DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//Start server   
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
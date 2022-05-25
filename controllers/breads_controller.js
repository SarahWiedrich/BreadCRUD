const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const Bread = require('../models/bread')

//Get all breads
router.get('/', async (req, res) => {
    try {
        const bread = await Bread.find()
        res.render('index', {
        breads: bread,
        title: 'Bread'
        })
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})

router.get('/new', (req,res) => {
    res.render('new')
})

// get bread by index
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const bread = await Bread.findById(id)
        console.log(bread)
        res.render('show', {
            bread
        })
    } catch (error) {
        console.log(error)
        res.send("ERROR")
    }
})

//Create - post request
router.post('/', async (req, res) => {
    //make new bread and push into existing bread array
    try {
        if (!req.body.image){
            delete req.body['image']
        }
        if(req.body.hasGluten === 'on'){
            req.body.hasGluten = true
        }else {
            req.body.hasGluten = false
        }
        await Bread.create(req.body)
        res.redirect('/breads')

    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

//Delete
router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params
        await Bread.findByIdAndDelete(id)
        res.status(303).redirect('/breads')
    } catch (error) {
        console.log(error)
        res.send('ERROR')
    }
})

//show the view - GET edit page
router.get('/:id/edit', async (req,res) =>{
    const { id } = req.params
    const bread = await Bread.findById(id)
    res.render('edit', {
        bread
    })
})

//update Bread
router.put('/:id', async (req, res) => {
    const { id } = req.params
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    }
    else {
        req.body.hasGluten = false
    }
   await Bread.findByIdAndUpdate(id, req.body)
    res.redirect(`/breads/${ id }`)
})

module.exports = router
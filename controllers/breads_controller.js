const express = require('express')
const router = express.Router()
const Bread = require('../models/bread')

router.get('/', (req, res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
})

router.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    res.send(Bread[arrayIndex])
})

module.exports = router
const {Router} = require('express')
const { redirect } = require('express/lib/response')
const Course = require('../models/course')
const router = Router()


router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add course',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const course = new Course(req.body.title, req.body.price, req.body.img)

    await course.save()

    res.redirect('/courses')
})

module.exports = router
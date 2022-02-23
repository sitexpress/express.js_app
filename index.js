const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const coursesRoutes = require('./routes/courses')
const addRoutes = require('./routes/add')

const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) //регистрируем движок
app.set('view engine', 'hbs') // начинаем его использовать
app.set('views', 'views') // указываем папку в которой хранятся html

app.use(express.static('public'))

app.use(express.urlencoded({extended: true})) // для получения post запросов с формы

app.use('/', homeRoutes) // регестрируем роуты
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)


// Сервер ---------------------------------------------------------------------------
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})
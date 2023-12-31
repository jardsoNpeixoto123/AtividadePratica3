const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.render("userform")
})

app.post('/user/save', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const user = { name: name, age: age };
    res.render('viewuser', { user: user });
});

app.get('/', (req, res) => {
    res.render("home")
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
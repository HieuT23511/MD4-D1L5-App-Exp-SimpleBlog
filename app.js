const express = require('express');
const ejs = require('ejs');
const app = express();
const multer = require('multer');
const upload = multer();
const PORT = 5555;
//cau hinh views:
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('blog');
})
let arrayBlog = [];
app.get('/views',(req, res) => {
    res.render('views',{blogs:arrayBlog})
})
app.post('/views', upload.none(),(req, res) => {
    // console.log(req.body)
    if (req.body.title && req.body.content) {
        const blog = {
            title: req.body.title,
            content: req.body.content
        };
        arrayBlog.push(blog);
        res.redirect('views')
    } else {
        res.render('error')
    }
})

app.listen(PORT, "localhost", () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
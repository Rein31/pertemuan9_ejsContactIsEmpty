
const express = require("express");

const app = express();

const port = 3000;

// information using ejs
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
//   res.send("Hello World!");
cont = [
    // {
    //     nama: 'rei',
    //     email: 'r@gmail.com',
    // },
    // {
    //     nama: 'reeee',
    //     email: 'ree@gmail.com',
    // },
    // {
    //     nama: 'ruu',
    //     email: 'ruu@gmail.com',
    // }
]
    res.render('index', {
        nama: "Reinaldi",
        title : "WEB server EJS", 
        cont,
    });
});

app.get("/about", (req, res) => {
//   res.send("This is page about!");
    res.sendFile('./about.html', {root: __dirname});
});

app.get("/contact", (req, res) => {
    // res.send("This is contact about!");
    res.sendFile('./contact.html', {root: __dirname})
});

app.get('/product/:id', (req, res) => {
    // res.send('product id : ' + req.params.id + '<br><br>'
    // + 'category id : ' + req.params.idCat)
    res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
})

app.use('/', (req,res) => {
    res.status(404)
    res.send("404 Page Not Found!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
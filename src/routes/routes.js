const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {tittle: 'Mr Fabri'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {tittle: 'Contact | Mr Fabri'});
});

router.get('/about', (req, res) => {
    res.render('about', {tittle: 'About | Mr Fabri'});
});

router.post('/contact', (req, res)=> {
    console.log(req.body);
});

router.get('/lol', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});


module.exports = router;
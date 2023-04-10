const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('index',{
        'page' : 'data-buku',
        'title' : 'Data Buku',
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{
        'page' : 'bukti-setoran',
        'title' : 'Bukti Setoran'
    });
});

module.exports = router
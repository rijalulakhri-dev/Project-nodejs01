const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{
        'page' : 'upd-laporan',
        'title' : 'Upload Laporan'
    });
});

module.exports = router
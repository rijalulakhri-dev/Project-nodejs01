const express = require('express');
const router = express.Router();
const Transaksi = require('../models/transaksi')
const { body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    try {
      const transaksi = await Transaksi.find();
      res.render('index', {
        'page': 'transaksi',
        'title': 'Transaksi',
        'transaksi': transaksi
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

router.post('/', [
    body('namaAnggota').notEmpty(),
    body('nomorAnggota').notEmpty(),
    body('judulBuku').notEmpty(),
    body('kodeBuku').notEmpty(),
    body('tanggalPinjam').notEmpty(),
    body('tanggalKembali').notEmpty()
  ], async (req, res) => {
    // Memvalidasi input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    // Membuat objek baru dari model Transaksi
    const transaksi = new Transaksi(req.body);
  
    try {
      // Menyimpan data ke MongoDB
      await transaksi.save();
      res.status(201).json(transaksi);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router

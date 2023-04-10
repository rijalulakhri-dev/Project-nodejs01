const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  namaAnggota: {
    type: String,
    required: true,
    trim: true
  },
  nomorAnggota: {
    type: String,
    required: true
  },
  judulBuku: {
    type: String,
    required: true,
    trim: true
  },
  kodeBuku: {
    type: String,
    required: true
  },
  tanggalPinjam: {
    type: Date,
    required: true
  },
  tanggalKembali: {
    type: Date,
    required: true
  }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);

module.exports = Transaksi;

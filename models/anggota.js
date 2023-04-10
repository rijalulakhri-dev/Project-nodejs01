const mongoose = require('mongoose');

const anggotaSchema = new mongoose.Schema({
  namaAnggota: {
    type: String,
    required: true,
    trim: true
  },
  jenisKelamin: {
    type: String,
    enum: ['Laki-laki', 'Perempuan'],
    required: true
  },
  statusAnggota: {
    type: String,
    enum: ['Aktif', 'Tidak aktif'],
    default: 'Aktif'
  },
  nomorAnggota: {
    type: String,
    required: true,
    unique: true
  }
});

const Anggota = mongoose.model('Anggota', anggotaSchema);

module.exports = Anggota;

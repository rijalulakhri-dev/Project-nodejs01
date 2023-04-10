const mongoose = require('mongoose');

const bukuSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true
  },
  pengarang: {
    type: String,
    required: true
  },
  penerbit: {
    type: String,
    required: true
  },
  halaman: {
    type: Number,
    required: true
  },
  tahunTerbit: {
    type: Number,
    required: true
  },
  tersedia: {
    type: Boolean,
    required: true,
    default: true
  }
});

const Buku = mongoose.model('Buku', bukuSchema);

async function getAllBuku() {
  const buku = await Buku.find().select('judul');
  return buku;
}

module.exports = { Buku, getAllBuku };

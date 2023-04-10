const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./utils/db')

const homeRouter = require('./routes/pages')
const anggotaRouter = require('./routes/anggota')
const bukuRouter = require('./routes/buku')
const laporanRouter = require('./routes/laporan')
const transaksiRouter = require('./routes/transaksi')
const updLaporanRouter = require('./routes/upd-laporan')
const buktiSetRouter = require('./routes/bukti-setoran')

app.use('/', homeRouter);
app.use('/data-anggota', anggotaRouter);
app.use('/data-buku', bukuRouter);
app.use('/laporan', laporanRouter);
app.use('/transaksi', transaksiRouter);
app.use('/upd-laporan', updLaporanRouter);
app.use('/bukti-setoran', buktiSetRouter);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
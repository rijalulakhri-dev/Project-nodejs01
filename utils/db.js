const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/perpustakaan';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to database');
}).catch((err) => {
  console.log('Failed to connect to database', err);
});

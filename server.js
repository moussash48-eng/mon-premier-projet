const express = require('express');
const cors = require('cors');
const products = require('./products');

const app = express();

app.use(cors());
app.use(express.json());

// مسار تجريبي باش نعرفو السيرفر خدام
app.get('/', (req, res) => {
  res.send('🚀 سيرفر DigiSou9 النسخة 2.0 خدام ناضي!');
});

// المسار اللي غيعطينا اللائحة ديال المنتجات
app.get('/api/products', (req, res) => {
  res.json(products);
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

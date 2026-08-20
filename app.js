const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// السماح بقراءة البيانات المتبادلة (CORS) إن احتجت لها
const cors = require('cors');
app.use(cors());

// هاد السيرفر كيقول ليه: قرأ الملفات الثابتة (HTML, CSS, JS) من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// قاعدة بيانات مؤقتة للمنتجات (API)
const products = [
    { id: 1, name: "Canva Pro", description: "اشتراك رسمي تفعيل فوري.", price: "49 درهم" },
    { id: 2, name: "Duolingo Premium", description: "تعلم اللغات بدون إعلانات.", price: "99 درهم" },
    { id: 3, name: "Filmora HD", description: "تفعيل رسمي للمونتاج.", price: "99 درهم" }
];

// الـ Route ديال المنتجات
app.get('/api/products', (req, res) => {
    res.json(products);
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

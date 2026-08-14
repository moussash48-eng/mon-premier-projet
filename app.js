const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// قائمة المنتجات الرقمية
const products = [
    { id: 1, title: 'حزمة أدوات التصميم والتكاوين', description: 'ملفات جاهزة وقوالب تصاميم احترافية لعملك.', price: 49 },
    { id: 2, title: 'حساب تعليمي مميز (Duolingo)', description: 'اشتراك تعلم اللغات مع كامل المميزات المدفوعة.', price: 49 },
    { id: 3, title: 'حزمة البرامج والتطبيقات', description: 'تطبيقات مونتاج وتعديل صور مثل Filmora HD وغيرها.', price: 49 }
];

// رابط الـ API للجلب
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log("Serveur lancé sur http://localhost:" + PORT);
});

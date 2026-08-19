const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// هاد السطر كيخدم الملفات اللي فـ public
app.use(express.static(path.join(__dirname, 'public')));

// هاد السطر كيضمن بلي أي واحد دخل للسيت، السيرفر يلوح ليه index.html اللي فـ public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// قائمة المنتجات الرقمية
const products = [
    { id: 1, title: 'حزمة أدوات التصميم والتكاوين', description: 'ملفات جاهزة وقوالب تصاميم احترافية لعملك.', price: 49 },
    { id: 2, title: 'حساب تعليمي مميز (Duolingo)', description: 'اشتراك تعلم اللغات مع كامل المميزات المدفوعة.', price: 49 },
    { id: 3, title: 'حزمة البرامج والتطبيقات', description: 'تطبيقات مونتاج وتعديل صور مثل Filmora HD وغيرها.', price: 49 }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log("Serveur lancé sur port " + PORT);
});

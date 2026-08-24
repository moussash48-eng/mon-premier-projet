const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد مجلد الملفات الثابتة (CSS, JS)
app.use(express.static(path.join(__dirname, 'static')));

// المسار الرئيسي لعرض الصفحة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// تشغيل السيرفر على البور 3000
app.listen(PORT, () => {
    console.log(`DigiSou9 server is running successfully on http://localhost:${PORT} 🚀`);
});

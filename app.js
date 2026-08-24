const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// إعداد مجلد الملفات الثابتة (هنا غنردو السمية public حيت تما فين حاط ملفاتك)
app.use(express.static(path.join(__dirname, 'public')));

// المسار الرئيسي لعرض الصفحة
app.get('/', (req, res) => {
    // حتى هنا غنقولو ليه يقلب على index.html وسط public
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل السيرفر على البور 3000
app.listen(PORT, () => {
    console.log(`DigiSou9 server is running successfully on http://localhost:${PORT} 🚀`);
});

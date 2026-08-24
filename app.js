const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// تحديد مجلد الملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// API لجلب المنتجات (قاعدة بيانات مصغرة)
app.get('/api/products', (req, res) => {
    const products = [
        { 
            id: 1, 
            title: "Canva Pro", 
            tag: "اشتراك رسمي", 
            desc: "اشتراك مدى الحياة أو سنوي لتصميمات احترافية بلا حدود.", 
            price: "49 درهم" 
        },
        { 
            id: 2, 
            title: "Duolingo Super", 
            tag: "تفعيل فوري", 
            desc: "تعلم اللغات بدون إعلانات وبقلوب غير محدودة.", 
            price: "39 درهم" 
        },
        { 
            id: 3, 
            title: "Filmora HD", 
            tag: "مونتاج وإخراج", 
            desc: "برنامج المونتاج القوي لإنشاء فيديوهات احترافية.", 
            price: "59 درهم" 
        }
    ];
    res.json(products);
});

// المسار الرئيسي لعرض الصفحة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`DigiSou9 server is running successfully on port ${PORT} 🚀`);
});

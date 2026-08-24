// جلب كاع الأزرار ديال الشراء من الصفحة
const buyButtons = document.querySelectorAll('.btn-buy');

// إضافة حدث النقر لكل بوطونة
buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // جبدنا سمية المنتج اللي كاين في نفس الكارت
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // رسالة تأكيد للمستخدم (يمكننا نربطوها مع WhatsApp مستقبلاً)
        alert(`مرحباً! لقد اخترت: "${productName}" بثمن ${productPrice}.\nسيتم توجيهك لإتمام الطلب عبر واتساب.`);
        
        // هنا نقدروا نزيدو اللوجيك ديال إضافة المنتج للـ LocalStorage أو إرساله لـ Node.js
    });
});

// رسالة ترحيبية في الكونسول للتأكد من اشتغال الملف
console.log("DigiSou9 JavaScript is loaded successfully! 🚀");

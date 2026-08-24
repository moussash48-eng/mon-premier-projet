// تحديد جميع أزرار الشراء في الصفحة
const buyButtons = document.querySelectorAll('.btn-buy');

// حط هنا رقم الواتساب ديال البيزنيس ديالك (بدا بـ 212 بلا علامة زائد)
// مثال: "212612345678"
const whatsappNumber = "212718049282"; 

// إضافة تفاعل لكل بوطونة
buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // جلب معلومات المنتج من الكارت اللي تكليكا
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // تجهيز الرسالة اللي غتمشي فواتساب
        const message = `السلام عليكم، بغيت نشري من عندكم اشتراك: ${productName} اللي داير ${productPrice}. واش متوفر؟`;
        
        // تحويل الرسالة لصيغة يقبلها الرابط 
        const encodedMessage = encodeURIComponent(message);

        // إنشاء رابط واتساب
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // توجيه الكليان نيشان للواتساب في نافذة جديدة
        window.open(whatsappUrl, '_blank');
    });
});

console.log("DigiSou9 JavaScript is loaded and WhatsApp integration is ready! 🚀");

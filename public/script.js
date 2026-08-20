// مصفوفة المنتجات الرقمية الخاصة بـ DigiSou9
const products = [
    {
        id: 1,
        name: "Canva Pro",
        description: "اشتراك رسمي تفعيل فوري على حسابك الشخصي.",
        price: "49 درهم"
    },
    {
        id: 2,
        name: "Duolingo Premium",
        description: "تعلم اللغات بدون إعلانات وبمميزات كاملة.",
        price: "99 درهم"
    },
    {
        id: 3,
        name: "Filmora HD",
        description: "تفعيل رسمي لبرنامج المونتاج الشهير.",
        price: "99 درهم"
    }
];

// دالة عرض المنتجات في الصفحة
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return; // تأكد أن العنصر موجود
    
    grid.innerHTML = ""; // تفريغ الشبكة أولاً

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
            </div>
            <div class="product-footer">
                <span class="product-price">${product.price}</span>
                <button class="buy-btn" onclick="buyProduct('${product.name}')">اطلب الان</button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// دالة تحويل الزبون إلى الواتساب مباشرة
function buyProduct(productName) {
    const phone = "212600000000"; // استبدل برقم هاتفك الخاص بـ WhatsApp Business
    const message = `سلام، بغيت نشري منتج: ${productName} من متجر DigiSou9`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderProducts);

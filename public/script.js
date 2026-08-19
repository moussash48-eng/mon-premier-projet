// ==========================================
// 1. نظام تصفية المنتجات (Categories Filter)
// ==========================================

// كنجيبو ڭاع الأزرار ديال الفلتر والبطاقات ديال المنتجات
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

// كنديرو حلقة (loop) على كل زر باش نتصنتو للضغطة عليه
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // نحيدو الكلاس 'active' من ڭاع الأزرار
        filterBtns.forEach(b => b.classList.remove('active'));
        // ونزيدوه غير للزر اللي كليكينا عليه باش يبان مضوي
        btn.classList.add('active');

        // كنجيبو السمية ديال الكاتيغوري من الزر اللي تبرك عليه
        const category = btn.getAttribute('data-category');

        // كندورو على البطاقات كاملين
        cards.forEach(card => {
            // إلا كانت الكاتيغوري هي 'all' أو كطابق الكاتيغوري ديال البطاقة، كنبينوها
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                // وإلا، كنخفيوها
                card.style.display = 'none';
            }
        });
    });
});

// ==========================================
// 2. نظام نسخ رقم الحساب البنكي (Copy RIB)
// ==========================================

function copyRib() {
    // كنجيبو النص اللي فيه رقم الحساب (تأكد أن الـ ID ديالو فالـ HTML هو cih-number)
    let ribText = document.getElementById("cih-number").innerText;
    
    // كنسخوه للحافظة (Clipboard)
    navigator.clipboard.writeText(ribText).then(() => {
        
        // كنجيبو الإشعار (Toast) ونزيدو ليه كلاس 'show' باش يبان
        let toast = document.getElementById("toast");
        toast.classList.add("show");
        
        // كنحيدو كلاس 'show' من بعد 3 ثواني باش يتخبع بوحدو
        setTimeout(function() {
            toast.classList.remove("show");
        }, 3000);
    }).catch(err => {
        console.error("فشل نسخ النص: ", err);
        alert("وقع مشكل فالنسخ، عافاك كوبيه يدويا.");
    });
}

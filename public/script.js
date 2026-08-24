const whatsappNumber = "212718049282"; 
const myRIB = "230 570 7056322211016100 01"; 
const bankName = "CIH Bank"; 
const accountName = "DigiSou9"; 

fetch('/api/products')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('products-container');
        products.forEach(product => {
            const card = `
                <div class="product-card">
                    <div>
                        <span class="product-tag">${product.tag}</span>
                        <h3>${product.title}</h3>
                        <p>${product.desc}</p>
                    </div>
                    <div class="product-footer">
                        <span class="price">${product.price}</span>
                        <button class="btn-buy">شراء الان</button>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    })
    .catch(error => console.error('Error fetching products:', error));

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-buy')) {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        alert(`لإتمام شراء ${productName}، المرجو تحويل مبلغ ${productPrice} إلى الحساب التالي:\n\nالبنك: ${bankName}\nالاسم: ${accountName}\nRIB: ${myRIB}\n\nبعد الضغط على OK سيتم توجيهك للواتساب لإرسال التوصيل.`);

        const message = `السلام عليكم، بغيت نشري من عندكم ${productName} اللي داير ${productPrice}.\nهاهو التوصيل ديال الدفع (Reçu):`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
});

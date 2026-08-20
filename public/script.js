async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("خطأ في جلب المنتجات:", error);
    }
}

function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = ""; 

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

function buyProduct(productName) {
    const phone = "212600000000"; // استبدل برقم الواتساب الخاص بك
    const message = `سلام، بغيت نشري منتج: ${productName} من متجر DigiSou9`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', fetchProducts);

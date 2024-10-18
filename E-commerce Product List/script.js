const products = [
    {
        title: "Product 1",
        price: 29.99
    },
    {
        title: "Product 2",
        price: 19.99
    },
    {
        title: "Product 3",
        price: 49.99
    }
];

const productsDiv = document.getElementById('products');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `<h3>${product.title}</h3><p>Price: $${product.price}</p>`;
    productsDiv.appendChild(productDiv);
});

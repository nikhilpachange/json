const products = [
    { title: "Product 1", price: 29.99 },
    { title: "Product 2", price: 19.99 },
    { title: "Product 3", price: 49.99 }
];

let cart = [];

const productsDiv = document.getElementById('products');
products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `<h3>${product.title}</h3><p>Price: $${product.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>`;
    productsDiv.appendChild(productDiv);
});

function addToCart(index) {
    cart.push(products[index]);
    displayCart();
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `<h4>${item.title}</h4><p>Price: $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartDiv.appendChild(cartItemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

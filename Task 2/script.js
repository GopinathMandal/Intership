// Shopping Cart Data
let cart = [];

// Select Cart Elements
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

// Function to Add Product to Cart
function addToCart(productName, price) {
    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

// Function to Update Cart UI
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        let listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
            <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    cartCount.innerText = `(${itemCount})`;
    cartTotal.innerText = total.toFixed(2); // Fixed total price update
}

// Function to Remove Product from Cart
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

// Function to Clear Cart
clearCartBtn.addEventListener("click", function () {
    cart = [];
    updateCart();
});

// Add Event Listeners to Product Buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cart-btn").forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.getAttribute("data-name");
            let productPrice = parseFloat(this.getAttribute("data-price"));
            addToCart(productName, productPrice);
        });
    });
});

const advertisementGallery = document.querySelector('.advertisement-gallery');
const advertisementImages = advertisementGallery.querySelectorAll('img');
let currentAdIndex = 0;

function changeAdvertisement() {
  advertisementImages[currentAdIndex].style.display = 'none';
  currentAdIndex = (currentAdIndex + 1) % advertisementImages.length;
  advertisementImages[currentAdIndex].style.display = 'block';
}

setInterval(changeAdvertisement, 3000); // Change advertisement every 10 seconds


// Sample product data (replace with your actual product data)
const products = [
  { id: 1, name: 'Nokia c32', category: 'smartphone', image: 'pic/Nokia-C32.jpg', price: 22000 },
  { id: 2, name: 'Sumsung A14', category: 'smartphone', image: 'pic/Picsart_23-11-30_22-03-46-982.jpg', price: 34000 },
  { id: 5, name: 'Infinix Zero 30', category: 'smartphone', image: 'pic/1.jpg', price: 25000 },
  { id: 6, name: 'New Laptop HP ProBook 450 G2 8GB', category:'Laptop', image: 'Picsart_23-12-04_11-46-27-318.jpg', price: 25000 },
  { id: 3, name: 'nokia c22', category: 'smartphone', image: 'pic/nokia-C22-charcoal-front_back-int (1).png', price: 19500 },
  { id: 4, name: 'Apple iphone XS', category: 'smartphone', image: 'pic/c24a82ea9aea6ac03e2d6336577bece8.jpg', price: 45000 },
  { id: 7, name: 'Laptop HP ProBook 1TB 8GB', category:'Laptop', image: 'pic/4.jpg', price: 23000 },
    { id: 8, name: 'Tecno Camon 20 pro', category:'smartphone', image: 'pic/aca9605919a8cb5da8d238183038ae4a.jpg', price: 31500 },
  { id: 9, name: 'oppo A31 128GB + 8GB', category:'smartphone', image: 'pic/4df3dba64e2b9e2eea3123f604ac9b2e.jpg', price: 19000 },
  { id: 10, name: 'oppo A37 16GB + 2GB', category:'smartphone', image: 'pic/57c2f085e1a109e020fb7338152d45fb.jpg', price: 8500 },
  { id: 11, name: 'New realme c55 256GB + 8GB', category:'smartphone', image: 'pic/07030dca0266791e7607ee820c5b6403.jpg', price: 28000 },
  { id: 12, name: ' 43″ P635 4K HDR Google smart Frameless TV 43P635', category:'TV', image: 'pic/150437.webp', price: 34500},
  { id: 13, name: 'iPhone 15 Pro Max', category:'smartphone', image: 'pic/5190021b351f757ca2a6b5d7aaa399ed.jpg', price: 255000 },
  { id: 14, name: 'New Samsung Galaxy A23 128 GB ', category:'smartphone', image: 'pic/2da8c59d8e26548079a67769fab11a56.jpg', price: 33000 },
  { id: 15, name: 'Toyota Nissan', category:'vehicle', image: 'pic/IMG-20231215-WA0003.jpg', price: 550000 },
  { id: 16, name: 'Samsung Galaxy A03 Core', category:'smartphone', image: 'pic/download (1).png', price: 13000 },
  
  { id: 17, name: 'Nike Air', category:'shoes', image: 'pic/sneakers/IMG_20231027_125433.jpg', price: 3000 },
  { id: 18, name: 'Rubber Sneakers', category:'shoes', image: 'pic/sneakers/IMG_20231027_125706.jpg', price: 1200 },
  { id: 19, name: 'Original Air Max Nike ', category:'shoes', image: 'pic/sneakers/IMG_20231027_124831_HDR.jpg', price: 2800 },
  { id: 20, name: 'Air JM', category:'shoes', image: 'pic/sneakers/IMG_20231027_125518_HDR.jpg', price: 2500 },
  { id: 15, name: 'Toyota Nissan', category:'vehicle', image: 'pic/IMG-20231215-WA0011.jpg', price: 380000 },
  { id: 16, name:'3 seater sofa', category:'furniture', image: 'pic/13121243_img-20200816-wa0012_300x225.webp', price: 15000 },
  { id: 17, name:'L shaped sofa', category:'furniture', image: 'pic/45090757_MzAwLTIyNS1hZmZkNTQwYzM0LTE.webp', price: 42000 },
  { id: 18, name:'Study table of pallets', category:'furniture', image: 'pic/44888473_MzAwLTQ0OS02OTg2MDVhN2VjLTI.webp', price: 7000 },
  
    { id: 19, name:'Smokers Teeth Whitening', category:'Health', image: 'pic/download (3).webp', price: 1500 },
      { id: 20, name:'Adjustable Laptop Stand', category:'furniture', image: 'pic/52015312_MzAwLTE4NS1jM2E0YzlkYjJj.webp', price: 7000 },
  { id: 21, name:'Office Chair', category:'furniture', image: 'pic/49695428_MzAwLTM5OS0xNTYzOTU.jpg', price: 13500 },
  { id: 22, name:'Cartoon themed portable laptop stand', category:'furniture', image: 'pics/Hdcd21f4f67d7424ba.jpg', price: 2500 },
  { id: 23, name:'Triple Plastic Wardrobes', category:'Home Decor', image: 'pics/Triple-Plastic-Wardrobes.jpg', price: 4500},
  { id: 24, name:'New Balloon Mobile Phone Crossbody Bag', category:'bags', image: 'p/17029628123200d03e3c55e664eabada8d2c120865fc5_360.jpg', price: 6500 },
  
  { id: 25, name:'Amazfit Gts 2 Mini Fitness Smart Watch Alexa Built-In', category:'Watches', image: 'p/166856313700288246c1a47b4474992c21f9291acf599_360.jpg', price: 14599 },
  { id: 26, name:'Maybelline New York Lasting Fix', category:'health', image: 'p/1634871814112c8ef204359364e2a98417e38e57b180d_360.jpg', price: 1900 },
  { id: 27, name:'SKMEI 1260 Men Stainless Steel Strap Original', category:'furniture', image: 'p/1701625543495cc666392564e486297f06543818c1d9f_360.jpg', price: 3500 },
  { id: 28, name:'Leather Official Shoes', category:'shoes', image: 'p/7089_06784099643989426_360.jpg', price: 3800 },
  { id: 29, name:'Bedside Table', category:'furniture', image: 'pics/2fcf7d9c376c410edb7129e6a4c63bd9.jpeg', price: 2500 },
  { id: 30, name:'Bluetooth Wireless Headphones', category:'furniture', image: 'p/16881255585741220434128674853847b628783e1aa37_360.jpg', price: 3000 },

  // Add more products...
];

// Display products
const productsContainer = document.getElementById('products');

function displayProducts(productsToShow) {
  productsContainer.innerHTML = '';
  productsToShow.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <div class='box'>
       <div class='img-box' onclick="displayProductDetails(${product.id})">
        <img src="${product.image}" alt="${product.name}"></div>
       <div class="bottom">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: Kes.${product.price}</p>
      <button onclick="orderViaWhatsApp(${product.id})">Order via WhatsApp</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>

       </div>
      </div>
    `;
    productsContainer.appendChild(productElement);
  });
}

// Initial display of all products
displayProducts(products);

// Filter products based on search input
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText) || product.category.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
});

// ... previous code ...

// Function to create a WhatsApp message with product details
function orderViaWhatsApp(productId) {
  const productToOrder = products.find(product => product.id === productId);

  // Replace 'XXXXXXXXXXXX' with your actual WhatsApp number
  const whatsappNumber = '+254741766185';
  const message = `Hi, I'd like to order ${productToOrder.name} (ID: ${productToOrder.id}).`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappLink);
}

// Function to add products to cart
// ... previous code ...

const cartItemsList = document.getElementById('cartItems');
let cart = [];

function addToCart(productId) {
  const productToAdd = products.find(product => product.id === productId);
  cart.push(productToAdd);
  displayCart();
  calculateTotalPrice();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
  calculateTotalPrice();
}

function displayCart() {
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('li');
    const removeButton = document.createElement('button');

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="50">
      <span>${item.name} - $${item.price}</span>
    `;

    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
      removeFromCart(item.id);
    };

    cartItem.appendChild(removeButton);
    cartItemsList.appendChild(cartItem);
  });
}

function calculateTotalPrice() {
  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  totalPriceElement.textContent = totalPrice;
}

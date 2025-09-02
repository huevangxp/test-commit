// Fetch product data from the server
let products = [];

function getProducts() {
    fetch('https://dogapi.dog/api/v2/breeds', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        products = data.data;
        console.log(products);
        
        const productClass = document.querySelector('.products');
        productClass.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            // Ensure the product object has necessary fields
            const imageUrl = product.image || 'path/to/default-image.jpg'; // Default image if none provided
            const productName = product.name || 'Unnamed Product';
            const productDescription = product.description || 'No description available.';
            const productPrice = product.price || 'N/A';

            productElement.innerHTML = `
                <img src="${imageUrl}" alt="Product Image">
                <h3 class="product-name">${productName}</h3>
                <p class="product-description">${productDescription}</p>
                <p class="product-price">Price: $${productPrice}</p>
            `;
            productClass.appendChild(productElement);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
        alert('Failed to load products. Please try again later.');
    });
}

getProducts();
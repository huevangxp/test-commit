// get product data from the server
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
            console.log(products)
            // const products = data;
            // get product class to map products
            const productClass = document.querySelector('.products');
            productClass.innerHTML = '';
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="Product Image">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                `;
                productClass.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

getProducts();

 
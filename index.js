// get product data from the server
function getProducts() {
    fetch('https://dogapi.dog/api/v2/breeds', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            // const products = data;
            // displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
}

getProducts();
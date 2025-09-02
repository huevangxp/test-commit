// A small script to demonstrate how you could handle a form submission.
// This example prevents the default form submission and logs a message.

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

    // Add your own login logic here, e.g., an AJAX request to a server
    alert('Form submitted! (Check the console for values)');
});

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
            const products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
}

getProducts();

// Function to load and insert HTML components
function loadComponent(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.querySelector(selector).innerHTML = html;
        })
        .catch(error => {
            console.error(`Could not load component from ${filePath}:`, error);
        });
}

// Load the Navbar into the element with ID 'navbar-placeholder'
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#navbar-placeholder', 'navbar.html');
    // You could do the same for a footer:
    // loadComponent('#footer-placeholder', 'footer.html');
});

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#footer-placeholder', 'footer.html');
    // You could do the same for a footer:
    // loadComponent('#footer-placeholder', 'footer.html');
});
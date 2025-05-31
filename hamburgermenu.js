document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements by their IDs
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const closeIcon = document.getElementById('closeIcon');
    const mainNavbar = document.querySelector('.navbar'); // The <nav class="navbar" id="mainNavbar"> element
    const mobileMenu = document.getElementById('mobileMenu'); // The <div class="nav-links" id="mobileMenu"> containing the menu items
    
    // Get all individual navigation links inside the mobile menu
    const navLinks = mobileMenu.querySelectorAll('ul li a');

    // Function to open the mobile menu
    function openMenu() {
        mainNavbar.classList.add('menu-open'); // Add the 'menu-open' class to the navbar
        // Optional: Prevent scrolling on the body when the menu is open
        document.body.classList.add('no-scroll'); 
    }

    // Function to close the mobile menu
    function closeMenu() {
        mainNavbar.classList.remove('menu-open'); // Remove the 'menu-open' class from the navbar
        // Optional: Re-enable scrolling on the body when the menu is closed
        document.body.classList.remove('no-scroll');
        
        // Optional: Hide any open dropdowns if they were opened in mobile view
        const openDropdowns = mobileMenu.querySelectorAll('.dropdown-content');
        openDropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

    // Event listener for clicking the hamburger icon to open the menu
    if (hamburgerIcon) { // Check if the element exists before adding listener
        hamburgerIcon.addEventListener('click', openMenu);
    }

    // Event listener for clicking the close (X) icon to close the menu
    if (closeIcon) { // Check if the element exists before adding listener
        closeIcon.addEventListener('click', closeMenu);
    }

    // Optional: Close the mobile menu when a navigation link is clicked
    // This is good for UX, especially on single-page sites or after navigating
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Check if the clicked link is NOT directly a dropdown toggle (like "BLOGS")
            // and if its href is not just '#' (which would typically be a toggle)
            if (!link.parentElement.classList.contains('dropdown') || 
                link.getAttribute('href') !== '#') { 
                closeMenu();
            }
        });
    });

    // Handle dropdown behavior specifically for the mobile menu
    // When "BLOGS" (or any dropdown parent) is clicked, toggle its dropdown content
    const dropdownToggles = mobileMenu.querySelectorAll('.dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            // Only apply this logic on mobile (when the main menu is active or narrow screen)
            // Uses window.innerWidth to determine if it's likely a mobile view
            if (window.innerWidth < 768) { // Matches your CSS media query breakpoint
                event.preventDefault(); // Prevent default link behavior if it's just a toggle
                const dropdownContent = toggle.nextElementSibling;
                if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
                    // Toggle the display of the dropdown content
                    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });

    // Optional: Close the mobile menu automatically if the screen is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // Matches your CSS media query breakpoint
            closeMenu(); // Close the mobile menu
            // Also ensure any open dropdowns within the menu are reset
            document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = '');
        }
    });
});
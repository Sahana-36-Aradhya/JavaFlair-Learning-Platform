// Function to toggle the visibility of the mobile sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("mobile-sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

// Dynamically load the mobile menu only on smaller screens
if (window.innerWidth < 768) {
    // Fetch the phone-menu.html content and inject it into the page
    fetch('phone-menu.html')
        .then(response => response.text())
        .then(data => {
            const mobileMenuPlaceholder = document.createElement('div');
            mobileMenuPlaceholder.id = 'mobile-menu-placeholder';
            mobileMenuPlaceholder.innerHTML = data;
            document.body.prepend(mobileMenuPlaceholder); // Add to the beginning of the body
        })
        .catch(error => console.error('Error loading mobile menu:', error));
}

// Function to toggle the visibility of the mobile sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('mobile-sidebar');

    // Check if the sidebar is using inline style for display
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";  // Hide it
    } else {
        sidebar.style.display = "block"; // Show it
    }

    // Also toggle the 'active' class on the sidebar
    sidebar.classList.toggle('active');
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

/* Initially hide the mobile menu */
#phone-menu {
  visibility: hidden; /* Hide the menu without taking space */
  position: absolute; /* Remove it from the document flow */
  top: 0; /* Adjust position if necessary */
  left: 0; /* Adjust position if necessary */
  width: 100%; /* Make the mobile menu full width */
  background-color: #333; /* Style the mobile menu background */
  z-index: 1000; /* Make sure it appears above other content */
}

/* When the menu is visible */
#phone-menu.visible {
  visibility: visible; /* Make the menu visible */
  position: relative; /* Place it in the document flow */
}

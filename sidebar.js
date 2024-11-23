document.addEventListener('DOMContentLoaded', function() {
  // Check screen width and load sidebar only for larger screens (desktop/tablet)
  if (window.innerWidth > 768) {  // Desktop/tablet (screen width > 768px)
    // Load the sidebar content for desktop/tablet
    fetch('HTML/sidebar.html') // Adjust the path if necessary
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('sidebar-nav').innerHTML = data;

        // Set the active class for the current page
        const currentLocation = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('#sidebar-nav ul li a');

        navLinks.forEach(link => {
          if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
          }
        });

        // Scroll to the top of the page after loading the sidebar
        window.scrollTo(0, 0);
      })
      .catch(error => console.error('Error loading sidebar:', error));
  } else {  // Mobile view (screen width <= 768px)
    // Hide the desktop sidebar
    document.getElementById('sidebar-nav').style.display = 'none';
    
    // Mobile menu toggle functionality
    const menuButton = document.getElementById('menu-button'); // Your mobile menu button
    const mobileMenu = document.getElementById('phone-menu'); // Your mobile menu
    
    // Initially hide the mobile menu without taking up space
    mobileMenu.classList.remove('visible');

    // Add event listener to the menu button to toggle the mobile menu
    menuButton.addEventListener('click', function() {
      if (mobileMenu.classList.contains('visible')) {
        mobileMenu.classList.remove('visible'); // Hide the mobile menu and remove space
      } else {
        mobileMenu.classList.add('visible'); // Show the mobile menu and make it take space
      }
    });
  }
});

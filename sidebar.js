document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar-nav');
  const menuButton = document.getElementById('menu-button'); // The menu toggle button for mobile
  const currentLocation = window.location.pathname.split('/').pop();

  // For larger screens
  if (window.innerWidth > 768) {
    // Load the sidebar content for desktop/tablet
    fetch('HTML/sidebar.html')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        sidebar.innerHTML = data;

        // Set the active link
        const navLinks = document.querySelectorAll('#sidebar-nav ul li a');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
          }
        });

        // Scroll to top after loading
        window.scrollTo(0, 0);
      })
      .catch((error) => console.error('Error loading sidebar:', error));
  } else {
    // Mobile: Add toggle functionality
    sidebar.style.left = '-250px'; // Start hidden
    menuButton.addEventListener('click', () => {
      if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active'); // Hide the sidebar
      } else {
        sidebar.classList.add('active'); // Show the sidebar
      }
    });
  }
});

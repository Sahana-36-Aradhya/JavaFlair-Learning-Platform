document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar-nav');
  const menuButton = document.getElementById('menu-toggle'); // Menu toggle button for mobile
  const currentLocation = window.location.pathname.split('/').pop();

  // Load the sidebar content
  fetch('HTML/sidebar.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      sidebar.innerHTML = data;

      // Highlight the active link
      const navLinks = document.querySelectorAll('#sidebar-nav ul li a');
      navLinks.forEach((link) => {
        if (link.getAttribute('href') === currentLocation) {
          link.classList.add('active');
        }
      });
    })
    .catch((error) => console.error('Error loading sidebar:', error));

  // Function to handle sidebar visibility based on screen size
  function handleSidebarResize() {
    if (window.innerWidth > 768) {
      // For desktop/tablet screens, show sidebar by default
      sidebar.classList.add('active'); // Ensure sidebar is visible
      sidebar.style.left = '0'; // Reset position to visible on desktop
    } else {
      // For mobile screens, hide sidebar initially
      sidebar.classList.remove('active');
      sidebar.style.left = '-250px'; // Hide sidebar off-screen
    }
  }

  // Add menu button functionality for mobile (toggle sidebar)
  menuButton.addEventListener('click', function () {
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active'); // Hide sidebar
      sidebar.style.left = '-250px'; // Move sidebar off-screen
    } else {
      sidebar.classList.add('active'); // Show sidebar
      sidebar.style.left = '0'; // Move sidebar into view
    }
  });

  // Call the sidebar visibility function on page load and window resize
  handleSidebarResize();
  window.addEventListener('resize', handleSidebarResize);
});

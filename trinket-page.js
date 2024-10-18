document.addEventListener('DOMContentLoaded', function() {
  // Load the sidebar content as usual
  fetch('sidebar.html')
    .then(response => response.text())
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

      // Check for Trinket iframe on this page
      const trinketIframe = document.querySelector('iframe[src*="trinket.io/embed"]');
      if (trinketIframe) {
        // Add load event to the iframe to wait until it fully loads
        trinketIframe.addEventListener('load', function() {
          window.scrollTo(0, 0); // Scroll to top
        });
      } else {
        window.scrollTo(0, 0); // Scroll to top if no iframe
      }
    })
    .catch(error => console.error('Error loading sidebar:', error));
});

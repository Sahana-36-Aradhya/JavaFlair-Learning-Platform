document.addEventListener('DOMContentLoaded', function() {
  // Check screen width and load sidebar only for larger screens
  if (window.innerWidth > 480) { 
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
  }
});

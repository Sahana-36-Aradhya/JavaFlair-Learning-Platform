document.addEventListener('DOMContentLoaded', function() {
    // Load the sidebar content
    fetch('HTML/sidebar.html') // Adjust the path if necessary
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Insert the sidebar content into the #sidebar-nav element
            const sidebar = document.getElementById('sidebar-nav');
            sidebar.innerHTML = data;
  
            // Set the active class for the current page
            const currentLocation = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('#sidebar-nav ul li a');
  
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentLocation) {
                    link.classList.add('active'); // Highlight active link
                }
            });
  
            // Scroll to the top of the page after loading the sidebar
            window.scrollTo(0, 0);

            // Ensure that links inside sidebar are clickable
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    // Optional: Remove 'active' class from all links and add to clicked one
                    navLinks.forEach(link => link.classList.remove('active'));
                    e.target.classList.add('active');
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});

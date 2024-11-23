document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar-nav');
    const menuButton = document.getElementById('menu-toggle'); // Menu toggle button for mobile
    const currentLocation = window.location.pathname.split('/').pop();

    // Load the sidebar content
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
                link.addEventListener('click', function (e) {
                    // Remove active class from all links and add to clicked one
                    navLinks.forEach(link => link.classList.remove('active'));
                    e.target.classList.add('active');
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));

    // Handle sidebar for different screen sizes
    function handleSidebarResize() {
        if (window.innerWidth > 768) {
            // For desktop/tablet screens, show sidebar by default
            sidebar.classList.add('active'); // Ensure sidebar is visible
            sidebar.style.left = '0'; // Reset position
        } else {
            // For mobile screens, hide sidebar initially
            sidebar.classList.remove('active');
            sidebar.style.left = '-250px';
        }
    }

    // Add menu button functionality for mobile
    menuButton.addEventListener('click', function () {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active'); // Hide sidebar
            sidebar.style.left = '-250px';
        } else {
            sidebar.classList.add('active'); // Show sidebar
            sidebar.style.left = '0';
        }
    });

    // Call resize function on load and window resize
    handleSidebarResize();
    window.addEventListener('resize', handleSidebarResize);
});

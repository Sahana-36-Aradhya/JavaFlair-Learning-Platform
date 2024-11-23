// script.js - External JavaScript file
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar-nav");
  const content = document.getElementById("main-content");

  // Toggle the "active" class for the sidebar
  sidebar.classList.toggle("active");

  // Optionally shift the main content (only if needed)
  if (content) {
    content.classList.toggle("shift");
  }
}

// Add event listener to the toggle button
document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);

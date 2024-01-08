// mobile-bottom-menu.js
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop(); // Get the current page

  // Add 'active' class to the corresponding menu item based on the current page
  const menuItems = document.querySelectorAll('.bottom-buttons a');
  menuItems.forEach((item) => {
    const href = item.getAttribute('href');
    if (currentPage === href) {
      item.classList.add('active');
    }
  });
});

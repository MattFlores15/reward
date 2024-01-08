document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.bottom-buttons a');

  menuItems.forEach((item) => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      
      const href = item.getAttribute('href');
      navigateToPage(href);
    });
  });

  function navigateToPage(page) {
    // Here you can use any logic you need to load the content of the page
    // For simplicity, let's assume you have a function loadPageContent(url) to load the content
    loadPageContent(page);

    // Optionally, you can update the URL using history API
    history.pushState(null, null, page);
  }

  function loadPageContent(url) {
    // You can use AJAX or any other method to load the content of the page
    // For simplicity, let's assume you have a function loadPage(url) to load the content
    loadPage(url);
  }
});

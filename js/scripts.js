//See if the browser supports Service Workers, if so try to register one
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").then(function(registering){
      // Registration was successful
      console.log("Browser: Service Worker registration is successful with the scope",registering.scope);
    }).catch(function(error){
      //The registration of the service worker failed
      console.log("Browser: Service Worker registration failed with the error",error);
    });
  } else {
    //The registration of the service worker failed
    console.log("Browser: I don't support Service Workers :(");
  }

/////////////////NAVIGATION///////////////////
  // window.addEventListener('message', function (event) {
  //   if (event.data && event.data.type === 'highlightButton') {
  //     const activeHref = event.data.href;
  //     const buttons = document.querySelectorAll('.custom-icon');
  
  //     buttons.forEach(button => {
  //       const href = button.parentElement.getAttribute('href');
  //       if (href === activeHref) {
  //         button.classList.add('active');
  //       } else {
  //         button.classList.remove('active');
  //       }
  //     });
  //   }
  // });
  


/////////////////SURVEYS PAGE///////////////////
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons button, #all");
    const surveyCards = document.querySelectorAll(".survey-card");

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active-button");
        });

        // Add active class to the clicked button
        button.classList.add("active-button");

        // Filter cards based on button clicked
        const status = button.textContent.trim();

        if (status === "Alles") {
          surveyCards.forEach(function (card) {
            card.style.display = "flex";
          });
        } else {
          toggleCardsByStatus(status);
        }
      });
    });

    function toggleCardsByStatus(status) {
      surveyCards.forEach(function (card) {
        const cardStatus = card.querySelector(".progress-tags p:last-child").textContent.trim();

        if ((status === "Niet voltooid" && cardStatus === "Status: Niet voltooid") || (status === "Voltooid" && cardStatus === "Status: Voltooid")) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    }
  });


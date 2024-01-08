self.addEventListener("install",(installing)=>{
    console.log("Service Worker: I am being installed, hello world!");
  });
  
  self.addEventListener("activate",(activating)=>{	
    console.log("Service Worker: All systems online, ready to go!");
  });
  
  self.addEventListener("fetch",(fetching)=>{   
    console.log("Service Worker: User threw a ball, I need to fetch it!");
  });
  
  self.addEventListener("push",(pushing)=>{
      console.log("Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(");
  })

  

   // Get the canvas element
   var ctx = document.getElementById('pieChart').getContext('2d');

   // Chart data
   var data = {
     labels: ['Red', 'Blue', 'Yellow'],
     datasets: [{
       data: [30, 40, 30], // Example data percentages
       backgroundColor: ['red', 'blue', 'yellow']
     }]
   };
 
   // Configuration options
   var options = {
     responsive: true,
     maintainAspectRatio: false
     // Other chart options can be set here
   };
 
   // Create the pie chart
   var myPieChart = new Chart(ctx, {
     type: 'pie',
     data: data,
     options: options
   });
  
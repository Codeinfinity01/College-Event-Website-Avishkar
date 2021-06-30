// Set the date we're counting down to
var countDownDate = new Date("June 30, 2021 09:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="time"
  var timers = document.querySelectorAll("#time1 , #time2 , #time3 , #time4");
  [].forEach.call(timers, function(time) {
    time.innerHTML = `<span class="h1 font-weight-bold">${days}</span> Days<span class="h1 font-weight-bold">${hours}</span> Hr<span class="h1 font-weight-bold">${minutes}</span> Min<span class="h1 font-weight-bold">${seconds}</span> Sec`;
  });


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    var timers = document.querySelectorAll("#time1 , #time2 , #time3 , time4");
    [].forEach.call(timers, function(time) {
      time.innerHTML = "EXPIRED";
    });
  }
}, 1000);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


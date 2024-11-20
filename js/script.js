// Dynamically update all circular progress bars
document.querySelectorAll('.circular-progress').forEach((progress) => {
  const percentage = parseInt(progress.getAttribute('data-percentage')); // Get percentage from data attribute
  const valueElement = progress.querySelector('.progress-value'); // Find the span inside
  let startValue = 0;
  const speed = 30; // Adjust the speed as needed

  const progressInterval = setInterval(() => {
    startValue++;
    valueElement.textContent = `${startValue}%`;
    progress.style.background = `conic-gradient(#4caf50 ${
      startValue * 3.6
    }deg, #ededed 0deg)`;

    if (startValue === percentage) {
      clearInterval(progressInterval);
    }
  }, speed);
});

// Filter posts using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      // Add padding to body
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbarHeight + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      // Remove padding from body
      document.body.style.paddingTop = "0";
    }
  });
});

// Back-to-top button functionality
let mybutton = document.getElementById("btn-back-to-top");

// Show button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

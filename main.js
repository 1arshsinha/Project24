// Sticky navbar
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > 0) {
    navbar.classList.add("green-bg");
  } else {
    navbar.classList.remove("green-bg");
  }
}
// Dynamically set the custom cursor
document.addEventListener("DOMContentLoaded", function() {
    const cursorImg = document.createElement('img');
    cursorImg.src = 'custom-cursor.png'; 
    cursorImg.style.position = 'absolute';
    cursorImg.style.zIndex = '9999';
    cursorImg.style.pointerEvents = 'none'; // Ensure the cursor does not intercept mouse events
    document.body.appendChild(cursorImg);

    document.addEventListener('mousemove', function(e) {
        cursorImg.style.left = (e.clientX - cursorImg.width / 2) + 'px';
        cursorImg.style.top = (e.clientY - cursorImg.height / 2) + 'px';
    });
});

// Dynamically set the custom cursor
document.addEventListener("DOMContentLoaded", function() {
    const cursorImg = new Image();
    cursorImg.src = 'custom-cursor.png'; // Replace 'custom-cursor.png' with your custom cursor image path
    cursorImg.onload = function() {
        document.body.style.cursor = 'url(' + cursorImg.src + '), auto';
    };
});

document.addEventListener("DOMContentLoaded", function() {
    // Scroll progress indicator
    const progressBar = document.getElementById('scrollBar');

    window.addEventListener('scroll', function() {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollProgress = (scrollTop / scrollTotal) * 100;

        progressBar.style.width = scrollProgress + '%';
    });
});
// Scroll progress indicator
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById('fundraiserProgress');
    progressBar.style.width = '32%'; // Set to 32% to represent the current progress
});

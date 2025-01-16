// Get the toggle button
const modeToggle = document.getElementById('mode-toggle');

// Check if the dark mode preference is already saved in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  modeToggle.textContent = '☾';
}

// Add click event listener to toggle between dark and light mode
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update the button text and localStorage based on the mode
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☾';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    modeToggle.textContent = '☾';
    localStorage.setItem('darkMode', 'disabled');
  }
});
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800, function(){
                window.location.hash = hash;
                $(hash).addClass('active');
                setTimeout(function() {
                    $(hash).removeClass('active');
                }, 1500);
            });
        }
    });

    // Add wow animation for portfolio cards
    $('.card').hover(function() {
        $(this).addClass('wow animate__animated animate__pulse');
    }, function() {
        $(this).removeClass('wow animate__animated animate__pulse');
    });
});



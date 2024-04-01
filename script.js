window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    if (window.scrollY > 100) { // Adjust the scroll position threshold as needed
        logo.classList.add('hidden'); // Apply the 'hidden' class to fade out the logo
    } else {
        logo.classList.remove('hidden'); // Remove the 'hidden' class to make the logo visible
    }
});
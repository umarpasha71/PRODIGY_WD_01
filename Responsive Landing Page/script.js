window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = '#0d3a30'; 
    } else {
        header.style.backgroundColor = '#146150'; 
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1); 
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var headerHeight = document.querySelector('header').offsetHeight;
                var position = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });
});

//document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('load', function () {
        const navLinks = document.querySelectorAll('.nav-link');
    
        console.log(navLinks);
        // Add scroll event listener
        window.addEventListener('scroll', function () {
            let fromTop = window.scrollY + 10;
    
            navLinks.forEach(link => {
                let section = document.querySelector(link.hash);
    
                console.log(link.hash);
                // Check if current scroll position is within section
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });
    });
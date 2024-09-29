(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    const courses = document.querySelectorAll('.course-card'); // Get all course elements
    const itemsPerPage = 4; // Number of items per page
    let currentPage = 1;

    function showPage(page) {
        // Hide all courses
        courses.forEach((course, index) => {
            course.style.display = 'none';
        });

        // Show only the courses for the current page
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        for (let i = start; i < end && i < courses.length; i++) {
            courses[i].style.display = 'block';
        }
    }

    function updateButtons() {
        document.querySelector('.prev-page').disabled = currentPage === 1;
        document.querySelector('.next-page').disabled = currentPage * itemsPerPage >= courses.length;
    }

    // Initial display of courses
    showPage(currentPage);
    updateButtons();

    // Next and previous button functionality
    document.querySelector('.next-page').addEventListener('click', () => {
        currentPage++;
        showPage(currentPage);
        updateButtons();
    });

    document.querySelector('.prev-page').addEventListener('click', () => {
        currentPage--;
        showPage(currentPage);
        updateButtons();
    });
});


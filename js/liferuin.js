$(document).ready(function () {
    // Window Resize 100vh
    window.onresize = function() {
        document.body.height = window.innerHeight;
    }

    window.onresize();
    
    // Title Text Change
    $("#site-title").click(function () {
        $("#site-title_h1").fadeOut( function () {
            $("#site-title_h1").text(($("#site-title_h1").text() == 'Boy In Bloom') ? 'Liferuin' : 'Boy In Bloom').fadeIn();
        })
    })

    // Responsive Slides
    $("#slider").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        namespace: "transparent-btns"
    });
});
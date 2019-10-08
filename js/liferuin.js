$(document).ready(function () {
    // Title Text Change
    $("#site-title").click(function () {
        $("#site-title_h1").fadeOut( function () {
            $("#site-title_h1").text(($("#site-title_h1").text() == 'Liferuin') ? 'Boy in Bloom' : 'Liferuin').fadeIn();
        })
    })

    // Clock
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        
        var time = h + ":" + m  + " " + "EST";
        document.getElementById("clock-display").innerText = time;
        document.getElementById("clock-display").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();

    // Responsive Slides
    $("#slider").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        namespace: "transparent-btns"
    });
});
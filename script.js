// To make the font color automatically white to overwrite bootstrap grey font color
$( document ).ready(function() {
    $(".barcolor").css("color","white");
});

// Navbar transparent to color transition
$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    if (scrollPos > 100) {
        $(".navbar").css("background-color", "white");

        $(".barcolor").css("color","black");
    }
    if (scrollPos <= 100) {
        $(".navbar").css("background-color", "transparent");

        $(".barcolor").css("color","white");
    }
});
$(document).ready(function() {

    $("#Login").on("click",function(){
        $('.popup,.popup_overlay').fadeIn(400);
    });

    $('.closer,.popup_overlay').click(function(){
        $('.popup,.popup_overlay').fadeOut(400);
    });

    $("#top").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 7000);
    });

    $(".nav").on("click", function (event) {
        event.preventDefault();
        let current = $(this).index();
        let currentSection = $(".wrap").eq(current);

        $("html,body").animate({
            scrollTop: currentSection.position().top
        }, 300)
    });
});
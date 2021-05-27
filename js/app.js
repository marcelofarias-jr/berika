    $(document).ready(function () {
        $(window).bind('scroll', function () {
            var distance = 115;
            if ($(window).scrollTop() > distance) {
                $('#nav-hidden').slideDown();
            } else {
                $('#nav-hidden').slideUp();
            }
        });
        $("#btn-nav-xs").click(function () {
            $("#nav-hidden-xs").slideToggle("slow", function () {
            });
        });
    });

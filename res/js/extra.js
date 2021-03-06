//function getInternetExplorerVersion()
//{
//    var rv = -1;
//    if (navigator.appName == 'Microsoft Internet Explorer')
//    {
//        var ua = navigator.userAgent;
//        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
//        if (re.exec(ua) != null)
//            rv = parseFloat( RegExp.$1 );
//    }
//    else if (navigator.appName == 'Netscape')
//    {
//        var ua = navigator.userAgent;
//        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
//        if (re.exec(ua) != null)
//            rv = parseFloat( RegExp.$1 );
//    }
//    return rv;
//}
$( document ).ready(function(){
    $('.button-collapse').sideNav({
            menuWidth: 240,
            edge: 'left',
            closeOnClick: true
        }
    );
    $('.modal-trigger').leanModal({
        dismissible: true,
        ready: function() { $("body").css("overflow", "hidden"); },
        complete: function() { $("body").css("overflow", "auto"); }
    });
    $('.materialboxed').materialbox();
    $(".dropdown-button").dropdown(
        { hover: false }
    );
    $('.scrollspy').scrollSpy();

    if ($(window).width() > 992) {
        $("#toc").css("position", "absolute").css("top", "150px").css("right", "101px");
    }
    else {
        $("#toc").css("position", "absolute").css("top", "150px").css("right", "0px");
    }

    $(window).on('scroll', function() {
        scrollPosition = $(this).scrollTop();
        if ($(window).width() > 992) {
            if (scrollPosition >= 100) {
                // If the function is only supposed to fire once
                $("#toc").css("position", "fixed").css("top", "20px").css("right", "101px");
            }
            else {
                $("#toc").css("position", "absolute").css("top", "150px").css("right", "101px");
            }
        }
        else {
            if (scrollPosition >= 100) {
                // If the function is only supposed to fire once
                $("#toc").css("position", "fixed").css("top", "20px").css("right", "0px");
            }
            else {
                $("#toc").css("position", "absolute").css("top", "150px").css("right", "0px");
            }
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 992) {
            $("#toc").css("position", "absolute").css("top", "150px").css("right", "101px");
        }
        else {
            $("#toc").css("position", "absolute").css("top", "150px").css("right", "0px");
        }
    });
    //credit to kennebec https://stackoverflow.com/users/80860/kennebec - stackoverflow



    //var ieVer = getInternetExplorerVersion();
    //if (ieVer >= 10){
    //    $("#teamModal").removeClass("modal-fixed-footer");
    //    $("#supModal").removeClass("modal-fixed-footer");
    //}
    //if (ieVer > 0 && ieVer < 12){
    //
    //}
});

$( document ).scroll(function() {
    if ($( document ).scrollTop() >= 100) {
        // user scrolled 50 pixels or more;
        // do stuff
       $('#toc').css("margin-top", "0px");
    } else {
        $('#toc').css("margin-top", "-70px");
    }
});


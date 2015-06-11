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

})
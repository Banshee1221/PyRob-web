$( document ).ready(function(){
    $('.button-collapse').sideNav({
            menuWidth: 240, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    $('.modal-trigger').leanModal({
        dismissible: true // Modal can be dismissed by clicking outside of the modal
    });
    $('.materialboxed').materialbox();
})
(function($) {
    $( document ).ready(function() {

        var r = function () {
            $('header').removeClass('open');
            $('.dialog-fade').removeClass('open');
        };

        $('.mobile-panel .toggle').click(function () {
            $('header').addClass('open');
            $('.dialog-fade').addClass('open');
        });

        $('header nav a').click(r);

        $('.dialog-fade').click(r);
    });
})(jQuery);

/*
 if ($('header').hasClass('open')) {
 $('header').removeClass('open');
 }
 if ($('.dialog-fade').hasClass('open')) {
 $('.dialog-fade').removeClass('open');
 }

 */
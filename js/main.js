// JQUERY

$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        margin: 10
    });

    dotcount = 1;

    jQuery('.owl-dot').each(function () {
        jQuery(this).addClass('dotnumber' + dotcount);
        jQuery(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });

    slidecount = 1;

    jQuery('.owl-item').not('.cloned').each(function () {
        jQuery(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });

    jQuery('.owl-dot').each(function () {
        grab = jQuery(this).data('info');
        slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
        jQuery(this).css("background-image", "url(" + slidegrab + ")");
    });

    amount = $('.owl-dot').length;
    gotowidth = 100 / amount;
    jQuery('.owl-dot').css("height", "70px");
    jQuery('.owl-dot').css("width", "150px");

});

// AUDIO PLAYER

new GreenAudioPlayer('.gap-example');

GreenAudioPlayer.init({
    selector: '.player',
    stopOthersOnPlay: true
});
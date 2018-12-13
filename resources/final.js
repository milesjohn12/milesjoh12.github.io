$(document).ready(function(){
    $('.contactinfowords').hide()


    $('.contactinfo').mouseenter(function(){
            $('.contactinfoimg').slideUp(2000);
            $('.contactinfowords').slideDown(2000);
    })
    $('.contactinfo').mouseleave(function(){
        $('.contactinfoimg').slideDown(2000);
        $('.contactinfowords').slideUp(2000);
})
})
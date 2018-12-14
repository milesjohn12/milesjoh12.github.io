$(document).ready(function(){
    $('.contactinfowords').hide()
    $('.dailylifewords').hide()


    $('.contactinfo').mouseenter(function(){
            $('.contactinfoimg').slideUp(2000);
            $('.contactinfowords').slideDown(2000);
    })
    $('.contactinfo').mouseleave(function(){
        $('.contactinfoimg').slideDown(2000);
        $('.contactinfowords').slideUp(2000);
    })
    $('.dailylife').mouseenter(function(){
        $('.dailylifeimg').slideUp(2000);
        $('.dailylifewords').slideDown(2000);
    })
    $('.dailylife').mouseleave(function(){
        $('.dailylifeimg').slideDown(2000);
        $('.dailylifewords').slideUp(2000);
    })   
})
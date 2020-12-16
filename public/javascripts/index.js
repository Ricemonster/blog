
$('.itema').on({
    mouseenter: function (e) {
       $(this).addClass('attiveA')
       $(this).css('color','#145CA4')
       $(this).find('#title').addClass('attiveB');
    },
    mouseleave: function (e) {
        $(this).removeClass('attiveA')
        $(this).css('color','#000000')
        $(this).find('#title').removeClass('attiveB')
    }
})
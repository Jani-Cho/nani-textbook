
$('.menu').click(function() {
    console.log(1)
    $('.sidebar').addClass('active')
    $(document).mouseup(function (e) {
        var container =$(".sidebar"); // 這邊放你想要排除的區塊
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.sidebar').removeClass('active')
        }
    });



});

$('.r-item .heading3').click(function() {
    $(this).toggleClass('active')
});



$('.subject').click(function() {
    console.log('test')
    window.location('/chinese/textbook.html')
});

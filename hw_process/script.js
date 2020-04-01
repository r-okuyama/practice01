
$(function(){
    $('.balloon').hide();
    $('.contents-box').on('mouseover', function(){
        $('.water').slideDown(500);
    });
});

$(function(){
    $('.a-contents').on('mouseover', function(){
        $('#a-balloon').slideDown(500);
    });
});
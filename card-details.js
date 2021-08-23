// click tang giá trị
$(" button.plush-button").click(
    function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        var newVal = parseFloat(oldValue) + 1;
        $button.parent().find("input").val(newVal);
    }
);
// click giam gia tri
$(" button.minus-button").click(
    function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        var newVal = parseFloat(oldValue) - 1;
        $button.parent().find("input").val(newVal);
    }
);
// =======================
$('.small-to-big-window .small-item').click(
    function () {
        var item = $(this).clone();
        $('.small-to-big-window  .big-window ').html(item);
});
$('.select-color').click(function(){
    $color=$(this).find('.checkmark').css('color');
    $('.small .small-item.main-card')[0].click();
    $('.main-card .card-color').css('fill',$color);
    if (wc_hex_is_light(rgbToHex($color))) {
        $('.main-card .invent-color').css('fill','black');
        $('.main-card span').css('color','black'); 
        $('.main-card .invent-img').css('filter','invert(1)');   
    }
    else{
        $('.main-card .invent-color').css('fill','white');
        $('.main-card .invent-img').css('filter','invert(0)');          
        $('.main-card span').css('color','white');  
    }
})
function rgbToHex(c){
    var rgb =c ;    
    rgb = rgb.substring(4, rgb.length-1)
             .replace(/ /g, '')
             .split(',');
    return rgb;
}
function wc_hex_is_light([r,g,b]) {
    const c_r = parseInt(r);
    const c_g = parseInt(g);
    const c_b = parseInt(b);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}
$('input[name="tapply-name"]').keydown(function(){
    $('.small .small-item.main-card')[0].click();
    $('.main-card span').text($(this).val());
})
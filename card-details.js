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
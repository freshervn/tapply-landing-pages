$(document).ready(
    function(){
        $('.toggle-cart').click(
            function(){
                $('.OTC-cart-sidebar').toggleClass('active');
                // console.log('run');
            }
        )    
        // $('.toogle-menu-mobie').click(
        //     function(){
        //         $(' header nav .links').toggleClass('mobie-on');
        //         console.log('run');
        //     }
        // )    
        // khi một nút click dc bấm
        $('.click-show').click(
            function () {
                // tìm khối cần hiển thị
                // kiểm tra tình trạng hiện, ẩn
                $blockId = $('.' + $(this).attr('data-block-id'));
                $blockId.toggleClass('mobie-on');
            }
        )
        // khi di chuot vào khối thì tắt uwwindown listentd
        $('.ClickToShow,button,.click-show').mouseover(
            function () {
                // console.log('chuot hover button');
                $(window).off('mousedown');
            }
        )
        $('.ClickToShow , button,.click-show').mouseleave(
            function () {
                // console.log('chuot ben ngoai button');
                // khi di chuột    
                $(window).mousedown(
                    function () {
                        $blockId = $('.' + $('.click-show').attr('data-block-id'));
                        if($('.links').hasClass('mobie-on')){
                            $blockId.toggleClass('mobie-on');
                        }
                    }
                );
            }
        )
    }
)

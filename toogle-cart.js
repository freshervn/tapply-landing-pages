$(document).ready(
    function(){
        $('.toggle-cart').click(
            function(){
                $('.OTC-cart-sidebar').toggleClass('active');
                console.log('run');
            }
        )    
        $('.toogle-menu-mobie').click(
            function(){
                $(' header nav .links').toggleClass('mobie-on');
                console.log('run');
            }
        )    
    }
)
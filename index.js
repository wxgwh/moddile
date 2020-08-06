$(function(){
    $(".close-box").hammer().bind('tap',function(){
        $(this).find("div").css({
            transform:"rotate(0)"
        })
        $(".top").css({
            height:0
        })
    })


    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })

    var startpaace;
    $(".nav-box").hammer().bind("panstart",function(ev){
        startpaace=$(this).position().left;
    })
    $(".nav-box").hammer().bind("panleft",function(ev){
        var lefts=startpaace+ev.gesture.deltaX;
        if(Math.abs(lefts)>$(this).width()-$(this).parent().width()){
            lefts=-($(this).width()-$(this).parent().width());
        }
        $(this).css({
            left:lefts
        })
    })
    $(".nav-box").hammer().bind("panright",function(ev){
        var rights=startpaace+ev.gesture.deltaX;
        if(rights>0){
            rights=0;
        }
        $(this).css({
            left:rights
        })
    })



    var startpace;
    $(".shop-list").hammer().bind("panstart",function(ev){
        startpace=$(this).position().left;
    })
    $(".shop-list").hammer().bind("panleft",function(ev){
        var lefts=startpace+ev.gesture.deltaX;
        if(Math.abs(lefts)>$(this).width()-$(this).parent().width()){
            lefts=-($(this).width()-$(this).parent().width());
        }
        $(this).css({
            left:lefts
        })
    })
    $(".shop-list").hammer().bind("panright",function(ev){
        var rights=startpace+ev.gesture.deltaX;
        if(rights>0){
            rights=0;
        }
        $(this).css({
            left:rights
        })
    })
})

  
  

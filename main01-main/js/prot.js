$(document).ready(function(){

   //----------------------------------------------------------------- 
        var menu = $('.nav > li');
        var contents = $('#wrap > div');  

        $('.nav> li').click(function(event){
            event.preventDefault();
            
            var tg = $(this);
            var i = tg.index();
            
            var section = $('#wrap > div').eq(i);
            var tt = section.offset().top;
            
            $('html, body').stop().animate({ scrollTop: tt }, 1000);
        })
    //--------------------------------------------------------------------------
    
    var screen01Num = 1;
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 880 && screen01Num == 1) {
            screen01Num == 0;
            $('.profile_img').animate({ opacity: '100%' })
            $('.profile_txt_box').animate({ opacity: '100%' })
        }
        else if (scrollTop < 700 && screen01Num == 0) {
             screen01Num == 1;
           
        }
            
        
    })

    //-------------------------------------------------------------------
    var scene01Num = 1;

                $(window).scroll(function(){
                    var scrollTop = $(document).scrollTop();
                    if(scrollTop > 1800 && scene01Num == 1) {
                        scene01Num = 0;
                        $('#skill .in_box01').stop().delay(0).css({left:'400px'}).animate({left:'90px'},1000);
                        $('#skill .in_box02').stop().delay(500).css({left:'400px'}).animate({left:'220px'},1000);
                        $('#skill .in_box03').stop().delay(1000).css({left:'400px'}).animate({left:'230px'},1000);
                        $('#skill .in_box04').stop().delay(1500).css({left:'400px'}).animate({left:'290px'},1000);
                    }
                    else if(scrollTop < 1500 && scene01Num == 0){
                        scene01Num = 1;
                        $('#skill .in_box01').stop().css({left:'90px'}).animate({left:'400px'},1000);
                        $('#skill .in_box02').stop().css({left:'220px'}).animate({left:'400px'},1000); 
                        $('#skill .in_box03').stop().css({left:'230px'}).animate({left:'400px'},1000);
                        $('#skill .in_box04').stop().css({left:'290px'}).animate({left:'400px'},1000);

                    }
                });

                //프로잭트 박스에니메이트
                $('#project .group .project_box1').mouseenter(function(){
                $('#project .group .slide_box1').show().animate({top:'0',left:'0'})})

                $('#project .group .project_box2').mouseenter(function(){
                    $('#project .group .slide_box2').show().animate({top:'0',left:'0'})})

                $('#project .group .project_box3').mouseenter(function(){
                    $('#project .group .slide_box3').show().animate({top:'0',left:'0'})})  
                //프로잭트 박스에니메이트 마우스가 떨어졌을때
                $('#project .group .slide_box1').mouseleave(function(){
                    $('#project .group .slide_box1').stop().css({top:'0',left:'0'}).animate({top:'400px',left:'400px'});
                            
                })
                $('#project .group .slide_box2').mouseleave(function(){
                    $('#project .group .slide_box2').stop().css({top:'0',left:'0'}).animate({top:'400px',left:'400px'});
                            
                })
                $('#project .group .slide_box3').mouseleave(function(){
                    $('#project .group .slide_box3').stop().css({top:'0',left:'0'}).animate({top:'400px',left:'400px'});
                            
                })
//----------------------------------------------------------------------------------------------------
    
    


})
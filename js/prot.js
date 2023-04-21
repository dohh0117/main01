$(document).ready(function(){

    var scene01Num = 1;

                $(window).scroll(function(){
                    var scrollTop = $(document).scrollTop();
                    if(scrollTop > 1800 && scene01Num == 1) {
                        scene01Num = 0;
                        $('#skill .in_box01').stop().delay(0).css({top:'400px'}).animate({top:'150px'},1000);
                        $('#skill .in_box02').stop().delay(500).css({top:'400px'}).animate({top:'190px'},1000);
                        $('#skill .in_box03').stop().delay(1000).css({top:'400px'}).animate({top:'200px'},1000);
                        $('#skill .in_box04').stop().delay(1500).css({top:'400px'}).animate({top:'230px'},1000);
                    }
                    else if(scrollTop < 1500 && scene01Num == 0){
                        scene01Num = 1;
                        $('#skill .in_box01').stop().css({top:'150px'}).animate({top:'400px'},1000);
                        $('#skill .in_box02').stop().css({top:'190px'}).animate({top:'400px'},1000); 
                        $('#skill .in_box03').stop().css({top:'200px'}).animate({top:'400px'},1000);
                        $('#skill .in_box04').stop().css({top:'230px'}).animate({top:'400px'},1000);

                    }
                });
                //$('#project .slide_box1').hide();
                $('#project .group .project_box1').mouseenter(function(){
                $('#project .group .slide_box1').show().animate({top:'0',left:'0'})

                })
                $('#project .group ul>li:nth-child(1)').mouseleave(function(){
                    $('#project .group .slide_box1').stop().css({top:'0',left:'0'}).animate({top:'400px',left:'400px'}).fadeOut();

                })


    


})
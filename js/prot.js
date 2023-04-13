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


})
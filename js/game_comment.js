$(document).ready(function(){	
 			var flag=1;
            $('#toggle').click(function(){
                $('#comment').animate({width:'toggle'},500);
                if(flag){
                	$("#toggle").text("展开");
                	flag=!flag;
                }
                else{
                	$("#toggle").text("收起");
                	flag=!flag;
                }
           
            });
        });
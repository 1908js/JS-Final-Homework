$(document).ready(function(){
	//适应性窗口大小
	$("#container").css("width",$(document).innerWidth()).css("height",$(document).innerHeight());


	//主机控制
	$(window).keydown(function(e){
		var y=$(".plane").position().top;
		var x=$(".plane").position().left;
		var maxLeft=$(window).innerWidth()-50;
		var maxTop=($(window).innerHeight())-50;
		console.log(e.keyCode);
		switch(e.keyCode){
			case 87:
				if(y>0)
					$(".plane").css("top",y-10);
				break;
			case 83:
				if(y<maxTop-30)
					$(".plane").css("top",y+10);
				break;
			case 65:
				if(x>0)
					$(".plane").css("left",x-10);
				break;
			case 68:
				if(x<maxLeft-30)
					$(".plane").css("left",x+10);
				break;
			case 74:
				shoot();
				break;
		}//74
	});
	var shoot=()=>{
		var top=$(".plane").position()top-50;
		var bullet=$("<div></div>").addClass("bullet").css("top",top);
		var left=$(".plane").position().left+$(".plane")
	}

});
		
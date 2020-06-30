 $(document).ready(function(e) {
        $(".tab li").click(function(){
            $(this).parent(".tab").children("li").eq($(this).index()).addClass("activ").siblings().removeClass("activ");
            $(this).parent(".tab").next(".tabCon").children("div").hide().eq($(this).index()).show();
        })
    });

        //下来列表
        $(document).ready(function(){
            $('#header_main').mouseenter(function(){
                $('#lab').slideToggle(300);
            });
        	
            if ($('#header_main').mouseleave() && !$('#lab').mouseenter() ) $('#lab').slideToggle(300);
            // if ($('#button').() && $('#button').mouseleave() ) $('#lab').slideToggle(300);
            $('#lab').mouseleave(function(){
                $('#lab').slideToggle(300);
            });
        });


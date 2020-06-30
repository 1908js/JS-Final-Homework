    var imgNub;               //轮播图片数量
    $(function(){
        imgNub = $(".carousel .img").size();             //获取轮播图片数量

        for(i=0;i<imgNub;i++){
            $(".carousel .img:eq("+i+")").attr("imgId",i);//给所有图片附上ID
        }

    /*
            根据轮播图片数量设定图片位置对应的class
            img3为中央展示位
            img2 && img 4分别为左右            
            初始化各各图位置
    */
        if(imgNub==1){
            //img3
            for(i=0;i<imgNub;i++){
                $(".carousel .img:eq("+i+")").addClass("img3");
            }
        }
        if(imgNub==2){
            //img 3、4
            for(i=0;i<imgNub;i++){
                $(".carousel .img:eq("+i+")").addClass("img"+(i+3));
            }
        }
        if(imgNub==3){
            //img 2、3、4
            for(i=0;i<imgNub;i++){
                $(".carousel .img:eq("+i+")").addClass("img"+(i+2));
            }
        }
        if(imgNub>3&&imgNub<6){
            //img 1、2、3、4、(5)
            for(i=0;i<imgNub;i++){
                $(".carousel .img:eq("+i+")").addClass("img"+(i+1));
            }
        }
        if(imgNub>=6){
            for(i=0;i<imgNub;i++){
                if(i<5){
                    // img 1、2、3、4、5
                    $(".carousel .img:eq("+i+")").addClass("img"+(i+1));
                }else{
                    //img 5
                    $(".carousel .img:eq("+i+")").addClass("img5");
                }
            }
        }
        setInterval("right()",3000);
    });

    //右滑动
    function right(){
        var fy = [];
        for(i=0;i<imgNub;i++){
            fy[i]=$(".carousel .img[imgId="+i+"]").attr("class");
            // 给数组赋值
        }
        console.log(fy);
        for(i=0;i<imgNub;i++){
            if(i==0){
                //最后一个->第一个
                $(".carousel .img[imgId="+i+"]").attr("class",fy[imgNub-1]);
            }else{
                //其他依次后移
                $(".carousel .img[imgId="+i+"]").attr("class",fy[i-1]);
            }
        }
    }
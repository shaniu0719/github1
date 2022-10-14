window.onload = function(){
    // toggleClass切换类
        function hasClass(obj , cn){
            var reg=new RegExp("\\b"+cn+"\\b");
            return reg.test(obj.className);
        }
        function addClass(obj , cn){
            obj.className += " "+cn;
        }
        function removeClass(obj , cn){
            var reg = new RegExp("\\b"+cn+"\\b");
            obj.className = obj.className.replace(reg , "");
        }
        function toggleClass(obj , cn){
            if(hasClass(obj , cn)){
                removeClass(obj , cn);
            }else{
                addClass(obj , cn);
            }
        }

            var index = 1;
    //小点切换
            var img1 = document.getElementsByClassName("img1")[0];
            var pointBto = document.querySelectorAll(".a-point li");

            for(var i=0 ; i<5 ; i++){
                pointBto[i].num=i+1;
                pointBto[i].onclick=function(){
                    img1.src="./img/banner"+this.num+".jpg";
                // 白点移动
                    for(var j=0 ; j<5 ; j++){
                        removeClass(pointBto[j].firstChild , "actived");
                    }
                    addClass(this.firstChild,"actived");
                    return index=this.num;
                }
            }

    // 点击上下张切换
        (function (){
            var pointBto = document.querySelectorAll(".a-point li");
            var img1 = document.getElementsByClassName("img1")[0];
            var bot = document.querySelectorAll(".next-page div")
            var last=bot[0];
            var next=bot[1];
            // 下一张
            next.onclick = function(){
                index++;
                if(index>5){
                    index=1;
                }
                img1.src="./img/banner"+index+".jpg";
            // 白点移动
                for(var j=0 ; j<5 ; j++){
                    removeClass(pointBto[j].firstChild , "actived");
                }
                addClass(pointBto[index-1].firstChild ,"actived");
                // toggleClass(this.firstChild,"actived");
            }
            // 上一张
            last.onclick = function(){
                index--;
                if(index<=0){
                    index=5;
                }
                img1.src="./img/banner"+index+".jpg";
            // 白点移动
                for(var j=0 ; j<5 ; j++){
                    removeClass(pointBto[j].firstChild , "actived");
                }
                addClass(pointBto[index-1].firstChild ,"actived");
            }
        })();

    // 自动播放
            var img1 = document.getElementsByClassName("img1")[0];
            setInterval(function(){
                    index++;
                    if(index >5){
                        index=1;
                    }
            // 白点移动 
                    for(var j=0 ; j<5 ; j++){
                        removeClass(pointBto[j].firstChild , "actived");
                    }
                    addClass(pointBto[index-1].firstChild ,"actived");

                    img1.src="./img/banner"+index+".jpg";
                },5000);
}       



            // img1.onmouseover=function(){
            //     clearInterval(myTime);
            // }
            
            // img1.onmouseout=function(){
            //     var myTime = setInterval(function(){
            //         index++;
            //         if(index >5){
            //             index=1;
            //         }
            //         img1.src="./img/banner"+index+".jpg";
            //     },5000);
            // }

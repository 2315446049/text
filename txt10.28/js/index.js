        var num=document.getElementById('num');
        var pics=document.getElementById('pic');
        var 左=document.getElementById('l');
        var 右=document.getElementById('r');
        var as=num.getElementsByTagName('a');
        var picdiv=pics.getElementsByTagName('div');
        var big=document.getElementById('big');
        var bigimg=big.getElementsByTagName('img');
        var 数字=0;

        var timer=null;
        //定时器
        timer=setInterval(moveRight,2000);

        for(var n=0;n<picdiv.length;n++){
            picdiv[n].onmousemove=function(){
            clearInterval(timer); 
            big.style.display='block';
           }
            picdiv[n].onmouseout=function(){
            clearInterval(timer); 
            big.style.display='none';
            timer=setInterval(moveRight,2000); 
           }
        }
        //封装函数
        function moveRight(){
              数字++;
            //给数字一个范围
            if(数字 >= as.length){
                  数字 =0;
            }
            for(var j=0;j<as.length;j++){
                 as[j].className='';
                 picdiv[j].style.display='none';
                 bigimg[j].style.display='none';
             }
             as[数字].className='active';
             picdiv[数字].style.display='block';
             bigimg[数字].style.display='block';
        }
       //点击右
        右.onclick=moveRight;
        //点击左
        左.onclick=function(){
                数字--;
            if(数字 == -1){
                  数字 = as.length-1;
            }
            for(var j=0;j<as.length;j++){
                as[j].className='';
                picdiv[j].style.display='none';
                bigimg[j].style.display='none';
             }
             as[数字].className='active';
             picdiv[数字].style.display='block';
              bigimg[数字].style.display='block';
             
        }


        //点击数字按钮(只改自己的样式)
        for(var i=0;i<as.length;i++){
            //设置属性名和属性值
            as[i].setAttribute('z',i)
            as[i].onclick=function(){
                for(var j=0;j<as.length;j++){
                    //清楚内容和图片
                    as[j].className='';
                    picdiv[j].style.display='none';
                    bigimg[j].style.display='none';
                }
                //点击时样式改变图片出现
                this.className='active';
                //获取属性名,让图片与a按钮有联系
                picdiv[this.getAttribute('z')].style.display='block';
                bigimg[this.getAttribute('z')].style.display='block';
                //数字等于当前点击的a的值
                数字=this.getAttribute('z');
            }
        }
1.将两个字符利用字符串对象的方法变成一个字符,显示在页面id为h1的元素中
答:
<body>
     <h1 id="h1"></h1>
    <script>
        var str1='123';
        var str2='456';
        var name= str1.concat(str2);
        console.log(name);
        var h1=document.getElementById('h1');
        var text = document.createTextNode(name);
        h1.appendChild(text);
    </script>
</body>

2.一个富豪想存87万,给理财顾问写了87w,请自动生成存储870000的方法,显示在页面id为h2的元素中
答:
<body>
    <h2 id="h2"></h2>
    <script>
        var  str='87w';
        var str1=new String(parseFloat(str));
        var str2=str1.padEnd(6,'0');
         console.log(str2);
        var h2=document.getElementById('h2');
        var text = document.createTextNode(str2);
        h2.appendChild(text);
    </script>
</body>

3.一个数字79387.348的工程款,保留两位小数存入,显示在页面id为h3的元素中
答:
<body>
    <h3 id="h3"></h3>
    <script>
        var str='79387.348';
        var str1=str.substr(0,6);  
        var str2=str.substr(-3,2);
        var h3=document.getElementById('h3');
        var text = document.createTextNode(str1+str2);
        h3.appendChild(text);
    </script>
</body>

4.一张图片是一个相对路径img/head/,icon/1.jpg,我只需要拿到它的文件夹目录后显示在页面id为h4的元素中
答:

5.用户输入验证码,无论大小写输入都会正确的方法,显示在页面id为h1的元素中,显示在页面id为h4的元素中
答:
<body>
    <h5 id="h5"></h5>
    <script>
        var h5=document.getElementById('h5');
        var str=prompt('请输入验证码：abcde');
        var str1='abcde';
        var str2='ABCDE';
        console.log(str);
        if(str==str1){
             var text = document.createTextNode(str);
              h5.appendChild(text);
        }else if(str==str2){
            var text = document.createTextNode(str.toLowerCase());
            h5.appendChild(text);
        }else{
            alert('验证码错误');
        }
    </script>
</body>
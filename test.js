function checkTime(i){  //补位处理
    if(i%10<1){
        i='0'+i;
    }  
  }

    var now=new Date();
    var year= now.getFullYear();
    var month= now.getMonth();
    var day= now.getDate();
    var h= now.getHours();
    var m= now.getMinutes();
    var s= now.getSeconds();
    //m=checkTime(m);
    //s=checkTime(s);

    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
   console.log(h+':'+m+':'+s);
   //console.log(typeof(m));

    //document.getElementById("show").innerHTML=""+year+"年"+month+"月"+day+"日 "+weekday[now.getDay()] +h+":"+m+":"+s;
    //t=setTimeout('showTime()',500);
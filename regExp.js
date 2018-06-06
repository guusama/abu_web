//定义正则非数字

var re=/\W/;
//在字符串中查找符合正则的内容
var str='12ab34567890d#';
console.log(re.test(str));
//查找B，且不区分大小写，返回第一个B的索引位置
var re2=/B/i;
console.log(str.search(re2));
//找出字符串中的数字，以数组返回
var str3='hajijdwe22343441ejdrekjr453ejej1k';
var re3=/\d+/g;
console.log(str3.match(re3));
var str4='我爱北京天安门，天安门上太阳升';
var re4=/北京|天安门/g;
console.log(str4.replace(re4,function (str4) {
    console.log(str4);
    var result='';
    for(var i=0;i<str4.length;i++){
        result+="$";
    }
    return result;
}));
var str5='2018-6-7';
var re5=/(\d+)-/g;
str5=str5.replace(re5,function ($0,$1,$2) {
    return $1+'.';
});
console.log(str5);
var str6='now test001 test002';
var re6=/test/g;
var r='';
r=re6.exec(str6);
console.log(r);
console.log(r.index);
console.log(r[0]);
console.log(r[1]);
var str7='sdsssssssuiwssshfsfjsfsfl';
var arr=str7.split('');
str7=arr.sort().join('');
var value='';
var index=0;
var re7=/(\w)\1+/g;
str7.replace(re7,function ($0,$1) {
    if (index<$0.length){
        index=$0.length;
        value=$1;
    }
});
console.log('最多的字符：'+value+', 重复的次数：'+index);
//判断是不是QQ号
var aInput='123134';
var re8=/^[1-9]\d{4,11}$/;
if (re8.test(aInput)){
    console.log('是qq号');
} else {
    console.log('不是qq号');
}
//去掉字符串前后空格
var str9=' hello ';
var re9=/^\s+|\s+$/g;
if(re9.test(str9)){
    console.log('$'+str9.replace(re9,'')+'$');
}
//邮箱验证
var str10='12371837@.com';
var re10=/^\w+@[a-z|0-9]+(\.[a-z]+){1,3}$/g;
console.log(re10.test(str10)?'是邮箱':'不是邮箱');
var str11='dgfhfgh254bhku289fgdhdy675gfh';
var re11=/\d+/g;
console.log(str11.match(re11));
//匹配中文
var str12='权威2的角色等级';
var re12=/^[\u4e00-\u9fa5]+$/g;
console.log(re12.test(str12));
//
//匹配双字节字符
var str13='匹';
var re13=/[^\x00-\xff]+$/g;
console.log(re13.test(str13));
//验证手机号码，验证前2位
var str14='15250950001';
var re14=/^1[3,4,5,7,8]\d{9}$/;
console.log(re14.test(str14));
//IP地址
var str15='23.233.54.13';
var re15=/^((2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d).){3}(2[0-4]\d|25[0-5]|1\d{2}|[1-9]?\d)$/;
console.log(re15.test(str15));
//匹配邮箱
var str16='15250950001@qq.cn';
var re16=/^\w+@[a-z|0-9]+(.[a-z]{1,3}$)/g;
console.log(re16.test(str16));
//匹配网址
var str17='http://adkdkl;a';
var re17=/[a-z|A-Z]+:[^\s]*/;
console.log(re17.test(str17));
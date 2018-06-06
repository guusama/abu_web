//寄生组合式继承
/*
function inheritPrototype(subType,superType){
    var prototype=Object(superType.prototype);
    prototype.constructor=subType;
    subType.prototype=prototype;
}
function SuperType(name) {
    this.name=name;
    this.colors=["red","blue","green"];
}
SuperType.prototype.sayName=function () {
    console.log(this.name);
}
function SubType(name,age) {
    SuperType.call(this,name);
    this.age=age;
}
inheritPrototype(SubType,SuperType);
SubType.prototype.sayAge=function () {
    console.log(this.age);
}
*/
//原型继承
/*
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function () {
    return this.property;
}
function SubType() {
    this.subproperty=false;
}
function SubType2() {
    this.subproperty=false;
}
//继承了Super
SubType.prototype=new SuperType();
//添加新方法
SubType.prototype.getSubValue=function () {
    return this.subproperty;
}
//重写超类型中的方法
SubType.prototype.getSuperValue=function () {
    return false;
}
var instance=new SubType();
console.log(instance.getSuperValue());
SubType.prototype=new SuperType();
var instance2=new SubType();
console.log(instance2.getSuperValue());
*/
//递归
function factorial(num) {
    if (num<=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
console.log(factorial(4));
//location
function getQueryStringArgs() {
    var qs=(location.search.length>0)?location.search.substring(1):" ";
    args={};
    //取得每一项
    var items=qs.length?qs.split('&'):"";
    var item=null,
        name=null,
        value=null;
    for(var i=0;i<items.length;i++){
        item=items[i].split('=');
        name=item[0];
        value=item[1];
        if (name.length){
            args[name]=value;
        }
        return args;
    }
}
var args=getQueryStringArgs();
alert(args['q']);
alert(args['num']);
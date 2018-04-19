
/*
function Animal(name){
	//属性
	this.name=name||'animal';
	console.log(this.name+'正在玩');
	//实例方法
	this.sleep=function(){
		console.log(this.name+'正在睡觉');
	}
}
Animal.prototype.eat=function(food){
	console.log(this.name+'正在吃'+food);
};
//递归
function factorial(num) {
	if (num<=1){
		return 1;
	} else{
		return num*arguments.callee(num-1);
	}
}
var f=factorial(6);
//console.log(f);
//闭包与变量
function createFunctions() {
	var result=new Array();
	for (var i=0;i<10;i++) {
		result[i]=function () {
			return i;
        };
	}
	return result;
}
var r1=createFunctions();
console.log(r1.length);
var r2=new Array('haha','heihie','houhou');
console.log(r2);
function f1() {
	var result=new Array();
	for(var i=0;i<10;i++){
		result[i]=function (num) {
			return function () {
				return num;
            };
        }(i);
	}
	return result;
}
var f2=f1();
//console.log(f2);

var name="The Window";
var object={
	name:"my Object",
	getNameFunc:function(){
		return function(){
			return this.name;

        };
	}
};
console.log(object.getNameFunc()());
*/
var name="the window";
var object={
	name:"my object",
	getName:function () {
		return this.name;
    }
};
console.log(object.getName());
console.log((object.getName)());
object.getName=object.getName;
console.log(object.getName());
console.log((object.getName=object.getName)());
//构造函数模式
function Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function () {
        console.log(this.name);
    }
}
var p1=new Person('abu',25,"software engineer");
console.log(p1.name);
p1.sayName();

//工厂模式
function createPerson(name,age,job) {
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.say2Name=function () {
        console.log(this.name);
    };
    return 0;
}
var p2=createPerson('guu',25,'animation');

function cPerson(name, age, job) {
    var o = new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    // public members
    o.sayName = function() {
        console.log(this.name);
    };
    o.sayNameUC = function() {
        console.log(this.job);
    };

    return o;
}

var person = cPerson("Nicholas", 32, "software Engineer");

person.sayName(); // "Nicholas"
person.sayNameUC(); // "NICHOLAS"
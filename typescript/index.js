"use strict";
// let a:number;
// a=10;
// let c:number;
// c=10;
// console.log(a);
// let b:String;
// b="suhavi";
// console.log(b);
// let x:String;
// let y:String;
// x="abc";
// y="def";
// function sums(x:String,y:String ):String{
//     return "x+y";
// }
// console.log(sums("ab","df"));
let user = {
    username: "suhavi",
    age: 21
};
console.log(user.username);
user.age = 22;
// let arr=[1,2,"suhavi",true]
let num = [1, 2, 3, 4];
num[3] = 45;
console.log(num);
let arr = ["hey", "I", "am", "suhavi"];
arr[0] = "hello";
console.log(arr);
let str = [];
str[0] = 1;
str[1] = "suhavi";
str[3] = "jindal";
console.log(str);
console.log(str[4]);
let emp = {
    id: 1,
    name: "suhavi jindal",
    salary: 900000,
    dept: "IT",
    getName: function () {
        return this.name;
    },
    getsalary: function () {
        return this.salary;
    },
    getid: function () {
        return this.id;
    },
    getdept: function () {
        return this.dept;
    },
};
let emp1 = {
    id: 2,
    name: "suhavi",
    salary: 90000,
    dept: "IT",
    getName: function () {
        return this.name;
    },
    getsalary: function () {
        return this.salary;
    },
    getid: function () {
        return this.id;
    },
    getdept: function () {
        return this.dept;
    },
};
function empname(em) {
    return em.getName;
}
empname(emp);
let employe = [emp, emp1];



function showproduct(products){
    products.map(()=>{

    })
}
showproduct("helo")

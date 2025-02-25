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

// function sum(a:number,c:number ):number{
//     return a+c;
// }
// console.log(sum(10,20));


interface User{
    username:String,
    age:number

}
let user:User={
    username:"suhavi",
    age:21
}
console.log(user.username)
user.age=22

// let arr=[1,2,"suhavi",true]
let num:number[]=[1,2,3,4]
num[3]=45;
console.log(num);

let arr:String[]=["hey","I","am","suhavi"]
arr[0]="hello";
console.log(arr);

let str:number[]|string[]=[]
str[0]=1
str[1]="suhavi"
str[3]="jindal"
console.log(str)
console.log(str[4])




//object
interface Emp{
    id:number,
    name:string,
    salary:number,
    dept:string,
    getName():string
    getsalary():number
    getdept():string
    getid():number
}

let emp:Emp={
    id:1,
    name:"suhavi jindal",
    salary:900000,
    dept:"IT",
    getName:function(){
        return this.name
    },
    getsalary:function(){
        return this.salary
    },
    getid:function(){
        return this.id
    },
    getdept:function(){
        return this.dept
    },

}
let emp1:Emp={
    id:2,
    name:"suhavi",
    salary:90000,
    dept:"IT",
    getName:function(){
        return this.name
    },
    getsalary:function(){
        return this.salary
    },
    getid:function(){
        return this.id
    },
    getdept:function(){
        return this.dept
    },


}


function empname(em:Emp){
    return em.getName
}
empname(emp)

//array of object
let employe:Emp[]=[emp,emp1];



interface User1{
    id:number,
    email:String,
    password:String
}
let users:User1[]=[
    {
        id:1,
        email:"suhavi.jindal03@gmailcom",
        password:"1234"
    },
    {
        id:2,
        email:"suhavi.jindal@gmailcom",
        password:"123"
    },
    {
        id:3,
        email:"suhavi@gmailcom",
        password:"124"
    },
   
]

//or

let some:number|string;
//contain either number or string
let arr2:number[]|string[]=[1,2]
//contain both number or string
let arr3:(number|string)[]=[1,2,"hi"]
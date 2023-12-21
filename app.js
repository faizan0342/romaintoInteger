





// var onbtn = document.querySelector("#onbtn")
// onbtn.addEventListener("click",function(){
//     var img =document.querySelector("#img")
//     img.src="./onbub.jpg"
// })

// var offbtn = document.querySelector("#offbtn")

// offbtn.addEventListener("click",function(){
//     var img =document.querySelector("#img")
//     img.src="./offbun.jpg"
// })

// var input = document.getElementById("input")

// var list = document.getElementById("list")

// function App(){
//     if(input.value === ""){
//         alert("before fill the colums")
//     }

//     var elementCreate = document.createElement("li")

//     var text = document.createTextNode(input.value)

//     elementCreate.appendChild(text)

//     list.appendChild(elementCreate)

//     var elementCreateBtn = document.createElement("button")

//     elementCreateBtn.innerHTML = "Delete"

//     console.log(elementCreateBtn)   

// }

// var input = document.getElementById("input")

// var btn = document.getElementById("btn");


// var addList = document.getElementById("list")

// function App(){
//     if(input.value === ""){
//         alert("plesase fill the input")
//     }

//     var elementCreate = document.createElement("li")

//     var text = document.createTextNode(input.value)

//     elementCreate.appendChild(text)
    
//     addList.appendChild(elementCreate)

//     //////////delete//////

//     var createDeleteBtn = document.createElement("button")

//     createDeleteBtn.innerHTML = "Delete"

//     elementCreate.appendChild(createDeleteBtn)

//     createDeleteBtn.onclick = function(){
//         deleteList(elementCreate)

//     }


//     //////edit///////


// try{
// console.log("hacking wifi")
// console.log("fetching the data")
// console.log(user)
// console.log("fetched the user name and password")
// console.log("user : Faizan and password : game")
// }catch(error){
//   console.log(error)
// }

// try {
//   console.log("hacking wifi");
//   console.log("fetching the data");

//   // Define and assign a value to user
//   var user = "Faizan";

//   console.log(user);
//   console.log("fetched the user name and password");
// } catch (error) {
//   console.log(error);
// }

// The code continues to execute even after the error
// console.log("Continuing with the rest of the code...");


// var num = 123
// console.log(num.toString().split("").reverse().join("") )



//   console.log("hacking wifi");
//   console.log("fetching the data");
//   try{
//   console.log(user)
// }
// catch(error){
//     console.log(error)
// }
//   console.log("fetched the user name and password");
//   console.log("user name : fazina , password : 123")

// setTimeout(() => {
//     console.log("hacking wifi");
// } , 1000)
// setTimeout(() => {
//     console.log("fetching the data");
// }, 2000)

// setTimeout(() => {
//     console.log("fetched the user name and password");
// } , 3000)

// setTimeout(() => {
//     console.log("user name : fazina , password : 123")
// } , 4000)


// var data = fetch("https://api.publicapis.org/entries")

// data.then((value) =>  { return value.json() })
// .then((value2) => console.log(value2))


// 1)fetch
// 2)axios

// 3)AJAX


// var arr = [{name :sufuan , age :28 , class : BCS}, {name :sufuan , age :28 , class : BCS} ,{name :sufuan , age :28 , class : BCS}]s


// var space = ""



// for(var i = 1 ; i <= 4 ; i++){ 
   
//     for(var space = 1 ; space < 25 + i ; space++){
//         document.write("&nbsp")
//     }

//     for(var j = 1  ; j <= 5 - i ; j ++){
//         document.write("*")
//     }
//     document.write("<br/>")
// }






// var string = ""

// for(var i = 1 ; i <= 5 ; i++){ 
   
//     for(var space = 1 ; space < 10 - i ; space++){
//         string += " " ;
//     }

//     for(var j = 1  ; j <=  i ; j ++){
//         string += "*" ;
//     }

  
// }

// console.log(string)


// var string = "";

// for (var i = 1; i <= 5; i++) {

//     // Add spaces
//     for (var space = 1; space < 10 - i; space++) {
//         string += " ";
//     }

//     // Add asterisks
//     for (var j = 1; j <= i; j++) {
//         string += "*";
//     }

//     // Move to the next line after each row
//     string += "\n";
// }

// console.log(string);



// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';

//         // Add spaces
//         for (let j = 1; j <= rows - i; j++) {
//             line += ' ';
//         }

//         // Add asterisks
//         for (let k = 1; k <= i; k++) {
//             line += '*';
//         }

//         console.log(line);
//     }
// }

// Adjust the number of rows as needed
// printPattern(4);


// function App(){
//     document.write("faizan")
// }


// var key = prompt("enter the Key ") 

// var value = prompt("enter the value")


// localStorage.setItem("name" , "faizan")

// sessionStorage.setItem("name" , "faizan")



// var num = 123

// var saveDate = 0

// while(num > 0){

// var lastNaumberSave = num % 10

// saveDate = saveDate*10 + lastNaumberSave

// num = Math.floor(num / 10)

// }

// console.log(saveDate)


// var num = 123

// var reverse =  num.toString().split("").reverse().join("")

// console.log("reverse ==>" , reverse)


// console.log(num%10)

// var a = Math.floor(num / 10)
// console.log(a)


// class apple{

// }

// class mango inhetence{

// }


// var obj1 = {

// }

// var obj2 = {
//     run : function(){
//         alert("hellow faizan")
//     }
// }

// obj1.__proto__ = obj2

// obj1.run()






// [
//     fdsf,
//     dsfds,
//     sfsdf,
//     sfds,

// ]

// {
// var obj = {
//     name : "sdasds",
//     age : 25
// }
// }


// {
//     var product = {
//         "name" : "faizan"
//     }
   
// }


// var this.name = "faizan"

// class universityForm{
//     submit(){
//         alert(`${this.name} sucessefull submit`);
//     }

//     cancle(){
//         alert("cancle");
//     }
//     fill(names){
//         this.name = names       
//     }
// }

// var faizan = new universityForm()
// var neha = new universityForm()
// var basit = new universityForm()

// faizan.fill("neha")
// faizan.submit()

// neha.submit()
// neha.cancle()


// var n = 18

// var list = ["call" , "call" , "call" , "call" ]

// var list1 = []

/////////////////////////////

// write a program 
// for(var i = 0; i < list.length ; i++){

// list1.push(n + i)

// }

// console.log(list1)

// console.log(n)

//////////////////////////

// output

// [10 , 11 , 12]


////


// var n = 10

// var list = ["call" , "call" , "call" , "call"]


// /////////////////////////////

// // write a program 

// //////////////////////////

// // output

// [10 , 11 , 12 , 13]


// ////

// var n = 13

// var list = ["call" , "call" , "call" , "call"]


// /////////////////////////////

// // write a program 

// //////////////////////////

// // output

// 
// var onbtn =document.getElementById("onbtn");
// onbtn.addEventListener("click",function(){
//     var img=document.getElementById("img");
//     img.src="./onBub.jpg"
// });


// var offbtn = document.querySelector("#offbtn")

//  offbtn.addEventListener("click",function(){
//     var img =document.querySelector("#img")
//     img.src="./offbun.jpg"
//  })



var myObj = {
    "I" : 1 ,
    "V" : 5 ,
    "X" : 10 ,
    "L" : 50 ,
    "M" : 100 ,
    "D" : 500 ,
    "M" : 1000
 } 

 var result = Number("")

 var input = "VI"

 for(var i = 0 ; i < input.length ; i++){
    // console.log(myObj[input[i]])
    var first = myObj[input[i]]
    var second = myObj[input[i + 1 ]]

    if(first < second){
        result += second - first
        i++
    }else{
        result += first
    }
 }

 console.log("=====>" ,result)


 


//1 function mul(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 2 == 0 ? (a - 1) + mul(a - 3) : a + mul(a - 2)
// }
// console.log(mul(5));


//2 function mul(a) {
//     let cnt = 0
//     return (a) => {
//         if (a > cnt) {
//             cnt = a
//         }
//         return cnt
//     }
// }
// let sum = mul()
// console.log(sum(10));
// console.log(sum(20));
// console.log(sum(10));



//3 function mul(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 10 + mul(Math.floor(a / 10))
// }
// console.log(mul(1111));



//4 function mul(a = 0) {
//     return (b) => {
//         return a = a + b
//     }
// }
// let sum = mul()
// console.log(sum(3));
// console.log(sum(5));


//5 function mul(a = 0, cnt = 1) {
//     return (b) => {
//         return a = (a + b) / cnt++
//     }
// }
// let sum = mul()
// console.log(sum(10));
// console.log(sum(15));


//7 function mul(a, b) {
//     let c = a;
//     return function () {
//         let sum = c;
//         c += b;
//         return sum;
//     };
// }
// let mul = mul(0, 2);
// console.log(mul());
// console.log(mul());
// console.log(mul());






// 1
// function mul(a) {
//     let b = a.split(",");
//     let d=7;
//     for (let i = 0; i <= b.length - 1; i++) {
//         if ( Number(b[i])==d ) {
//             return "Boom!"
//         }
//     }
//       return "Not!"
// }
// console.log(mul("1,2,3,7"));


// 2
// function mul(a) {
//     let c = 0;
//     let b = a.split("-");
//     for (let i = 0; i < b.length - 1; i++) {
//         c++;
//     }
//     return c;
// }
// console.log(mul("Hel-lo"));


//3
// function mul(a,b) {
//     return a.includes(b)
// }
// console.log(mul("abc","bc"));


// 4
//  function mul(a) {
//     return a.includes(" ");
// }
// console.log(mul("Hello "));


//5
//  function mul(a) {
//     return (b)=> {
//         return a+b;
//     }
// }
// let sum=mul("Hello ");
// console.log(sum("world"));


// 6
//  function mul(a) {
//     if (a.length % 2 == 0) {
//         let b = a.at(a.length / 2-1);
//         let c = a.at(a.length / 2);
//         return b + c;
//     }
//     else {
//         return a.at(Math.floor(a.length / 2));
//     }
// }
// console.log(mul("Helooo"));


//  7 
// function mul(a){
//     let b = a.split("");
//     let c = "";
//     for (let i = 0 ; i < b.length ; i ++ )
//     {
//         if (b[i] == b[i+1]){
//             c=  'true' 
//             break;
//         }   
//         else {c = 'false'}
//     }
//     return c;
// }
// console.log(mul("yummy"));


// 8
//  function mul(a, c) {
//     d = a.indexOf(c)
//     return "I found " + c + " at " + d;
// }
// console.log(mul("Hello hello world", "world"));


// 9
// function reverse(a) {
//     let b = a.split(" ");
//     for (let i = 0; i < b.length; i++) {
//         let d = b[i].split("");
//         if (d.length >= 5) [
//             d.reverse()
//         ]
//         b[i] = d.join("");
//     }
//     let e = b.join(" ");
//     return e;
// }
// console.log(reverse("Hello world!"));


// 10
// function mul(a){
//     let b = a.split("");
//     for (let i = 0 ; i < b.length ; i ++){
//         if (b[i]=="e" || b[i]=="a" || b[i]=="i" ||  b[i]=="o" || b[i]=="u" || b[i]=="E" || b[i]=="A" || b[i]=="I" || b[i]=="O" || b[i]=="U" ){
//             b[i]="-"+b[i]+"-";
//         }
//     }
//     let c = b.join("");
//     return c;
// }
// console.log(mul("Hello world"));


// 11
// function  mul(a){
//      let b = Number(a);
//      let c = "";
//      for (let i = 1 ; i <= b-1 ; i ++){
//         c += i + "-";
//      }
//      return c + a;
// }
// console.log(mul(10));


// 12
// function  mul(a){
//     let c =a.split('').reverse().join('')
//     return a == c
// }
// console.log(mul(' Hello '));


// // 13
// function mu(b,a) {
//     let c = 0;
//     for (let i = 0; i < a.length - 1; i++){
//         if (a.at(i) == b) {
//             c++;
//         }
//     }
//     return c;
// }
// console.log(mu("l","Hello world"));


// 14
// function mul(a) {
//     let b = "";
//     let c = "";
//     for (let i = 0; i < a.length; i++){
//         if (a.at(i) == a.at(i).toUpperCase()) {
//             b += a.at(i);
//         }
//         else {
//             c += a.at(i);
//         }
//     }
//     return b + c;
// }
// console.log(mul("AbuiboT"));


// 15
// function  mul(a){
//     let b =a.toString()
//    let c = b.split("").reverse().join("")
//    return c + a
// }
// console.log(mul(123));
// function mul(a) {
//     let b = "";
//     if(typeof a == "Number"){
//         return "Not a string";
//     }
//     else {
//     for (let i = 0; i < a.length; i++){
//         b = b + a.at(i) + a.at(i);
//     }
//     }
//     return b;
// }

// console.log(mul('HEllo'));

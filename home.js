
// #1
// function mul(a) {
//     if (a < 10){
//         return a;
//     }
//     let b = (a % 10);
//     return Math.min(b, mul(Math.floor((a) / 10)));
// }
// console.log(mul(123456789));

// #2
// function mul(a) {
//     if (a < 10){
//         return a;
//     }
//     let b = (a % 10);
//     return Math.max(b, mul(Math.floor((a) / 10)));
// }
// console.log(mul(98493284));

// #3
// function mul(a, b) {
//     if (a <= b) {
//         mul(a + 1, b);
//         console.log(a);
//     }
// }
// mul(5, 10));

// #4
// function mul(a, b, c) {
//     let cnt = (a + b + c)  + (a - b - c) + (a * b * c) + (a / b / c) + (a % b % c);
//     return cnt;
// }

// console.log(mul(1, 2, 3));

// #5
// function mul(a) {
//     const str = Math.abs(a).toString();
//     if (str.length == 1) {
//         return str;
//     }
//     return mul(str.slice(1, -1));
// }
// console.log(mul(123456789));


// #6
// function mul(a){

//     return (b)=>{
//         return b=a/a
//     }
// }
// let second=mul(1)
// console.log(second(23));
// console.log(second());
// console.log(second());

// #7
// function mul(a) {
//     let b = a.toString();
//     return () => {
//         b = b.slice(1);
//         return b;
//     }
// }
// let sum = mul(121212);
// console.log(sum());
// console.log(sum());
// console.log(sum());
// console.log(sum());


//8
// function mul(a) {
//     let b = 0;
//     return function() {
//         if (b % 2 == 0) {
//             console.log(a);
//         } else {
//             console.log(a.toString().split("").reverse().join(""));
//         }
//         b++;
//     };
// }
// const sum = mul(123);
// sum();
// sum();
// sum();
// sum();


// 9
// function mul(a) {
//     let b = 1;
//     return function() {
//         while (b <= a) {
//             if (a % b == 0) {
//                 console.log(b);
//                 b++;
//                 return;
//             }
//             b++;
//         }
//     };
// }
// const sum = mul(15);
// sum();
// sum();
// sum();
// sum();
// sum();


//10
// function mul(a) {
//     let c = 0;
//     return function (b) {
//         let d;
//         if (c == 0) {
//             d = a + b;
//         } else if (c == 1) {
//             d = a - b;
//         } else if (c == 2) {
//             d = a * b;
//         } else if (c == 3) {
//             d = a / b;
//         }
//         else if (c == 4) {
//             d = a % b;
//         }
//         c = (c + 1) % 5;
//         return d;
//     };
// }
// let sum = mul(6);
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(3));





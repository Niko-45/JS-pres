
// function mul(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 2 == 0 ? (a - 1) + mul(a - 3) : a + mul(a - 2)
// }
// console.log(mul(5));


// function mul(a) {
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



// function mul(a) {
//     if (a <= 0) {
//         return 0
//     }
//     return a % 10 + mul(Math.floor(a / 10))
// }
// console.log(mul(1111));



// function mul(a = 0) {
//     return (b) => {
//         return a = a + b
//     }
// }
// let sum = mul()
// console.log(sum(3));
// console.log(sum(5));


// function mul(a = 0, cnt = 1) {
//     return (b) => {
//         return a = (a + b) / cnt++
//     }
// }
// let sum = mul()
// console.log(sum(10));
// console.log(sum(15));


// function mul(a, b) {
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

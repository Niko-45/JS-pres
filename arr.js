// 1
// function mul(a, b) {
//     let cnt = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == b) {
//             cnt++;
//         }
//     }
//     return cnt > 0 ? true : false;
// }
// console.log(mul([1, 2, 3, 4, 5, 6, 7], 2));


// 2
// const concat = (...arrays) =>arrays.reduce((acc, val) => acc.concat(val), []);
// console.log(concat([15, 4], [2, 3], [5, 7]));

//3
//  function mul(a, b) {
//     return a.indexOf(b)
// }
// console.log(mul([1, 2, 3, 4, 5, 6, 7], 8));

//4
//  function mul(a) {
//     return a.filter((e, i) => {
//         if (a.indexOf(e) === i) return e;
//     })
// }    
// console.log(mul([1,2,3,4,5,1,2,3,6]));

// 5
// function mul(a) {
//     return a.filter((e) => {
//         e > 0 return e;
//     })
// }
// console.log(mul([1, -2, -3, -4, -5, 6]));


// 6
// const mul = (a) => a.reduce((acc, cur) => acc + cur, 0) / a.length;
// console.log(mul([1, 2, 3, 4, 5, 6]));


// 7
// const mul = (arr) => {
//     let rev = arr.toReversed();
//     let ans = true;
//     arr.forEach((e, i) => {
//         if (e != rev[i]) {
//             ans = false;
//         }
//     });
//     return ans;
// }
// console.log(mul([1,2,3,1]));

//8
//  const mul = (a, b, arr) => {
//     return arr.filter((e) => {
//         if (e > a && e < b) {
//             return e;
//         }
//     })
// }
// console.log(mul(3, 7, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 9
// const mul = (arr) => {
//     return arr.reduce((acc, cur) => { acc + cur }, 0)
// }
// console.log(mul([1, 2, 3, 1]));

// 10
// const mul = (arr) => {
//     return arr.map((e) => {
//         return typeof e;
//     });
// }
// console.log(mul([1, 2, "null", []]));


// 11
// const mul = (arr)=> {
//     return arr.map((e) => {
//         return e.length;
// }) 
// }
// console.log(mul(["Halloween", "Thanksgiving", "Christmas"]));


// 12
// const checkSquareAndCube =(arr)=> {
//     let square=Math.sqrt(arr[0]);
//     let cube=Math.cbrt(arr[1]);
//     return square==cube
// }
// console.log(checkSquareAndCube([4, 16]));



//13
//  const invertArray = (arr) => {
//     return arr.map((e)=> {
//         return -e;
//     })
// }
// console.log(invertArray([1, -2, 3, -4, 5]));

//14
//  const mul = (arr) => {
//     return arr.map((e)=> {
//         return e * 2;
//     })
// }
// console.log(mul([1,2,3,4]));

// 15
// const mul = (arr) => arr.reduce((acc, cur) => {
//    return cur > 5 ?  acc + cur : cur;
// },0)
// console.log(mul([10, 12, 28, 47, 55, 100]));

//16
//  const mul = (arr) => {
//     return arr.map((e) => {
//         if (typeof e == 'number') {
//             return e;
//         }
//     })
// }
// console.log(mul(["A", 0, "Edabit", 1729, "Python", "1729"]));


//1
// const mul = (arr) => { 
//     return arr[0];
// }
// console.log(mul(["hello","world"]));

//2
// const mul = (...arr) => {
//     return arr.map((e) => { return e })
// }
// console.log(mul(1, 3));

//3
// let reverse = (arr)=>arr.reverse();
// console.log(reverse([9, 9, 2, 3, 4]));

//4
// let incrementItems=(arr)=>arr.map((e)=>e+1);
// console.log(incrementItems([2, 4, 6, 8]));

//5
// let getLastItem =(arr)=>arr[arr.length - 1];
// console.log(getLastItem([1, 2, 3]));

//6
// let arrayToString=(arr)=>arr.join("")
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));

//7 
// function mul(a, b) {
//     let cnt = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == b) {
//             cnt++;
//         }
//     }
//     return cnt > 0 ? true : false;
// }
// console.log(mul([1, 2, 3, 4, 5, 6, 7], 2));

//8 
// function findIndex(a, b) {
//     return a.indexOf(b)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

//9
// const concat = (...arrays) =>arrays.reduce((acc, val) => acc.concat(val), []);
// console.log(concat([15, 4], [2, 3], [5, 7]));

//10
// let toNumberArray = (arr) => arr.join(",");
// console.log(toNumberArray(["9.4", "4.2"]));
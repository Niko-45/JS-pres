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














// const mul = (arr) => arr.reduce((acc, val) => {
//     return acc + Math.pow(val, 3);
// }, 0)
// console.log(mul([1, 5, 9]));

// const mul = (arr) => arr.filter((e) => {
//     return e ? true : false; })
// console.log(mul([1,false,true,"",0]));


// function allTruthy(...a) {
//     return a.every(Boolean);
// }
// console.log(allTruthy(true, true, true));


// let evanLast = (arr) => arr.reduce((acc, e, i) => {
//     return acc + (i % 2 == 0 ? e : 0)}, 0) * arr.at(-1);
// console.log(evanLast([1, 3, 3, 1, 10]));


// let isEqual = (arr1, arr2) => {
//     let ans = true;
//     arr1.forEach((e, i) => {
//         e != arr2[i] ? ans = false : ans = true;
//     });
//     return ans;
// }
// console.log(isEqual([2, 3, 4, 5], [2, 3, 4, 5]));

// function compoundArray(arr1, arr2) {
//     let len = arr1.length > arr2.length ? arr1.length : arr2.length;
//     let res = [];

//     for (let i = 0; i < len; i++) {
//         res.push(arr1[i], arr2[i]);
//     }
//     return res.filter((e) => e != undefined);
// }
// console.log(compoundArray([1, 2, 3, 4, 5, 6], [7, 8, 9]));

// function multiplicationTable(num) {
//     let arr1=[];
//     let arr2=[];
//     for (let i = 1; i <= num; i++) {
//         arr1.push(i);
//     }
//     for (let i = 1; i <= num; i++) {
//         arr2.push(arr1.map(e => e * i));
//     }
//     return arr2;
// }
// console.log(multiplicationTable(3));

// function fPN(arr) {
//     let fN = "+992";
//     arr.forEach((e, i) => {
//         if (i == 0) {
//             fN += "(" + e;
//         } else if (i == 3) {
//             fN += ") " + e;
//         } else if (i == 6) {
//             fN += "-" + e;
//         } else {
//             fN += e;
//         }
//     });
//     return fN;
// }

// console.log(fPN([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// function fUN (a){
//     return a.filter(e => a.indexOf(e) == a.lastIndexOf(e))
// }
// console.log(fUN([1,2,3,4,5,2,4,5]));

// function totalVolume(arr) {
//     let result = 0;
//     arr.forEach((subArr) => {
//         result += subArr.reduce((acc, val) => (acc * val) + val, 1);
//     });
//     return result;
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));


// function mul(arr) {
//     let ar2 = [];
//     let cnt = 0;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         cnt += arr[i];
//         sum++;
//     }
//     for (let i = 0; i < arr.length; i++) {
//         ar2.push(Math.floor(cnt / sum));
//     }
//     return ar2;
// }

// console.log(mul([0, 0, 2, 3, 7]));


// function mul(a) {
//     let arr1 = [];
//     let arr2 = [];
//     for (let i = 0; i < a; i++) {
//         arr1.push(a);
//     }
//     for (let j = 0; j < a; j++) {
//         arr2.push(arr1);
//     }
//     return arr2;
// }
// console.log(mul(100000000));

//mull
// function mull (arr) {
//     let cnt=0;
//     for (let i=arr; i!=undefined; i=i[0]) cnt++;
//     return cnt
// }

//9
// //mul
// function mul(a){
//     let arr = []
//     a.map((e)=>{
//         let f = 1
//         for ( let i = 1 ; i <= e ; i ++){
//           f *= i
//         }
//         arr.push(f)
//     })
//     return arr
// }

// 10
// function mul (a){
//     for (let i = 0 ; i < a.length ; i ++){ //9
//         for (let j = a[i]-1 ; j > 1 ; j--){ // 8 7 6 5 4 3
//             if (a[i] % j == 0){
//                                 return false 
//             }
//         }
//     }
//     return true
// }
// console.log(mul([2,9]));

// 11
// //mul
// function mul(a,b){
//     let arr = []
//     a.forEach((e,i)=>{ 
//         e.forEach((e)=>{
//             if(e==b){ 
//                 arr.push(i)
//             }
//         })
//     })
//     return arr;
// }
// console.log(mul([[1,2],[1,2]],2));

// 12
// mul
// function mul(a){
//     return a.every((e,i)=> e == i)
// }

// 13
// function random(n,min,max){
//     let arr = []
//     for (let i = 0 ; i < n ; i++){
//         arr.push( Math.floor(Math.random() * (max - min + 1)) + min)
//     }
//     return arr
// }
// console.log(random(10,1,10));


// 14
//mul
// function mul(a){
//     let n = 0
//     a.map((e)=> n++)
//     return n
// }


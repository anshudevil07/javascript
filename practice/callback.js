// // let him=()=>{
// //     console.log("i am called");
// // }
// // setTimeout(him,3000)

// function sum(a,b){
//     return a+b;
// }

// function sumx(a,b,sum){
//     return sum(a,b);
// }

// console.log(sumx(9,8,sum))


// function a (a){
//     return function b(b){
//         return function c(c){
//             return function d(d){
//                 return a+b+c+d;
//             }
//         }
//     }
// }
// console.log(a(3)(4)(4)(5))


// function A(callback){
//     setTimeout(()=>{
//         console.log("It A is called ");
//         callback();
//     })
// }
// function B(callback){
//     setTimeout(()=>{
//         console.log("It B is called ");
//         callback()
//     })
// }
// function C(callback){
//     setTimeout(()=>{
//         console.log("It C is called ");
//         callback();
//     })
// }

// A(()=>{
//     B(()=>{
//         C(()=>{
//             console.log("All step done");
//         })
//     })
// })


// let promise= new Promise((res,rej)=>{
//     console.log("It is resolved")
//     res("it is resolved")
// });

// promise.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//  console.log(err)
// })

function him2() {
  return new Promise(resolve => {
    console.log("before await");
    setTimeout(resolve, 2000);
  });
}

async function him() {
  await him2();             // ← actua`lly pauses here for 2 s
  console.log("after await");
}

him();

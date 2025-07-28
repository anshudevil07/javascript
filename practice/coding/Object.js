// let obj={
//     name:'Himanshu',
//     age:'23',
// }
// obj.rollNo=23;
// console.log(obj)

// delete obj.age;
// console.log(obj)




//sum 
const func=(arr)=>{
   let ans=arr.reduce((prev,next)=>{
         return prev+next
   })
   return ans;
}


const func1=(arr)=>{
    let ans=arr.map((i)=>{
        return i*10;
    })
    return ans
}

console.log(func1)
const func3=(arr)=>{
   let ans= arr.filter((val)=>{
    return val>5;
   })
   return ans
}
let arr =[1,3,7,5,8,7];
console.log(func3(arr))
let arr1 = [32, 45, 65];
let arr2 = [43, 65, 34,45];
const set2=new Set(arr2);
let ans=arr1.filter((val)=>{
    return val=set2.has(val)
})
console.log(ans)


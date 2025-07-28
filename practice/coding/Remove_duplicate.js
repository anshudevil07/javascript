// let arr=[5, 2, 5, 6, 6, 7];
// let arr1=[...new Set([...arr])];
// console.log(arr1)




let arr=[5, 2, 5, 6, 6, 7];
let arr1=[]
for(let i=0;i<arr.length;i++){
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i]);
    }
}
console.log(arr1)
// let n=7;

// let first=0;
// let second=1;
// let line=`${first}  ${second} ` 
// for(let i =0 ;i<n;i++){
//     let sum=first+second;
//     line+=` ${sum} `
//     first=second;
//     second=sum;
// }
// console.log(line)


//second method

function func(n){
    if(n<2){
    return n;
    }
    return func(n-1)+func(n-2);
    
}

let n=7;
let arr=[]

for(let i=0 ;i<=n;i++){
    arr.push(func(i));
}
console.log(arr);
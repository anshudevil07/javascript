let arr=[99, 5, 3, 100, 1]
let max=arr[0];
 for(let i=1 ;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
 }
 console.log(max)



 //Second method
 let ans= Math.max(...arr);
 console.log(ans)

 
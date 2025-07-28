let arr=[1, 2, 90, 10, 110];
let diff=0;
for(let i=0 ; i<arr.length;i++){
    for(let j=i+1 ;j<arr.length;j++){
        if((arr[j]-arr[i])>diff){
            diff=arr[j]-arr[i];
        }
    }
}
console.log(diff)
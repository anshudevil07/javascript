let arr=[1, 1, 2, 3, 3, 4]
const freq={};
for(let i =0 ; i<arr.length;i++){
     if(freq[arr[i]]){
        freq[arr[i]]+=1;
     }else{
        freq[arr[i]]=1;
     }
}
console.log(freq)
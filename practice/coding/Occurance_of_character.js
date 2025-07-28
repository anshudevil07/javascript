// let string="Himanshu is the best"
// let s="s";
// let count=0
// for(let i=0 ; i<string.length;i++){
//     if(string[i]==s){
//         count++;
//     }
// }
// console.log(count);






// Now i am doint each character occurance
let string="Himanshu is the best"

const freq={}
for(let i=0 ; i<string.length;i++){
   if(freq[string[i]]){
    freq[string[i]]+=1;
   }else{
    freq[string[i]]=1
   }
}
console.log(freq)

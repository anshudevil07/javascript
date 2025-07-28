// let s="my name is himanshu";
// let s1=""
// s1+=s[0].toUpperCase();
// for(let i=1 ; i<s.length;i++){
//     if(s[i-1]==" "){
//         s1+=s[i].toUpperCase();
//     }else{
//  s1+=s[i];
//     }
   

// }
// console.log(s1);




//second method
let s="my name is himanshu";

let s1=s.split(' ');
for(let i=0 ;i<s1.length;i++){
    s1[i]=s1[i].charAt(0).toUpperCase()+s1[i].slice(1);
}
console.log(s1.join(" "));
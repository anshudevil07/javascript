let s="GeeksForGeeks is greatsdsdskdsksds";
// let count=0;
// let max=0;
// let s1="",s2=""

// for(let i=0 ;i<s.length;i++){
//     if(s[i]==" "){
//      if(max<count){
//         max=count;
//         s2=s1
        
//      }
//      count=0;
//      s1="";
//     }
//     s1+=s[i];
//     count++;
// }

//  if(max<count){
//         max=count;
//         s2=s1
        
//    }
// console.log(s2);




//2 method

let words=s.split(' ')
let longestword="";

for(let word of words ){
    if(word.length>longestword.length){
        longestword=word
    }
}
console.log(longestword)
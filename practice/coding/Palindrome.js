let s="himih"
let j=s.length-1;
let i=0

//1 method

// let flag=false;
// while(i<=j){
//    if(s[i]!==s[j]){
//     flag=true;
     
//    }
//    i++;
//    j--;
// }
// if(flag){
//     console.log("it is not")
// }else{
//     console.log("it is palindrome")
// }


let rev= s.split('').reverse().join("");
if(s==rev){
    console.log("it is palindrome")
}else{
    console.log("it is not palindrome")
}

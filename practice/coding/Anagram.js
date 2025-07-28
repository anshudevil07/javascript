// function func(arr){
//     for(let i=0 ; i<arr.length;i++){
//         for(let j=i+1 ;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let swap=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=swap;
//             }
//         }
//     }
//     return arr;
// }


// let s1="silent"
// let s2="listen";

// if(s1.length!==s2.length){
//     console.log("It is not anagram");
//     return;
// }
// let ans1=s1.split("")
// let ans2=s2.split("")

// let arr1=func(ans1);
// let arr2=func(ans2);



// let final1=arr1.join("");
// let final2=arr2.join("");

// if(final1==final2){
//     console.log("It is anagram")
// }else{
//     console.log("It is not anagram")
// }







let s1="silent"
let s2="listen";

let ans1=s1.split("").sort().join("");
let ans2=s2.split("").sort().join("");

if(ans1===ans2){
    console.log("it is anagram")
}else{
    console.log("It is not anagram")
}



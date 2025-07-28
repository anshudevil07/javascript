// const objectt={
//     name:"himanshu",
//     age: 36,
//     roll_No:432
// }
// console.log(objectt["age"]);

// //objectt obj= new objectt();
// console.log(objectt.age); 



// let print= document.getElementById("id3");
// btn.addEventListener('click',()=>{
//     let number= document.getElementById("input");
// let num=parseInt(number.value)
// if (num % 5 == 0) {
//     print.innerText="It is multple of 5";
//     console.log("It is multiple of 5");
// } else {
//     print.innerText="It is not multple of 5";
//     console.log("It is not");
// }
// })





//let btn= document.getElementById("btn");


//  let print= document.getElementById("id3");
// let  num=25;
// let user=prompt("Enter the correct number");

// while(num!=user){
//     user=prompt("Enter the correct number");
// }
// print.innerText="Congratulation ,you guess the correct";
// console.log("congratulation ,you guess the correct ")


// let title = 'JavaScript Advanced String Handling';
// let slug = title.toLowerCase().replaceAll(" ", '-');
// console.log(encodeURI(slug)); // Output: 'javascript-advanced-string-handling'

// let str = 'Hello, World! 123.';
// let str1="";

// let ans=str.replace(/[^a-zA-Z0-9]/g,'');
// console.log(ans)


// let sentence = 'make javascript great again';
// let s="";

// for(let i=0 ; i<sentence.length;i++){
//   if(i==0 ){
//    s+=sentence[i].toUpperCase();
   
//   }else if(sentence[i-1]==" "){
//     s+=sentence[i].toUpperCase();
//     j
    
//   }else{
//     s+=sentence[i];
//   }
// }
// console.log(s)


let csvString = 'apple, ,banana,,orange,,';

let arr = csvString.split(','); // split by comma


let newarr = arr
  .map(item => item.trim())        
  .filter(item => item !== '');    
console.log(newarr); 



const a=document.getElementById('first')
const arr=["himanshu","Rahul","Ajay","Priya"]

let i=0;
a.addEventListener('click',()=>{
    if(i===arr.length){
        i=0;
    }
   a.innerHTML=arr[i];
   i++;
   
})
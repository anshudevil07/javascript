const prime=(num)=>{
   let flag=false;

   for(let i =2;i*i<num;i++){
    if(num%i==0){
        flag=true;
        break;
    }
   }
   if(flag){
    console.log("it is  not aprime");
   }else{
    console.log("Its is  prime")
   }
}



let num = 3;
prime(num)

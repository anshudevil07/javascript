class him{
    name='himanshu'
    age=21
     himu=()=>{
      let s="i am himanshu";
       return s;
    }
}

class rahul extends him{
    
    name='rahul'
    age=23
     rahu=()=>{
      console.log("i am rahul");

    }


}

let himu= new him();
//console.log(himu.name,himu.himu());

let rah=new rahul();
console.log(rah.himu())


let hour1=document.getElementById("hour")
const minute=document.getElementById("minute")
const second=document.getElementById("second")
const am=document.getElementById("am")

function update(){
    let date=new Date();
     
    let hour=String(date.getHours()).padStart(2,"0");
    //console.log( hour)
    hour1.innerHTML=hour;    
    minute.innerHTML=String(date.getMinutes()).padStart(2,"0");
    second.innerHTML=String(date.getSeconds()).padStart(2,"0");
    console.log( hour)

    
    if(hour>=12){
        if(hour<24){
          am.innerHTML="pm"
        }
    }else{
        am.innerHTML="am"
    }

}


setInterval(update,1000)
update();




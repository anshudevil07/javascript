let game=document.querySelectorAll(".game")
let player1=document.getElementById("1");
let player2=document.getElementById("2");

game.forEach((box,inx)=>{
    box.addEventListener('click',()=>{
     let num= Math.floor(Math.random()*3);
     console.log(num);

        if(inx==0){
         if(inx==num){
           console.log("draw");
        }
        if(inx==0 && num==2){
            player2.innerText=+player2.innerText+1;
            console.log("player 2 won the match")
        }
        if(inx==0 && num==1){
            player1.innerText=+player1.innerText+1;
            console.log("player 1 won the match")
        }


          console.log("click stone")

        }else if(inx==1){
         if(inx==num){
           console.log("draw");
        }
        if(inx==1 && num==2){
            player1.innerText=+player1.innerText+1;
            console.log("player 1 won the match")
        }
        if(inx==1 && num==0){
            player2.innerText=+player2.innerText+1;
            console.log("player 2 won the match")
        }

             console.log("click Scissor")
         


        }else if(inx==2){
            if(inx==num){
           console.log("draw");
        }
        if(inx==2 && num==0){
            player1.innerText=+player1.innerText+1;
            console.log("player 1 won the match")
        }
        if(inx==2 && num==1 ){
            player2.innerText=+player2.innerText+1;
            console.log("player 2 won the match")
        }
             console.log("click paper")
        }

      
    })
})
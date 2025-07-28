let boxes=document.querySelectorAll(".box");
let reset= document.getElementById("btn");
let winMessage = document.getElementById("winner-message");
let chance=true;
let winner =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("clicked")
        if(box.disabled){
            return;
        }
        if(chance){
            box.innerText="X";
            chance=false;
        }else{
            box.innerText="0"
            chance=true;
        }
        box.disabled=true;
     checkWinner();
    })
   
   
})


const  checkWinner=()=> {
    for (let pattern of winner) {
       let position1=boxes[pattern[0]].innerText;
       let position2=boxes[pattern[1]].innerText;
      let position3=boxes[pattern[2]].innerText;
 
if(position1!=="" && position2!=="" && position3!==""){
    if(position1==position2 && position2==position3){
        console.log("winner");
        winMessage.innerText = `Congratulations, ${position1} has won the `
    }
}


}
}
reset.addEventListener('click', () => {
    
    boxes.forEach(box => {
        box.innerText = "";      
        box.disabled = false; 
         winMessage.innerText=""   
    });
    
    chance = true;
});


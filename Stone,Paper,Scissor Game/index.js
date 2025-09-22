let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let img3=document.querySelector(".img3");







img1.addEventListener("mouseover",()=>{
    // console.log("mouse on img 1")
    img1.style.border="5px solid #a2cfdc"
})
img1.addEventListener("mouseout",()=>{
    // console.log("mouse out img 1")
    img1.style.border="5px solid #f1ecc0"
})
img1.addEventListener("click",()=>{
    // console.log("Rock is clicked")
    img1.style.border="5px solid  #3E5879"
    setTimeout(()=>{
        img1.style.border="5px solid #a2cfdc"
    },100)
})




img2.addEventListener("mouseover",()=>{
    // console.log("mouse on img 2")
    img2.style.border="5px solid #a2cfdc"
})
img2.addEventListener("mouseout",()=>{
    // console.log("mouse out img 2")
    img2.style.border="5px solid #f1ecc0"
})
img2.addEventListener("click",()=>{
    // console.log("ROck is clicked")
    img2.style.border="5px solid  #3E5879"
    setTimeout(()=>{
        img2.style.border="5px solid #a2cfdc"
    },100)
})




img3.addEventListener("mouseover",()=>{
    // console.log("mouse on img 3")
    img3.style.border="5px solid #a2cfdc"
})
img3.addEventListener("mouseout",()=>{
    // console.log("mouse out img 3")
    img3.style.border="5px solid #f1ecc0"
})
img3.addEventListener("click",()=>{
    // console.log("ROck is clicked")
    img3.style.border="5px solid  #3E5879"
    setTimeout(()=>{
        img3.style.border="5px solid #a2cfdc"
    },100)
})




let userScore=0;
let comScore=0;
let draw=0;

const choices=document.querySelectorAll(".img1,.img2,.img3");


const gencomChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const playGame=(userChoice)=>{
    console.log("userChoice =",userChoice);
    const comChoice=gencomChoice();
    console.log("comChoice =",comChoice);
    document.getElementById("comChoice").innerText="Computer Choice :" +comChoice;
    // let com=document.getElementById(comChoice).style.border="5px solid rgb(0, 0, 0)";

    

    if(userChoice===comChoice){
        console.log("Match Draw")
        draw++;
        document.getElementById("draw").innerText="draw :" +draw;
    }
   else{
           if((userChoice==='Rock' && comChoice==='Scissor' )|| (userChoice==='Paper' && comChoice==='Rock' )||( userChoice==='Scissor' && comChoice==='Paper')){
                   console.log("User wins");
                   userScore++;
               document.getElementById("userScore").innerText="userScore :" +userScore;
           }
           else{
               console.log("computer wins");
               comScore++;
               document.getElementById("comScore").innerText="comScore :" +comScore;
            }
           }
               
   }

    
           
        


    

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        document.getElementById("yourChoice").innerText="Your Choice :" +userChoice;
        
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
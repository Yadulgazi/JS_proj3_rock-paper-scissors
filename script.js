

let el = document.querySelectorAll(".imga");
let h2 = document.querySelector("h2");
let msg = document.querySelector(".msg");


let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#com-score");
let usc=0;
let comsc=0;

const comp = () =>{
    const opt= ["rock", "paper" , "scissor"];

    const ranch= Math.floor(Math.random()*3);

    return opt[ranch];
    

    
}



const showwinner = (userwin) =>{
    if(userwin){
        h2.innerText="YOu're Win!!!";
        h2.style.color="green";
        usc++;
        userscore.innerText=usc;

        
    }else {
        h2.innerText="You're Lose!!!";
        h2.style.color="red";
        comsc++
        compscore.innerText=comsc;
        
    }
}



const playGame = (userch) =>{

    const compch = comp();
    msg.innerText=`You're ${userch} VS computer's ${compch}`

   
    


    if(userch === compch){
        h2.innerText=" Game is Draw!";
        h2.style.color="black"
 
    }else{

        let userwin = true;

        if(userch=="rock"){
            userwin = compch =="paper" ? false : true;
        }
        else if(userch =="paper"){
            userwin = compch == "scissor" ? false : true;
        }
        else{
            userwin = compch == "rock" ? false : true;
        }
        showwinner(userwin);

        
        
    }

    
    
    
    
    
    
}


el.forEach((imga)=> {

    imga.addEventListener("click", ()=>{

        const userch = imga.getAttribute("id");
        playGame(userch);
        
    })

}) 
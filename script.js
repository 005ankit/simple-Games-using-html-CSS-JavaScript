const choice = document.querySelectorAll(".choice");
const msg=document.querySelector(".msgp");
const userres=document.querySelector('#userscore');
const compres=document.querySelector('#compscore')

let userscore=0;
let compscore=0;

const computer = () => {
  const arr = ["Stone", "Paper", "Scissor"];
  let cchoise = Math.floor(Math.random() * 3);
  let comp = arr[cchoise];
  return comp;
};

const win=(user,comp)=>{
  
  if(user===comp){
    msg.innerText='Match is Draw';
  }
  else{
    let userwin=true;
    if(user==='Stone'){
      userwin=comp==='Paper' ? false:true;
    }
    else if(user==='Paper'){
      userwin=comp==='Scissor' ? false:true;
    }
    else{
      userwin=comp==='Stone' ? false:true;
    }

    if(userwin){
      msg.innerText='Congractulations You Win';
      userscore++;
    }
    else{
      msg.innerText='Bad Luck You lose';
      compscore++;
    }
  }
}
choice.forEach((ch) => {
  ch.addEventListener("click", () => {
    const user = ch.getAttribute("id");
    win(user,computer());
    userres.innerText=userscore;
    compres.innerText=compscore;
  });
});

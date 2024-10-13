let btn = document.querySelectorAll(".btn");
let btnr = document.querySelector(".btnreset");
let msg1 = document.querySelector(".msg");
let btnre = document.querySelector(".btnre");
let iv = "O";
let pat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
const all = () => {
 
  return Array.from(btn).every(btn1 => btn1.disabled === true);
};
const check = () => {
  if (all()) { 
    document.querySelector(".cong").innerText = `Restart...`;
    document.querySelector(".win").innerText = `Match is draw`;
    btnr.disabled = true; 
    msg1.style.display = "block"; 
}
  for (let patt of pat) {
    let place1 = btn[patt[0]].innerText;
    let place2 = btn[patt[1]].innerText;
    let place3 = btn[patt[2]].innerText;
   
    if (place1 !== "" && place2 !== "" && place3 !== "") {
      
      if (place1 === place2 && place2 === place3) {
        document.querySelector(".win").innerText = `Winner is ${place1}`;
        btn.forEach((btn1) => {
          btn1.disabled = true;
        });
        btnr.disabled = true;
        msg1.style.display = "block";
      }
    }
  }
};
btn.forEach((btn1) => {
  btn1.addEventListener("click", () => {
    if (iv === "O") {
      btn1.innerText = "X";
      iv = "X";
      btn1.disabled = true;
    } else {
      btn1.innerText = "O";
      iv = "O";
      btn1.disabled = true;
    }
    check();
  });
});
const dis = () => {
  for (let btn1 of btn) {
    btn1.disabled = false;
    btn1.innerText = "";
  }
};
btnr.addEventListener("click", dis);
btnre.addEventListener("click", () => {
  msg1.style.display = "none";
  btnr.disabled = false;
  dis();
});

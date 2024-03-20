const input=document.getElementById("form")
const price=document.getElementsByClassName("plan__item--price")
const plan=document.querySelectorAll(".plan__text--time ")



function scrollWin(x) {
    window.scrollTo(0, x);
    tran
  }

function changeSize(){
    plan.forEach(size=>size.classList.remove('active'));
    this.classList.add('active')
    console.log(1)
}

plan.forEach(size=> size.addEventListener('click',changeSize));

input.addEventListener('focus',(event)=>{
    event.target.classList.add("active")
    const path =event.composedPath();
    path[1].classList.add("active")
},true);

input.addEventListener('blur',(event)=>{
    event.target.classList.remove("active")
    const path =event.composedPath();
    path[1].classList.remove("active")
},true);


let div = document.getElementById("prog");
const text = document.getElementById('statusTxt')
let btn = document.getElementById("btn")
div.style.width = "0%";

function breathOut() {
  div.style.width = "100%";

  let animateWidth = setInterval(frame, 80);
  
  function frame() {

    let width = parseInt(div.style.width);
  
    if (width <= 0) {
      clearInterval(animateWidth);
    } else {
      div.style.width = (width - 1) + "%";
    }
  }
  text.innerText='Breath-Out';
    // console.log("breath-out");
    setTimeout(() => {    
    }, 8000);
}

function breathIn() {
  
  let animateWidth = setInterval(frame, 40);

  function frame() {
  let width = parseInt(div.style.width);

  if (width >= 100) {
    clearInterval(animateWidth);
  } else {
    div.style.width = (width + 1) + "%";
  }

  }

    // console.log("breath-in");
    text.innerText='Breath-In';
    setTimeout(() => {
        breathOut()
    }, 4000);
  }
  btn.addEventListener('click', () => {
    breathIn()
    setInterval(() => {
      breathIn()
    }, 12000)
  })

  
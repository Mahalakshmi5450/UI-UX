let divOne = document.getElementById('div1');
let btnOne = document.getElementById('btn1');

let divTwo = document.getElementById('div2');
let btnTwo = document.getElementById('btn2');

btnTwo.addEventListener('click', toggleDiv2);

function toggleDiv1() {

  if(divOne.style.display==="none") {
    divOne.style.display="block";
  }
else {
  divOne.style.display="none";
}

};

function toggleDiv2() {

  if(divTwo.style.visibility==="visible") {
  divTwo.style.visibility="hidden";
  console.log('hidden')
  }
else {
  divTwo.style.visibility="visible";
  console.log('visible')
}

};

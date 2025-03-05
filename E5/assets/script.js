
let box1 = document.getElementById('box1')

//Text Input ------------------------------

let textInput1 = document.getElementById('textInput1');
let textInput2 = document.getElementById('textInput2');

function displayTextValue() {
    box1.innerText = "Dear" + " " + textInput1.value + "," + " " +textInput2.value;
}

//Number Input ------------------------------

let numInput = document.getElementById('numberInput1');

function numberValue() {
    box1.innerText = "Dear" + " " + textInput1.value + "," + " " +textInput2.value + numInput.value*"!";

}


//Radio Buttons ------------------------------

let serif = document.getElementById('radioSerif');
function changeFontSerif() {
    box1.style.fontFamily = serif.value;
}

let sans = document.getElementById('radioSans');
function changeFontSans() {
    box1.style.fontFamily = sans.value;
}

let mono = document.getElementById('radioMono');
function changeFontMono() {
    box1.style.fontFamily = mono.value;
}


//Slider Text Size ------------------------------

let sizeSlider = document.getElementById('slider');

function adjustSize() {
    box1.style.fontSize = sizeSlider.value + "px"
}


//Slider RGB ------------------------------

function adjustColor() {

let R = document.getElementById('R').value;
let G = document.getElementById('G').value;
let B = document.getElementById('G').value;

box1.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";

}


//Dropdown Colours ------------------------------

function chooseColor() {
    let dropdown = document.getElementById('dropdown');
    box1.style.color = dropdown.value;
}

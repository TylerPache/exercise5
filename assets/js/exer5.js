/* Tyler Pache --> */
/* 2/27/2019 */
/* ISTE 240 Exercise5 - CSS */

function jsStyle() {
    // function to change style
    // Change the color and the size of the font
    // in the paragraph with id='text'
    "use strict";
    var paragraph = document.getElementsByTagName('p')[0].innerHTML;
    document.getElementById('text').removeChild(document.getElementsByTagName('p')[0]);
    var node = document.createElement("p");
    node.innerHTML = paragraph;
    node.style.color = "red";
    node.style.fontSize = "xx-large";
    document.getElementById('text').appendChild(node);
}

function getFormValues() {
    // function to send first and last names
    // to an 'alert' message.
    "use strict";
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    alert(fname + " " + lname);
}

function getOptions() {
    // function to display the number of options in an alert()
    "use strict";
    var option = document.getElementById("mySelect").value;
    alert(option);
}

//create a function that is called on the mouseover that turns the text red
function mouseOver() {
    "use strict";
    document.getElementById("rb").style.color = "red";
}
//create a function that is called on the mouseout that turns the text black
function mouseOut() {
    "use strict";
    document.getElementById("rb").style.color = "black";
}

// code to divide two numbers
function divide() {
    "use strict";
    var x = document.getElementById('firstoperand').value;
    var y = document.getElementById('secondoperand').value;
    var res = x / y;
    document.getElementById("result").innerHTML = res;
}
// code to multiply two numbers
function multiply() {
    "use strict";
    var x = document.getElementById('firstoperand').value;
    var y = document.getElementById('secondoperand').value;
    var res = x * y;
    document.getElementById("result").innerHTML = res;

}

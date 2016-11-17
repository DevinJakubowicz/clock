document.getElementById("myClock").addEventListener("load", DevinsClock)


function DevinsClock() {


	var today = new Date();

	var hour = today.getHours();

	var min = today.getMinutes();

	var sec = today.getSeconds();

if(hour <= 9) hour = '0'+hour;

if(min <= 9) min = '0'+min;

if(sec <= 9) sec = '0'+sec;

var color = "#"+hour+min+sec;

document.body.style.background = color;

document.getElementById("clock").innerHTML = color;

setTimeout(DevinsClock, 1000);

document.getElementsByTagName("h1")[0].innerText = color;

}


DevinsClock()





// document.getElementById("myClock").addEventListener("load", DevinsClock)


// function DevinsClock() {

// 	var today = new Date();

// 	var hour = today.getHours();

// 	var min = today.getMinutes();

// 	var sec = today.getSeconds();

// changeBackground(hour, min, sec);

// min = checkTime(min);

// sec = checkTime(sec);

// document.getElementById("clock").innerHTML = hour+ ":" min+ ":" +sec;

// setTimeout(function(){startTime()}, 100);

// }

// function changeBackground(hour,min,sec){

// var totalMins = (hour * 60) + min;

// var huecolor = totalMins * 0.25;

// var saturation = min + 10;

// var lightness = sec + 5;

// document.body.style.backgroundColor= "hsl(" + huecolor + ", " + saturation + "%, " + lightness + "%)";

// }

// DevinsClock()

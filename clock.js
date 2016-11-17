function startTime() {

	var today = newDate();

	var hours = today.getHours();

	var mins = today.getMinutes();

	var secs = today.getSeconds();

changeBackground(hours, mins, secs);

mins = checkTime(mins);

secs = checkTime(secs);

document.getElementsByClassName("clock")[0].innerHTML = hours+":"mins+":"+secs;

setTimeout(function(){startTime()}, 100);

}

function changeBackground(hours,mins,secs){

var totalMins = (hours * 60) + mins;

var huecolor = totalMins * 0.25;

var saturation = mins + 10;

var lightness = secs + 5;

document.body.style.backgroundColor= 



}

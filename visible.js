const btn = document.getElementById('noBtn');
const noReminder = document.querySelector('.noReminder');

btn.addEventListener("click" , function(){

noReminder.classList.toggle("noReminderVisible");

});

const noReminderBtn = document.getElementById('ReminderNo');

noReminderBtn.addEventListener("click" , function(){

noReminder.classList.remove("noReminderVisible"); //atong ge reverse ang code to remove it 

});

const ReminderYes = document.getElementById('ReminderYes');
const but = document.querySelector('.but');

ReminderYes.addEventListener("click" , function(){

but.classList.toggle("butVisible");

noReminder.classList.remove("noReminderVisible");


});

const why = document.getElementById('whyBtn');
const ily = document.querySelector(".ily");

why.addEventListener("click" , function(){

ily.classList.toggle("ilyVisible");
but.classList.remove("butVisible");

});

const andBtn = document.getElementById('andBtn');
const pangarap = document.querySelector('.pangarap');
const PangarapMP3 = document.getElementById("pangarapmp3");



andBtn.addEventListener("click" , function(){
PangarapMP3.play();
PangarapMP3.loop = true;


pangarap.classList.toggle("pangarapVisible");
ily.classList.remove("ilyVisible");

});

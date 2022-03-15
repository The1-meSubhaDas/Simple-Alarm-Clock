console.log("Alarm");
let audio = new Audio("ringbell.wav");

let alarmSet = document.getElementById("alarmSet");
alarmSet.addEventListener("click", setAlarm);

function setAlarm(e){
    e.preventDefault();
    let alarm = document.getElementById("alarm");
    alarmDate = new Date(alarm.value);
    console.log(`Your Alarm Is Set for.... ${alarmDate}`);
    let now = new Date();
    console.log(now);
    let remainingTime = (alarmDate - now);
    console.log(remainingTime);

    if(remainingTime >= 0){
        setTimeout(() => {
           jingleBell(); 
        }, remainingTime);

        
    }
    
}
function jingleBell(){
    audio.play();
};

let alarmStop = document .getElementById("alarmStop");

alarmStop.addEventListener("click", stopAlarm);
    function stopAlarm (e){
    e.preventDefault();
    audio.pause();
    
}
const time = document.querySelector(".time")


function addTime() {
    const displayTime = new Date().toLocaleTimeString()
    time.innerHTML = displayTime;
}
addTime();
setInterval(addTime, 1000);
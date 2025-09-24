function updateTime(){
		let time = document.getElementById("time");
		const currentTime = new Date;
		const showTime = currentTime.toLocaleTimeString();
		time.textContent = showTime;
		time.setAttribute("style", `top : ${Math.random() *80}%; left: ${Math.random() *80}%; color: hsl(${Math.random()*365}deg, 75%, 75%)`);
		}
		updateTime();
		setInterval(updateTime, 1000);
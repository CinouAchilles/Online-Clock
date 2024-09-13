function update(){
    let now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    let am_pm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12 ;
    let minuts = now.getMinutes().toString().padStart(2,0);
    let sec = now.getSeconds().toString().padStart(2,0);
    let full_time = `${hours}:${minuts}:${sec} ${am_pm}`;
    document.getElementById("timer").textContent = full_time;
}

update();
setInterval(update,1000);
function updateClock() {
    const clockElement = document.getElementById('clock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    clockElement.innerText = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();

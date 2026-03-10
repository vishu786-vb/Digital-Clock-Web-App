const clockElement = document.getElementById('clock');
const formatToggle = document.getElementById('format-toggle');
const toggleLabel = document.querySelector('.toggle-label');

let is24HourFormat = true;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
    }

    const formattedHours = String(hours).padStart(2, '0');

    clockElement.textContent = `${formattedHours}:${minutes}:${seconds}${ampm}`;
}

formatToggle.addEventListener('change', () => {
    is24HourFormat = !is24HourFormat;
    toggleLabel.textContent = is24HourFormat ? '24-Hour Format' : '12-Hour Format';
    updateTime();
});

setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

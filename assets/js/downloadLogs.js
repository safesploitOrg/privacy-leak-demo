// assets/js/downloadLogs.js
function downloadLogs() {
    const deviceInfo = document.getElementById('device-info').textContent;
    const browserInfo = document.getElementById('browser-info').textContent;
    const networkInfo = document.getElementById('network-info').textContent;

    const logData = `Device Information:\n${deviceInfo}\n\nBrowser Information:\n${browserInfo}\n\nNetwork Information:\n${networkInfo}`;
    
    const blob = new Blob([logData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ip-leak-logs.txt';
    link.click();
}

// Add this to the button in `main.js` if you want a "Download Logs" button
document.getElementById("download-logs").addEventListener("click", downloadLogs);

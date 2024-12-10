// assets/js/publicIP.js
function collectPublicIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log('Public IP Address: ', data.ip);
            document.getElementById("network-info").textContent += "\nPublic IP: " + data.ip;
        })
        .catch(error => console.error('Error fetching IP:', error));
}

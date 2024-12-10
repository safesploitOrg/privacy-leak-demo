// assets/js/batteryInfo.js
function collectBatteryInfo() {
    if ('getBattery' in navigator) {
        navigator.getBattery().then(function(battery) {
            const batteryInfo = {
                level: (battery.level * 100).toFixed(0) + '%',
                charging: battery.charging ? 'Charging' : 'Not Charging',
                chargingTime: battery.chargingTime === Infinity ? 'Unknown' : battery.chargingTime + ' seconds',
                dischargingTime: battery.dischargingTime === Infinity ? 'Unknown' : battery.dischargingTime + ' seconds'
            };
            document.getElementById("battery-info").textContent = JSON.stringify(batteryInfo, null, 2);
        });
    } else {
        document.getElementById("battery-info").textContent = "Battery Info: Not available";
    }
}

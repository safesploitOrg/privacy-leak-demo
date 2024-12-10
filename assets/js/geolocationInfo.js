// assets/js/geolocationInfo.js
function collectGeolocationInfo() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const geoInfo = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy + " meters"
            };
            document.getElementById("geolocation-info").textContent = JSON.stringify(geoInfo, null, 2);
        }, function(error) {
            document.getElementById("geolocation-info").textContent = "Geolocation Info: Error retrieving location";
        });
    } else {
        document.getElementById("geolocation-info").textContent = "Geolocation Info: Not available";
    }
}

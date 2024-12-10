// Attempting to get the local IP by querying localhost
function getLocalIPAddress() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:80", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Local IP address accessed via localhost: ', xhr.responseText);
            // Output to the HTML
            document.getElementById("local-ip-info").textContent = "Local IP accessed via localhost: " + xhr.responseText;
        } else {
            document.getElementById("local-ip-info").textContent = "Failed to access local IP.";
        }
    };
    xhr.onerror = function () {
        document.getElementById("local-ip-info").textContent = "Error fetching local IP.";
    };
    xhr.send();
}

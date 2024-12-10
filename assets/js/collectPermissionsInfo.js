// assets/js/collectPermissionsInfo.js
// assets/js/collectPermissionsInfo.js
function collectClipboardPermission() {
    // Check clipboard read permission
    navigator.permissions.query({ name: 'clipboard-read' }).then(function(result) {
        const permissionText = "\nClipboard Read Permission: " + result.state;
        document.getElementById("device-clipboard-info").textContent += permissionText;
        
        // If permission is granted, call the clipboard reading function
        if (result.state === "granted") {
            readClipboardContent();
        }
    });

    // Check clipboard write permission
    navigator.permissions.query({ name: 'clipboard-write' }).then(function(result) {
        const permissionText = "\nClipboard Write Permission: " + result.state;
        document.getElementById("device-clipboard-info").textContent += permissionText;
    });
}

// Function to read clipboard content
function readClipboardContent() {
    if (navigator.clipboard) {
        navigator.clipboard.readText()
            .then(function(text) {
                console.log('Clipboard Content: ', text);
                // Output the clipboard content to the HTML
                document.getElementById("device-clipboard-info").textContent += "\nClipboard Content: " + text;
            })
            .catch(function(err) {
                console.error('Failed to read clipboard contents: ', err);
                document.getElementById("device-clipboard-info").textContent += "\nError reading clipboard content.";
            });
    } else {
        document.getElementById("device-clipboard-info").textContent += "\nClipboard API not supported.";
    }
}



function collectPermissionsInfo() {
    navigator.permissions.query({ name: 'geolocation' }).then(function(result) {
        document.getElementById("device-info").textContent += "\nGeolocation Permission: " + result.state;
    });

    navigator.permissions.query({ name: 'camera' }).then(function(result) {
        document.getElementById("device-permissions-info").textContent += "\nCamera Permission: " + result.state;
    });

    navigator.permissions.query({ name: 'microphone' }).then(function(result) {
        document.getElementById("device-permissions-info").textContent += "\nMicrophone Permission: " + result.state;
    });
}
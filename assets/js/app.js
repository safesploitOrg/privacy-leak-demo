// assets/js/main.js
document.getElementById("collect-info").addEventListener("click", function() {
    collectPublicIP();
    // Device Info
    collectDeviceInfo();
    // collectBrowserAndOSInfo();
    collectDeviceMotionOrientation();
    collectPermissionsInfo();
    collectClipboardPermission();
    collectHardwareConcurrency();
    // Browser Info
    collectBrowserInfo();
    collectWebRTCIP();
    getLocalIPAddress();
    collectBatteryInfo();
    collectGeolocationInfo();
    collectTimeZoneInfo();
});

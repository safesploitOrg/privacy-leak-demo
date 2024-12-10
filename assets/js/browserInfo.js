// assets/js/browserInfo.js
function collectBrowserInfo() {
    const browserInfo = {
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        vendor: navigator.vendor,
        cookiesEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        onlineStatus: navigator.onLine
    };
    document.getElementById("browser-info").textContent = JSON.stringify(browserInfo, null, 2);
}

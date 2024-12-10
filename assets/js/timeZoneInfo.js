// assets/js/timeZoneInfo.js
function collectTimeZoneInfo() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("timezone-info").textContent = "Time Zone: " + timeZone;
}

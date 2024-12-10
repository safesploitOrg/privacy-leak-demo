// assets/js/webrtcIP.js
function collectWebRTCIP() {
    const rtc = new RTCPeerConnection({ iceServers: [] });
    rtc.createDataChannel('');
    rtc.createOffer().then(offer => rtc.setLocalDescription(offer));

    rtc.onicecandidate = function(event) {
        if (event.candidate) {
            const candidate = event.candidate.candidate;
            if (candidate && candidate.includes('candidate')) {
                // Regex to extract the local IP addresses from the candidate string
                const ipRegex = /(\d{1,3}\.){3}\d{1,3}/g;
                const localIPs = candidate.match(ipRegex);
                if (localIPs) {
                    console.log('Local IP addresses: ', localIPs);
                    document.getElementById("network-info").textContent += "\nLocal IPs: " + localIPs.join(', ');
                }
            }
        }
    };
}

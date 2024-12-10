// assets/js/deviceInfo.js
function collectDeviceInfo() {
    const deviceInfo = {
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
        },
        deviceMemory: navigator.deviceMemory || 'Not available',
        hardwareConcurrency: navigator.hardwareConcurrency || 'Not available'
    };
    document.getElementById("device-info").textContent = JSON.stringify(deviceInfo, null, 2);
}

function collectDeviceMotionOrientation() {
    window.addEventListener("deviceorientation", function(event) {
        const orientationData = {
            alpha: event.alpha, // rotation around z-axis
            beta: event.beta,   // rotation around x-axis
            gamma: event.gamma, // rotation around y-axis
        };
        document.getElementById("device-orientation-info").textContent += "\nDevice Orientation: " + JSON.stringify(orientationData, null, 2);
    });

    window.addEventListener("devicemotion", function(event) {
        const motionData = {
            accelerationX: event.acceleration.x,
            accelerationY: event.acceleration.y,
            accelerationZ: event.acceleration.z,
            rotationRateAlpha: event.rotationRate.alpha,
            rotationRateBeta: event.rotationRate.beta,
            rotationRateGamma: event.rotationRate.gamma,
        };
        document.getElementById("ddevice-orientation-info").textContent += "\nDevice Motion: " + JSON.stringify(motionData, null, 2);
    });
}


function collectHardwareConcurrency() {
    const concurrencyInfo = {
        hardwareConcurrency: navigator.hardwareConcurrency
    };
    document.getElementById("device-hardware-info").textContent += "\nHardware Concurrency (CPU cores): " + JSON.stringify(concurrencyInfo, null, 2);
}

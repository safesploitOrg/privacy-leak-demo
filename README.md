# WebRTC IP Leak Detection and Permissions Check

This project demonstrates the potential for **Browser Information leaks** and provides a Proof of Concept (PoC) for collecting various device and browser-related information, such as local IP addresses, permissions, clipboard contents, and more. It highlights the importance of hardening browsers to protect privacy.

## Disclaimer

This project is a Proof of Concept (PoC) designed to demonstrate the potential risks and privacy concerns associated with WebRTC IP leaks, clipboard access, and other browser-related features. It is **intended solely for educational purposes** to raise awareness about these issues, not for any malicious activity.


## Features

- **WebRTC IP Leak Detection**: Retrieves local IP addresses using WebRTC.
- **Clipboard Permissions**: Checks clipboard read/write permissions and retrieves the clipboard content if granted.
- **Battery Info**: Displays battery level, charging status, and time remaining.
- **Geolocation**: Fetches the user's current geolocation (latitude and longitude).
- **Network Info**: Collects network information such as connection type, download speed, and RTT.
- **Time Zone Info**: Displays the user's time zone.
- **Device Information**: Gathers details about the device, including screen size, hardware concurrency, and platform.
- **Browser Info**: Displays browser-specific details like user agent, cookies enabled, and language.

## Getting Started

**Clone the repository**:
```bash
git clone https://github.com/safesploitOrg/privacy-leak-demo.git
cd privacy-leak-demo
chrome index.html
```


# myTheme-v3 — MikroTik Hotspot Theme

> A modern, responsive, and customizable theme for MikroTik Hotspot captive portals.

- ![!Status](https://img.shields.io/badge/status-active-brightgreen)
- ![!RouterOS](https://img.shields.io/badge/routeros-supported-blue)
- ![!License](https://img.shields.io/badge/license-MIT-yellow)

---

## Table of Contents
- Overview
- Features
- Requirements
- Installation
- Screenshots
- Compatibility
- Troubleshooting
- Acknowledgments
- Support
- FAQ

---

## Overview

`myTheme-v3` is a polished Hotspot theme for MikroTik RouterOS, designed to improve the user experience of captive portal pages (login, status, logout) while remaining lightweight and fully compatible with RouterOS Hotspot variables.

**Key goals:**
- Clean UI for faster login and better status visibility.
- Fully Customized portal (logo, brand colors, wording).
- Minimal dependencies and optimized assets for low-resource environments.

---

## Features

- ✅ Responsive layout for phones, tablets, and laptops  
- ✅ Works with default Hotspot templates (`login.html`, `status.html`, `logout.html`, etc.)  
- ✅ Customizable brand colors, fonts, and logos  
- ✅ Optional Terms of Service modal / page  
- ✅ Simple error handling and variable placeholders (e.g. `$(username)`, `$(host)`)  
- ✅ Lightweight CSS & JS with caching hints
- ✅ Background music for different occasions
- ✅ Well structured file hierarchy for easier management

> **Note:** Replace MikroTik placeholder variables carefully. Keep RouterOS Hotspot variable syntax intact (e.g., `$(mac)`, `$(ip)`, `$(username)`, etc.).

---

## Requirements

- MikroTik device with **Hotspot** configured.
- MikroTik running RouterOS v6.xx
- Mikrotik running RouterOS v7.xx
---

## Installation


---

## Screenshots

> Actual raw and live screenshots

- **Login Page**  
  ![Login Page] (screenshot/login-page.png)

- **Status Page**  
  ![Status Page] (screenshot/status-page.png)

## Compatibility

- **RouterOS:** 6.x and 7.x
- **Hotspot:** Default HTML directory (`hotspot`) or a custom directory set in Hotspot Profile (`myTheme-v3`)
- **Browsers:** Modern browsers (Chrome, Edge, Firefox, Safari, Brave)

---

## Troubleshooting

---

## Acknowledgements

---

## Support

---

## FAQ

- This is an active work and will receive an update from time-to-time. As this captive portal is also the theme that I'm using for my Hotspot Network.
- Not tested on RouterOS v5.xx and below, if you use this theme on -v5.xx router-os and something is broken, there will be no support for fixes. 

---
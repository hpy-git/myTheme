
# myTheme-v3 — MikroTik Hotspot Theme

> A modern, responsive, and customizable theme for MikroTik Hotspot captive portals.

[Status
!RouterOS
!License

---

## Table of Contents
- # Overview
- Features
- Screenshots
- Live Demo
- Compatibility
- Requirements
- Quick Start
- Installation
  - [Method A: Winbox / WebFig (Files)](#method-a-winbox--webfig - Method C: HTML Directory Profile]
- Customization
  - Branding & Assets
  - [Colors, CSS, and Layout](#colors-cssranslations & Legal](#textsap)
- Troubleshooting
- FAQ
- Do’s & Don’ts
- [SecurityNotes
- [Versioning & Release Notes](#versioning--- License)
- Acknowledgments
- Contact & Support

---

## Overview

`myTheme-v3` is a polished Hotspot theme for MikroTik RouterOS, designed to improve the user experience of captive portal pages (login, status, logout) while remaining lightweight and fully compatible with RouterOS Hotspot variables.

**Key goals:**
- Clean UI for faster login and better status visibility.
- Easy customization (logo, brand colors, wording).
- Minimal dependencies and optimized assets for low-resource environments.

---

## Features

- ✅ Responsive layout for phones, tablets, and laptops  
- ✅ Works with default Hotspot templates (`login.html`, `status.html`, `logout.html`, etc.)  
- ✅ Customizable brand colors, fonts, and logos  
- ✅ Optional Terms of Service modal / page  
- ✅ Simple error handling and variable placeholders (e.g. `$(username)`, `$(host)`)  
- ✅ Lightweight CSS & JS with caching hints

> **Note:** Replace MikroTik placeholder variables carefully. Keep RouterOS Hotspot variable syntax intact (e.g., `$(mac)`, `$(ip)`, `$(username)`, etc.).

---

## Screenshots

> Add your images or animated GIFs here.

- **Login Page**  
  ![!Login](https://github.com/hpy-git/myTheme-v3/blob/main/screenshot/Screenshot%202025-11-24%20at%201.43.45%20PM.png?raw=true)

- **Status Page**  
  ![!Status](https://github.com/hpy-git/myTheme-v3/blob/main/screenshot/Screenshot%202025-11-24%20at%201.44.03%20PM.png?raw=true)

- Demo: `<hotspot.crazycloudtv.com>`  
- Video walkthrough: ``

---

## Compatibility

- **RouterOS:** 6.x and 7.x  
- **Hotspot:** Default HTML directory (`hotspot`) or a custom directory set in Hotspot Profile  
- **Browsers:** Modern browsers (Chrome, Edge, Firefox, Safari)

---

## Requirements

- MikroTik device with **Hotspot** configured  

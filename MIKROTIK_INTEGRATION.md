# MikroTik Integration Guide - Tahoe Liquid Glass Theme

This guide walks you through integrating the new macOS Tahoe Liquid Glass theme into your MikroTik RouterOS Hotspot configuration.

## 📋 Prerequisites

- MikroTik RouterOS v6.4x or v7.x
- Hotspot enabled and configured
- SSH or WebFig access to your router
- The glass-theme files downloaded and ready

## 🚀 Installation Steps

### Step 1: Prepare Your Files

1. Download all files from the theme package
2. Keep the folder structure intact:
   ```
   myTheme/
   ├── css/
   │   ├── horizon.css (MAIN - Use this!)
   │   ├── glass-theme.css
   │   ├── CUSTOMIZATION.css
   │   └── others...
   ├── js/
   │   └── javascript.js
   ├── login.html
   ├── status.html
   └── ...
   ```

### Step 2: Upload to MikroTik

#### Via WinBox (GUI)
1. Open WinBox and connect to your MikroTik
2. Go to **Files** menu
3. Navigate to `/ip hotspot` folder or your custom hotspot folder
4. Upload the entire `myTheme` folder
5. Or create a `myTheme` folder and upload files inside

#### Via SSH (Terminal)
```bash
# Connect via SCP
scp -r myTheme/* admin@192.168.88.1:/ip/hotspot/

# Or copy individual files
scp css/horizon.css admin@192.168.88.1:/ip/hotspot/css/
scp css/glass-theme.css admin@192.168.88.1:/ip/hotspot/css/
scp login.html admin@192.168.88.1:/ip/hotspot/
```

### Step 3: Configure Hotspot Profile

#### Method 1: WebFig Interface
1. Go to **IP → Hotspot → Hotspot Profiles** (or **IP → Hotspot → User Profile**)
2. Find your profile (usually "default")
3. Edit and look for **HTML Directory** or **Portal Directory**
4. Set it to: `/ip/hotspot/myTheme/` (adjust path if different)
5. **Apply** changes

#### Method 2: Terminal/SSH
```bash
# Connect via SSH
ssh admin@192.168.88.1

# Go to hotspot profiles
/ip hotspot profile
# Set the path to your theme
set [find name=default] html-directory=/ip/hotspot/myTheme/
```

#### Method 3: Terminal (WinBox)
```
[admin@MikroTik] /ip/hotspot/profile> set 0 html-directory=/ip/hotspot/myTheme/
[admin@MikroTik] /ip/hotspot/profile> print
```

### Step 4: Verify Installation

1. Clear browser cache
2. Connect to your hotspot WiFi
3. Open a new tab and go to any website (auto-redirect)
4. You should see the **Tahoe Liquid Glass** login page! 🎉

## 🎨 Customization for Your Network

### Customizing Text

Edit `login.html`, `status.html`, etc.:

```html
<!-- Find this -->
<h1 class="brand">WiFi Portal</h1>

<!-- Change to -->
<h1 class="brand">My Company WiFi</h1>
```

### Customizing Colors

#### Option 1: Edit CSS Directly
Edit `css/horizon.css`:

```css
:root {
  --primary: #5b7cfa;    /* Change this to your brand blue */
  --accent: #8b5cf6;     /* Or your brand purple */
  --bg-0: #0a1427;       /* Background color */
}
```

#### Option 2: Create Custom CSS
Create `css/custom.css`:

```css
:root {
  --primary: #ff0000;     /* Your brand red */
  --accent: #ffcc00;      /* Your brand yellow */
}
```

Then add to HTML:
```html
<link rel="stylesheet" href="css/horizon.css">
<link rel="stylesheet" href="css/custom.css">
```

### Customizing MikroTik Variables

Common variables to update:

```html
<!-- WiFi Name -->
<p>Connected to: $(link-title)</p>

<!-- User Info -->
<p>Username: $(username)</p>

<!-- Time Remaining -->
<p>Time left: $(session-time-remaining)</p>

<!-- IP Address -->
<p>IP: $(ip)</p>

<!-- MAC Address -->
<p>MAC: $(mac)</p>

<!-- Logout Link -->
<a href="$(link-logout)">Disconnect</a>

<!-- Status/Error Messages -->
$(if error)
    <div class="notice">Error: $(error)</div>
$(endif)
```

## 📝 Required HTML Files for MikroTik

### `login.html` (Login Page)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/horizon.css">
</head>
<body>
    <div class="main">
        <div class="container">
            <h1 class="brand">$(link-title)</h1>
            
            $(if error)
                <div class="notice">
                    ⚠️ $(error)
                </div>
            $(endif)
            
            <form method="post">
                <input type="text" name="username" class="username" 
                       placeholder="Username" required>
                <input type="password" name="password" class="password" 
                       placeholder="Password" required>
                <button type="submit" class="button">Sign In</button>
            </form>
        </div>
    </div>
</body>
</html>
```

### `status.html` (Connected Status Page)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status</title>
    <link rel="stylesheet" href="css/horizon.css">
</head>
<body>
    <div class="main">
        <div class="container">
            <h1 class="brand">Connected</h1>
            
            <div class="wifi-info card">
                <h3 class="card-title">Your Session</h3>
                <p><strong>Username:</strong> $(username)</p>
                <p><strong>IP Address:</strong> $(ip)</p>
                <p><strong>Time Remaining:</strong> $(session-time-remaining)</p>
                <p style="color: #10b981; margin-top: 12px;">✓ Connection Active</p>
            </div>
            
            <button onclick="window.location='$(link-logout)'" class="button" 
                    style="margin-top: 20px;">Disconnect</button>
            <button onclick="window.location='$(link-redirect)'" class="button2" 
                    style="margin-top: 8px;">Back to Web</button>
        </div>
    </div>
</body>
</html>
```

### `logout.html` (Goodbye Page)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logged Out</title>
    <link rel="stylesheet" href="css/horizon.css">
</head>
<body>
    <div class="main">
        <div class="container">
            <h1 class="brand">Disconnected</h1>
            <p style="text-align: center; color: #334155; margin-top: 20px;">
                You have been logged out. Thank you for visiting!
            </p>
            <button onclick="window.location='$(link-redirect)'" class="button" 
                    style="margin-top: 20px;">Continue to Web</button>
        </div>
    </div>
</body>
</html>
```

## 🔐 Security & Best Practices

### Important Notes

1. **HTTPS**: Use HTTPS for your captive portal (if possible)
2. **Backup**: Always backup original files before customizing
3. **Testing**: Test on multiple devices (mobile, tablet, desktop)
4. **Clearing Cache**: Tell users to clear browser cache if seeing old version
5. **File Permissions**: Ensure web server can read all files

### Recommended Setup

```bash
# Via SSH
ssh admin@192.168.88.1

# Backup original hotspot
/file
:copy [find name=hotspot] dst-name=hotspot-backup

# Verify permissions
/ip hotspot
print

# Set correct directory
/ip hotspot profile
set [find] html-directory=/ip/hotspot/myTheme/
```

## 🧪 Testing Checklist

- [ ] Login page loads without errors
- [ ] CSS glass effects visible (buttons, inputs)
- [ ] Form submission works
- [ ] Status page displays correctly
- [ ] Logout functionality works
- [ ] Works on mobile phone
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] Colors display correctly
- [ ] No console errors (F12 DevTools)

## 🐛 Troubleshooting

### Page Shows Old Version

**Solution**: Clear MikroTik cache
```bash
ssh admin@192.168.88.1
/ip hotspot
reset-http-cache
```

### CSS Not Loading

**Solution 1**: Check file path
- Verify `css/` folder exists
- Ensure `horizon.css` is in the right location
- Check HTML links to CSS

**Solution 2**: Check permissions
```bash
# Via SSH
/file
:ls path=/ip/hotspot/myTheme/css/
```

### Images/Fonts Not Loading

**Solution**: Check paths in CSS
- All paths should be relative: `./` 
- Not absolute paths: `/ip/hotspot/...`

### Login Form Not Working

**Solution**: Check method and action
```html
<!-- Use POST method -->
<form method="post">
    <!-- MikroTik handles the action automatically -->
</form>
```

### Mobile View Issues

**Solution**: Ensure viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 📊 Performance Optimization

### CDN for CSS (Optional)

Instead of hosting locally, use CDN:
```html
<!-- In your HTML head -->
<link rel="stylesheet" href="https://your-cdn.com/horizon.css">
```

### Compress Files (Optional)

Reduce file sizes:
```bash
# On your computer
gzip css/horizon.css
# Upload .gz version to MikroTik
```

## 🔄 Updating the Theme

### To Update to New Version

1. Download new files
2. Backup current version:
   ```bash
   /file
   :copy [find name=myTheme] dst-name=myTheme-v1-backup
   ```
3. Upload new files
4. Test thoroughly
5. Keep backup for rollback

## 📱 Mobile Optimization

The theme automatically optimizes for:
- **iPhones/iOS**: 320px+
- **Android**: 360px+
- **Tablets**: 600px+
- **Desktops**: 1024px+

No additional configuration needed!

## 🎯 Advanced Configuration

### Multiple Themes

Create different themes for different user groups:

1. Create separate theme folders:
   - `/ip/hotspot/myTheme-premium/`
   - `/ip/hotspot/myTheme-basic/`

2. Create different profiles:
   - Premium Profile → myTheme-premium
   - Basic Profile → myTheme-basic

3. Assign users to different profiles

### Custom Branding

Create `css/branding.css`:

```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_SECONDARY;
}

.brand {
  background-image: url('logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

## 📞 Support Resources

- **Documentation**: Check `GLASS_THEME_GUIDE.md`
- **Examples**: See HTML files in package
- **MikroTik Wiki**: https://wiki.mikrotik.com/wiki/Hotspot
- **CSS Help**: See `css/CUSTOMIZATION.css`

## ✅ Final Checklist

Before going live:

- [ ] All files uploaded to MikroTik
- [ ] HTML directory configured correctly
- [ ] Login page working
- [ ] Hotspot triggering login page
- [ ] Forms submitting correctly
- [ ] Mobile view looks good
- [ ] No JavaScript errors
- [ ] Backup created
- [ ] Team trained on customization
- [ ] Monitoring enabled

---

**You're all set!** Your MikroTik hotspot now features the beautiful macOS Tahoe Liquid Glass theme. 🎉

For questions or issues, refer to the comprehensive guides included in the package.

**Happy hosting!** 🚀

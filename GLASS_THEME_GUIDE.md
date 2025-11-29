# macOS Tahoe Liquid Glass Theme

A beautiful glassmorphism-inspired design for your MikroTik Hotspot Portal, inspired by Apple's macOS Tahoe Liquid Glass concept.

## Overview

This theme features:
- **Liquid Glass Glassmorphism**: Modern frosted glass effects with backdrop blur
- **Tahoe Color Palette**: Cool blue and purple tones reminiscent of Apple's design
- **Smooth Animations**: Elegant transitions and entry animations
- **Responsive Design**: Perfect on all devices from mobile to desktop
- **Accessibility First**: Full keyboard navigation and focus states
- **Modern Typography**: System fonts that adapt to every platform

## Files

### CSS Files
- **`css/horizon.css`** - Primary theme with full Tahoe Liquid Glass styling
- **`css/glass-theme.css`** - Alternative extended glass effects stylesheet
- **`css/style.css`** - Original theme (can be replaced or used alongside)
- **`css/slider.css`** - Carousel/slider styles (unchanged)
- **`css/blink.css`** - Animation utilities (unchanged)

## Key Features

### Glass Buttons

#### Primary Button (Login/Submit)
- Gradient blue with glass effect
- Smooth hover lift animation
- Glowing shadow on hover

```html
<button class="button">Login</button>
```

#### Secondary Button (Outline)
- Transparent glass with border
- Subtle color shift on hover

```html
<button class="button2">Cancel</button>
```

#### Small Buttons (Tertiary)
- Purple gradient with compact size
- Perfect for additional actions

```html
<button class="small-button">Help</button>
```

### Glass Input Fields

All input fields feature:
- Frosted glass appearance with white gradient background
- Subtle inset shadows for depth
- Blue glow on focus
- Smooth transitions

```html
<input type="text" class="username" placeholder="Username">
<input type="password" class="password" placeholder="Password">
```

### Glass Cards & Containers

Main container with glassmorphism:
- 20px backdrop blur
- Semi-transparent white surface
- Subtle light reflection effect
- Layered shadows

```html
<div class="container">
  <!-- Your content -->
</div>
```

## Color Palette

### Primary Colors
- **Tahoe Blue**: `#5b7cfa` - Main action color
- **Tahoe Purple**: `#8b5cf6` - Accent color
- **Deep Background**: `#0a1427` - Page background

### States
- **Background**: Dark blue gradient (`#0a1427` to `#1a2a4a`)
- **Glass Surface**: 32% white transparency
- **Text Primary**: Dark blue-gray (`#1a2a4a`)
- **Text Secondary**: Medium gray (`#334155`)
- **Text Tertiary**: Light gray (`#94a3b8`)

## Glass Effect Properties

All glass elements use:

```css
backdrop-filter: blur(20px) saturate(120%);
-webkit-backdrop-filter: blur(20px) saturate(120%);
background: linear-gradient(135deg, rgba(255,255,255,0.32), rgba(255,255,255,0.15));
border: 1.5px solid rgba(255,255,255,0.5);
```

## Animations

### Glass Entry Animation
Smooth scale and fade entrance:
```css
@keyframes glass-enter {
  from { opacity: 0; transform: translateY(15px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

### Button Hover Effects
- Smooth lift (translateY)
- Shadow expansion
- Subtle color shift
- Background shimmer (optional)

## Responsive Behavior

- **Desktop (> 600px)**: Full 52px button height, optimized spacing
- **Mobile (≤ 600px)**: 48px buttons, adjusted padding, smaller font sizes
- **Touch**: Larger tap targets for accessibility

## Browser Support

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 15+  
✅ Edge 90+  
✅ Opera 76+  

*Note: Glassmorphism effects gracefully degrade on older browsers*

## Implementation

### Using in HTML

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="css/horizon.css">
</head>
<body>
  <div class="main">
    <div class="container">
      <h1 class="brand">WiFi Portal</h1>
      <form class="login-form">
        <input type="text" class="username" placeholder="Username">
        <input type="password" class="password" placeholder="Password">
        <button class="button">Sign In</button>
        <button class="button2">Need Help?</button>
      </form>
    </div>
  </div>
</body>
</html>
```

### CSS Variables

Customize the theme by overriding CSS variables:

```css
:root {
  --primary: #5b7cfa;           /* Change primary blue */
  --accent: #8b5cf6;            /* Change accent purple */
  --text-0: #1a2a4a;           /* Change primary text */
  --blur-lg: blur(20px);        /* Adjust glass blur */
  --shadow-xl: 0 20px 50px ...  /* Change shadows */
}
```

## Customization Examples

### Darker Glass
```css
:root {
  --surface-veil: rgba(255,255,255,0.2);  /* More transparent */
  --blur-lg: blur(25px);                   /* More blur */
}
```

### Brighter Brand Colors
```css
:root {
  --primary: #0ea5e9;    /* Brighter cyan */
  --accent: #d946ef;     /* Vibrant magenta */
}
```

### Softer Shadows
```css
:root {
  --shadow-xl: 0 10px 30px rgba(0,0,0,0.15);
}
```

## MikroTik Integration

### Login Form (login.html)
```html
<div class="container">
  <h1 class="brand">$(link-title)</h1>
  <form class="login-form">
    <input type="text" name="username" class="username" placeholder="Username">
    <input type="password" name="password" class="password" placeholder="Password">
    $(if error)<div class="notice">$(error)</div>$(endif)
    <button type="submit" class="button">$(button-login)</button>
  </form>
</div>
```

### Status Page (status.html)
```html
<div class="container">
  <h1 class="brand">Connection Active</h1>
  <div class="wifi-info card">
    <h2 class="card-title">Your Session</h2>
    <p><strong>Username:</strong> $(username)</p>
    <p><strong>IP Address:</strong> $(ip)</p>
    <p><strong>Time Remaining:</strong> $(session-time-remaining)</p>
    <button class="button">$(link-logout)</button>
  </div>
</div>
```

## Accessibility

- ✅ Full keyboard navigation support
- ✅ High contrast focus indicators (2px blue outline)
- ✅ Semantic HTML structure
- ✅ ARIA-friendly
- ✅ Respects `prefers-reduced-motion`
- ✅ Screen reader compatible

## Performance

- Minimal DOM elements required
- Optimized CSS with CSS variables
- Hardware-accelerated animations
- ~15KB CSS file (minimal impact)
- Fast load times on all devices

## Troubleshooting

### Glass Effect Not Showing
- Ensure `backdrop-filter` is supported (Chrome 76+, Firefox 103+, Safari 9+)
- Check browser compatibility at caniuse.com
- Fallback gradient still works without blur

### Buttons Look Flat
- Verify box-shadow property is not overridden
- Check that `::before` pseudo-elements are visible
- Try clearing browser cache

### Input Fields Not Focused
- Ensure focus styles are enabled
- Check that outline property isn't globally removed
- Verify z-index isn't hidden by parent elements

## License

MIT License - Feel free to customize and use in your projects

## Credits

Inspired by Apple's macOS Tahoe Liquid Glass concept and modern glassmorphism design trends.

Created for MikroTik Hotspot Portal users who want a modern, beautiful captive portal experience.

---

**Version**: 2.0  
**Last Updated**: November 2025  
**Author**: HPY

For issues and feature requests, please submit to the project repository.

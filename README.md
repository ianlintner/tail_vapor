# 🌴 Tail Vapor v2.0

A **vaporwave / synthwave / cyberpunk 80s retro** Tailwind CSS theme with neon glows, grid backgrounds, sunset gradients, and **8 customizable color variations**.

![Version](https://img.shields.io/badge/version-2.0.0-ff00ff)
![Vaporwave Theme](https://img.shields.io/badge/style-vaporwave-ff00ff)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%3E%3D3.0.0-06b6d4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ What's New in v2.0 (Phase 2)

- 🎨 **8 Theme Variations**: 3 new themes - Arcade, Outrun, and Cyber Noir
- 🧩 **50+ Components**: Badges, alerts, inputs, tables, tabs, progress bars, avatars, and more
- 🎬 **12 New Animations**: Glitch, rainbow shift, holographic, laser scan, pulse ring, and more
- 🌈 **Gradient Effects**: New gradient text, borders, and background utilities
- 📝 **Form Elements**: Styled inputs, textareas, toggles, and form components
- 🎮 **Retro Effects**: CRT, VHS, scanlines, pixel fonts, arcade styles
- 🖼️ **New Backgrounds**: Starfield, holographic, laser grid, and theme-specific gradients
- ✨ **Enhanced Glow Effects**: Double glow, rainbow glow, pulse ring effects

## ✨ Features

- 🎨 **8 Theme Variations**: Sunset, Neon City, Miami Vice, Digital Dreams, Midnight Chrome, Arcade, Outrun, Cyber Noir
- ✨ **Neon Glow Effects**: Beautiful glow utilities for text, borders, and box shadows
- 📐 **Retro Grid Backgrounds**: Perspective grids with smooth scrolling animations
- 🌅 **Sunset Gradients**: Pre-built sunset and horizon gradient backgrounds
- 🔤 **Retro Typography**: Curated fonts including Orbitron, Rajdhani, Share Tech Mono, Press Start 2P, and VT323
- 🎬 **Animations**: Glow pulse, neon flicker, floating, scanlines, glitch, rainbow shift, and more
- 📺 **Retro Components**: VHS effects, CRT scanlines, cassette tape decorations
- 🎵 **Music Ready**: Pre-styled audio player component for background synthwave music

## 📦 Installation

```bash
npm install tail-vapor
```

## 🚀 Quick Start

### 1. Add to your Tailwind config

```javascript
// tailwind.config.js
module.exports = {
  plugins: [require('tail-vapor')],
};
```

### 2. Import the styles (optional but recommended)

```css
/* In your main CSS file */
@import 'tail-vapor/src/styles.css';
```

### 3. Apply a theme to your HTML

```html
<body data-theme="neon-city">
  <!-- Your content here -->
</body>
```

## 🎨 Theme Variations

### 1. 🌅 Sunset Boulevard

Warm sunset colors with orange and pink gradients.

```html
<body data-theme="sunset"></body>
```

### 2. 🌃 Neon City (Default)

Electric blues and magentas of urban nightlife.

```html
<body data-theme="neon-city"></body>
```

### 3. 🌴 Miami Vice

Teal and pink Miami sunset vibes.

```html
<body data-theme="miami-vice"></body>
```

### 4. 💜 Digital Dreams

Purple and blue digital aesthetic.

```html
<body data-theme="digital-dreams"></body>
```

### 5. 🌙 Midnight Chrome

Cool chrome and silver with blue accents.

```html
<body data-theme="midnight-chrome"></body>
```

### 6. 🕹️ Arcade (NEW)

Classic arcade game colors with neon green and red.

```html
<body data-theme="arcade"></body>
```

### 7. 🏎️ Outrun (NEW)

Classic outrun racing aesthetic with hot pink and electric purple.

```html
<body data-theme="outrun"></body>
```

### 8. 🔍 Cyber Noir (NEW)

Dark cyberpunk detective noir with red and mint accents.

```html
<body data-theme="cyber-noir"></body>
```

## 🎯 Usage

### Buttons

```html
<!-- Primary button -->
<button class="vapor-btn">Primary Button</button>

<!-- Outline button -->
<button class="vapor-btn-outline">Outline Button</button>

<!-- Gradient button (NEW) -->
<button class="vapor-btn-gradient">Gradient Button</button>

<!-- Pill button (NEW) -->
<button class="vapor-btn-pill">Pill Button</button>
```

### Badges (NEW)

```html
<span class="vapor-badge">Primary Badge</span>
<span class="vapor-badge-secondary">Secondary Badge</span>
```

### Alerts (NEW)

```html
<div class="vapor-alert">Default alert message</div>
<div class="vapor-alert-success">Success message</div>
<div class="vapor-alert-warning">Warning message</div>
<div class="vapor-alert-error">Error message</div>
```

### Form Elements (NEW)

```html
<!-- Input -->
<input type="text" class="vapor-input" placeholder="Enter text...">

<!-- Textarea -->
<textarea class="vapor-textarea" placeholder="Your message..."></textarea>

<!-- Toggle switch -->
<div class="vapor-toggle"></div>
<div class="vapor-toggle vapor-toggle-active"></div>
```

### Progress Bar (NEW)

```html
<div class="vapor-progress">
  <div class="vapor-progress-bar" style="width: 75%"></div>
</div>
```

### Avatars (NEW)

```html
<div class="vapor-avatar vapor-avatar-sm">S</div>
<div class="vapor-avatar">M</div>
<div class="vapor-avatar vapor-avatar-lg">L</div>
```

### Stats (NEW)

```html
<div class="vapor-stats">
  <div class="vapor-stat">
    <div class="vapor-stat-value">2.4K</div>
    <div class="vapor-stat-label">Downloads</div>
  </div>
</div>
```

### Tabs (NEW)

```html
<div class="vapor-tabs">
  <button class="vapor-tab vapor-tab-active">Tab 1</button>
  <button class="vapor-tab">Tab 2</button>
  <button class="vapor-tab">Tab 3</button>
</div>
```

### Table (NEW)

```html
<table class="vapor-table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### Loading Spinners (NEW)

```html
<div class="vapor-loading vapor-loading-sm"></div>
<div class="vapor-loading"></div>
<div class="vapor-loading vapor-loading-lg"></div>
```

### Text Effects

```html
<!-- Neon text effects -->
<h1 class="neon-text">Glowing Cyan Text</h1>
<h1 class="neon-text-secondary">Glowing Magenta Text</h1>

<!-- Chrome text effect -->
<h1 class="vapor-chrome">Metallic Chrome Text</h1>

<!-- Gradient text (NEW) -->
<h1 class="gradient-text-vapor">Gradient Text</h1>
<h1 class="gradient-text-sunset">Sunset Gradient</h1>
<h1 class="gradient-text-outrun">Outrun Gradient</h1>
<h1 class="gradient-text-rainbow">Rainbow Gradient</h1>

<!-- Retro outline (NEW) -->
<h1 class="retro-outline">Outline Text</h1>
```

### Cards & Containers

```html
<!-- Cards -->
<div class="vapor-card">
  <h3 class="neon-text">Card Title</h3>
  <p>Card content...</p>
</div>

<!-- Neon box -->
<div class="vapor-box p-6">Neon bordered container</div>

<!-- Panel (NEW) -->
<div class="vapor-panel">Panel content</div>

<!-- Holographic card (NEW) -->
<div class="vapor-holographic p-6">Holographic content</div>

<!-- Neon sign -->
<div class="vapor-sign">OPEN 24/7</div>
```

### Backgrounds

```html
<!-- Grid backgrounds -->
<div class="vapor-grid">Standard grid</div>
<div class="vapor-grid-perspective">Perspective grid</div>

<!-- Sunset gradients -->
<div class="vapor-sunset">Sunset gradient</div>
<div class="vapor-sunset-horizon">Horizon gradient</div>

<!-- New backgrounds (Phase 2) -->
<div class="vapor-starfield">Starfield background</div>
<div class="vapor-holographic">Holographic effect</div>
<div class="vapor-outrun">Outrun gradient</div>
<div class="vapor-arcade">Arcade style</div>
<div class="vapor-noir">Cyber noir style</div>

<!-- Hero section with all effects -->
<section class="vapor-hero vapor-scanlines">
  <!-- Content -->
</section>
```

### Glow Utilities

```html
<!-- Box shadows -->
<div class="glow-sm">Small glow</div>
<div class="glow">Medium glow</div>
<div class="glow-lg">Large glow</div>
<div class="glow-xl">Extra large glow</div>
<div class="glow-double">Double color glow (NEW)</div>

<!-- Text shadows -->
<p class="text-glow-sm">Small text glow</p>
<p class="text-glow">Medium text glow</p>
<p class="text-glow-lg">Large text glow</p>

<!-- Custom glow colors -->
<div class="glow-vapor-pink">Pink glow</div>
<p class="text-glow-vapor-cyan">Cyan text glow</p>
```

### Animations

```html
<!-- Existing animations -->
<div class="animate-glow-pulse">Pulsing glow</div>
<div class="animate-neon-flicker">Flickering neon</div>
<div class="animate-float">Floating element</div>
<div class="vapor-grid animate-grid-scroll">Scrolling grid</div>
<div class="animate-chrome-shine">Shiny chrome</div>

<!-- New animations (Phase 2) -->
<div class="animate-glitch">Glitch effect</div>
<div class="animate-rainbow-shift">Rainbow color shift</div>
<div class="animate-pulse-ring">Pulsing ring</div>
<div class="animate-holographic">Holographic shimmer</div>
<div class="animate-laser-scan">Laser scan</div>
<div class="animate-star-twinkle">Twinkling stars</div>
<div class="animate-neon-breathe">Breathing glow</div>
<div class="animate-rotate-slow">Slow rotation</div>
```

### Code Blocks (NEW)

```html
<!-- Block code -->
<pre class="vapor-code"><code>npm install tail-vapor</code></pre>

<!-- Inline code -->
<span class="vapor-code-inline">vapor-btn</span>
```

### Quote (NEW)

```html
<blockquote class="vapor-quote">
  "The future is not written."
</blockquote>
```

### List (NEW)

```html
<ul class="vapor-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Typography

```html
<!-- Font families -->
<h1 class="font-vaporDisplay">Display heading (Orbitron)</h1>
<p class="font-vapor">Body text (Rajdhani)</p>
<code class="font-vaporMono">Monospace text (Share Tech Mono)</code>

<!-- Vapor heading style -->
<h1 class="vapor-heading">UPPERCASE HEADING</h1>

<!-- Pixel text (NEW) -->
<p class="vapor-pixel-text">Retro pixel text</p>

<!-- Terminal text (NEW) -->
<p class="vapor-terminal">Terminal style</p>
```

### Utility Classes (NEW)

```html
<!-- Backdrop blur -->
<div class="backdrop-vapor">Blurred backdrop</div>
<div class="backdrop-vapor-heavy">Heavy blur</div>

<!-- CRT effect -->
<div class="crt-effect">CRT scanlines</div>

<!-- Vignette -->
<div class="vignette">Vignette overlay</div>

<!-- Clip paths -->
<div class="clip-chevron">Chevron shape</div>
<div class="clip-slant">Slanted edge</div>
<div class="clip-diamond">Diamond shape</div>
<div class="clip-hexagon">Hexagon shape</div>

<!-- Filters -->
<div class="filter-neon">Neon filter</div>
<div class="filter-chrome">Chrome filter</div>
<div class="filter-noir">Noir filter</div>

<!-- Hover effects -->
<div class="hover-glow">Glow on hover</div>
<a class="hover-neon-text">Neon text on hover</a>
```

### Color Palette

Access the full vaporwave color palette:

```html
<!-- Direct colors -->
<div class="bg-vapor-pink">Pink</div>
<div class="bg-vapor-cyan">Cyan</div>
<div class="bg-vapor-magenta">Magenta</div>
<div class="bg-vapor-purple">Purple</div>
<div class="bg-vapor-orange">Orange</div>
<div class="bg-vapor-teal">Teal</div>
<div class="bg-vapor-chrome">Chrome</div>

<!-- New colors (Phase 2) -->
<div class="bg-vapor-neonGreen">Neon Green</div>
<div class="bg-vapor-arcadeRed">Arcade Red</div>
<div class="bg-vapor-hotPink">Hot Pink</div>
<div class="bg-vapor-electricPurple">Electric Purple</div>
<div class="bg-vapor-laserYellow">Laser Yellow</div>
<div class="bg-vapor-neonRed">Neon Red</div>
<div class="bg-vapor-mintGreen">Mint Green</div>
<div class="bg-vapor-amber">Amber</div>
<div class="bg-vapor-gold">Gold</div>
<div class="bg-vapor-silver">Silver</div>

<!-- Theme-aware colors -->
<div class="bg-vapor">Theme background</div>
<div class="bg-vapor-surface">Theme surface</div>
<div class="text-vapor-primary">Theme primary</div>
<div class="text-vapor-secondary">Theme secondary</div>
<div class="text-vapor-tertiary">Theme tertiary (NEW)</div>
<div class="border-vapor">Theme border</div>
```

## 🔧 CSS Variables

All theme colors are available as CSS variables:

```css
:root {
  --vapor-primary: #00fff5;
  --vapor-secondary: #ff00ff;
  --vapor-accent: #7b2cbf;
  --vapor-background: #0d0221;
  --vapor-surface: #190535;
  --vapor-text: #e0e0ff;
  --vapor-neon1: #00fff5;
  --vapor-neon2: #ff00ff;
  --vapor-grid-color: #00fff5;
  --vapor-glow-color: #00fff5;
  --vapor-tertiary: #ffff00; /* NEW */
}
```

## 🎵 Background Music Setup

Add synthwave background music to enhance the experience:

```html
<audio id="bgMusic" loop>
  <source src="your-synthwave-track.mp3" type="audio/mpeg" />
</audio>

<button onclick="document.getElementById('bgMusic').play()">▶ Play Music</button>
```

## 📁 Project Structure

```
tail-vapor/
├── src/
│   ├── index.js      # Main Tailwind plugin
│   └── styles.css    # Base styles and components
├── demo/
│   └── index.html    # Demo page
├── tailwind.config.js
├── package.json
└── README.md
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/ianlintner/tail_vapor.git
cd tail_vapor

# Install dependencies
npm install

# Build the demo CSS
npm run build

# Watch for changes during development
npm run build:demo

# Lint the code
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📜 License

MIT License - feel free to use this in your projects!

## 🌟 Credits

Inspired by the aesthetics of:

- 80s retro-futurism
- Synthwave and vaporwave music
- Neon-lit cities and sunset horizons
- Cyberpunk visual culture
- Classic arcade games
- Outrun racing games

---

**Built with 💜 for lovers of the 80s aesthetic**

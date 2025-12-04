# 🌴 Tail Vapor

A **vaporwave / synthwave / cyberpunk 80s retro** Tailwind CSS theme with neon glows, grid backgrounds, sunset gradients, and 5 customizable color variations.

![Vaporwave Theme](https://img.shields.io/badge/style-vaporwave-ff00ff)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%3E%3D3.0.0-06b6d4)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **5 Theme Variations**: Sunset Boulevard, Neon City, Miami Vice, Digital Dreams, Midnight Chrome
- ✨ **Neon Glow Effects**: Beautiful glow utilities for text, borders, and box shadows
- 📐 **Retro Grid Backgrounds**: Perspective grids with smooth scrolling animations
- 🌅 **Sunset Gradients**: Pre-built sunset and horizon gradient backgrounds
- 🔤 **Retro Typography**: Curated fonts including Orbitron, Rajdhani, and Share Tech Mono
- 🎬 **Animations**: Glow pulse, neon flicker, floating, scanlines, and chrome shine effects
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
  plugins: [
    require('tail-vapor'),
  ],
}
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
<body data-theme="sunset">
```

### 2. 🌃 Neon City (Default)
Electric blues and magentas of urban nightlife.
```html
<body data-theme="neon-city">
```

### 3. 🌴 Miami Vice
Teal and pink Miami sunset vibes.
```html
<body data-theme="miami-vice">
```

### 4. 💜 Digital Dreams
Purple and blue digital aesthetic.
```html
<body data-theme="digital-dreams">
```

### 5. 🌙 Midnight Chrome
Cool chrome and silver with blue accents.
```html
<body data-theme="midnight-chrome">
```

## 🎯 Usage

### Components

```html
<!-- Neon text effects -->
<h1 class="neon-text">Glowing Cyan Text</h1>
<h1 class="neon-text-secondary">Glowing Magenta Text</h1>

<!-- Chrome text effect -->
<h1 class="vapor-chrome">Metallic Chrome Text</h1>

<!-- Buttons -->
<button class="vapor-btn">Primary Button</button>
<button class="vapor-btn-outline">Outline Button</button>

<!-- Cards -->
<div class="vapor-card">
  <h3 class="neon-text">Card Title</h3>
  <p>Card content...</p>
</div>

<!-- Neon box -->
<div class="vapor-box p-6">
  Neon bordered container
</div>

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
<!-- Glow pulse -->
<div class="animate-glow-pulse">Pulsing glow</div>

<!-- Neon flicker -->
<div class="animate-neon-flicker">Flickering neon</div>

<!-- Floating effect -->
<div class="animate-float">Floating element</div>

<!-- Grid scroll -->
<div class="vapor-grid animate-grid-scroll">Scrolling grid</div>

<!-- Chrome shine -->
<div class="animate-chrome-shine">Shiny chrome</div>
```

### Typography

```html
<!-- Font families -->
<h1 class="font-vaporDisplay">Display heading (Orbitron)</h1>
<p class="font-vapor">Body text (Rajdhani)</p>
<code class="font-vaporMono">Monospace text (Share Tech Mono)</code>

<!-- Vapor heading style -->
<h1 class="vapor-heading">UPPERCASE HEADING</h1>
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

<!-- Theme-aware colors -->
<div class="bg-vapor">Theme background</div>
<div class="bg-vapor-surface">Theme surface</div>
<div class="text-vapor-primary">Theme primary</div>
<div class="text-vapor-secondary">Theme secondary</div>
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
}
```

## 🎵 Background Music Setup

Add synthwave background music to enhance the experience:

```html
<audio id="bgMusic" loop>
  <source src="your-synthwave-track.mp3" type="audio/mpeg">
</audio>

<button onclick="document.getElementById('bgMusic').play()">
  ▶ Play Music
</button>
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

---

**Built with 💜 for lovers of the 80s aesthetic**

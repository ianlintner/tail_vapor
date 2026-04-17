# Copilot Instructions for Tail Vapor

## Project Overview

Tail Vapor is a Tailwind CSS plugin that provides a vaporwave/synthwave/cyberpunk 80s retro theme. The plugin includes:

- 5 theme variations (Sunset, Neon City, Miami Vice, Digital Dreams, Midnight Chrome)
- Neon glow effects and utilities
- Retro grid backgrounds
- Sunset gradient backgrounds
- Custom typography (Orbitron, Rajdhani, Share Tech Mono)
- Animations (glow pulse, neon flicker, floating, scanlines)

## Project Structure

```
tail-vapor/
├── src/
│   ├── index.js      # Main Tailwind CSS plugin
│   └── styles.css    # Base styles and components
├── demo/
│   └── index.html    # Demo page showcasing the theme
├── .github/
│   ├── workflows/    # CI/CD workflows
│   └── copilot-instructions.md
├── tailwind.config.js
├── package.json
└── README.md
```

## Development Guidelines

### Code Style

- Use ES6+ JavaScript syntax
- Follow Tailwind CSS plugin conventions
- Use CSS custom properties (CSS variables) for theme values
- Prefix all custom classes with `vapor-` for components
- Use camelCase for JavaScript, kebab-case for CSS classes

### Theme System

Themes are applied via `data-theme` attribute on the body element:

```html
<body data-theme="neon-city"></body>
```

Available themes:

- `sunset` - Warm orange/pink sunset tones
- `neon-city` - Cyan/magenta urban nightlife (default)
- `miami-vice` - Teal/pink Miami vibes
- `digital-dreams` - Purple/blue digital aesthetic
- `midnight-chrome` - Cool chrome/silver accents

### CSS Variables

All theme colors are exposed as CSS variables:

```css
--vapor-primary
--vapor-secondary
--vapor-accent
--vapor-background
--vapor-surface
--vapor-text
--vapor-neon1
--vapor-neon2
--vapor-grid-color
--vapor-glow-color
```

### Adding New Features

1. Add theme colors to the `themes` object in `src/index.js`
2. Add CSS variables for the new theme in `addBase()`
3. Create components with `addComponents()` for reusable patterns
4. Create utilities with `addUtilities()` for single-purpose classes
5. Update the demo page to showcase new features
6. Update README.md with documentation

### Building and Testing

```bash
# Install dependencies
npm install

# Build the demo CSS
npm run build

# Watch mode for development
npm run build:demo

# Run linting
npm run lint

# Format code
npm run format
```

### Component Naming

- `.vapor-*` - Component classes (vapor-card, vapor-btn, vapor-grid)
- `.neon-*` - Neon effect classes (neon-text, neon-text-secondary)
- `.glow-*` - Glow utility classes (glow-sm, glow, glow-lg)
- `.text-glow-*` - Text glow utilities
- `animate-*` - Animation classes (animate-glow-pulse, animate-neon-flicker)

### Color Palette

The `vapor` color namespace includes:

- Neon colors: pink, magenta, cyan, purple, violet, orange, yellow, teal, chrome, lavender
- Background colors: night, midnight, deepBlue, darkPurple, darkTeal
- Gradient colors: sunsetStart, sunsetMid, sunsetEnd

### Accessibility

- Ensure sufficient color contrast for text
- Provide fallback styles for reduced motion preferences
- Test with screen readers for any interactive components

### Performance

- Minimize CSS output by using Tailwind's purge feature
- Avoid complex CSS selectors
- Use CSS animations instead of JavaScript when possible

## Caretaker

This repo uses the [caretaker](https://github.com/ianlintner/caretaker) autonomous
maintenance system. The orchestrator runs daily via GitHub Actions and assigns tasks to
`@copilot` via structured issue and PR comments.

Agent instruction files live in `.github/agents/`:
- `maintainer-pr.md` — how to respond to PR fix requests
- `maintainer-issue.md` — how to execute assigned issues
- `maintainer-upgrade.md` — how to apply caretaker upgrades

Always check these files when you receive a caretaker assignment.

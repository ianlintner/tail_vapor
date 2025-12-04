/**
 * Tail Vapor - Vaporwave/Synthwave/Cyberpunk 80s Retro Tailwind CSS Theme
 * Version 2.0 - Phase 2
 *
 * A nostalgic journey to neon-lit cities, sunset horizons, and retro-futuristic dreams.
 * Features 8 unique theme variations with custom colors, glow effects, and animations.
 */

const plugin = require('tailwindcss/plugin');

/**
 * Theme color palettes - 8 variations of vaporwave aesthetics
 */
const themes = {
  // Theme 1: Sunset Boulevard - Warm sunset colors with orange and pink gradients
  sunset: {
    primary: '#ff6b35', // Sunset orange
    secondary: '#f7c59f', // Peach
    accent: '#ff2e63', // Hot pink
    background: '#1a1a2e', // Deep night
    surface: '#16213e', // Dark blue surface
    text: '#eaeaea', // Light text
    neon1: '#ff6b35', // Orange neon
    neon2: '#ff2e63', // Pink neon
    grid: '#ff6b35', // Grid color
    tertiary: '#ffd700', // Gold accent
  },

  // Theme 2: Neon City - Electric blues and magentas of urban nightlife
  neonCity: {
    primary: '#00fff5', // Cyan
    secondary: '#ff00ff', // Magenta
    accent: '#7b2cbf', // Purple
    background: '#0d0221', // Deep purple black
    surface: '#190535', // Dark purple surface
    text: '#e0e0ff', // Light purple text
    neon1: '#00fff5', // Cyan neon
    neon2: '#ff00ff', // Magenta neon
    grid: '#00fff5', // Grid color
    tertiary: '#ffff00', // Yellow accent
  },

  // Theme 3: Miami Vice - Teal and pink Miami sunset vibes
  miamiVice: {
    primary: '#41ead4', // Teal
    secondary: '#ff6eff', // Pink
    accent: '#f9f871', // Yellow
    background: '#011627', // Dark teal black
    surface: '#023047', // Navy surface
    text: '#f0f4f8', // Cool white text
    neon1: '#41ead4', // Teal neon
    neon2: '#ff6eff', // Pink neon
    grid: '#41ead4', // Grid color
    tertiary: '#ff9f1c', // Orange accent
  },

  // Theme 4: Digital Dreams - Purple and blue digital aesthetic
  digitalDreams: {
    primary: '#8b5cf6', // Violet
    secondary: '#06b6d4', // Cyan
    accent: '#f472b6', // Pink
    background: '#0f0f23', // Nearly black with blue tint
    surface: '#1e1b4b', // Deep indigo
    text: '#e2e8f0', // Slate text
    neon1: '#8b5cf6', // Violet neon
    neon2: '#06b6d4', // Cyan neon
    grid: '#8b5cf6', // Grid color
    tertiary: '#a855f7', // Purple accent
  },

  // Theme 5: Midnight Chrome - Cool chrome and silver with blue accents
  midnightChrome: {
    primary: '#64ffda', // Chrome teal
    secondary: '#a78bfa', // Lavender
    accent: '#f0abfc', // Light magenta
    background: '#0a0a0f', // Pure dark
    surface: '#18181b', // Zinc surface
    text: '#d4d4d8', // Zinc text
    neon1: '#64ffda', // Chrome teal neon
    neon2: '#a78bfa', // Lavender neon
    grid: '#64ffda', // Grid color
    tertiary: '#c0c0c0', // Silver accent
  },

  // Theme 6: Arcade - Classic arcade game colors
  arcade: {
    primary: '#39ff14', // Neon green
    secondary: '#ff073a', // Arcade red
    accent: '#ffff00', // Yellow
    background: '#0a0a0a', // Pure black
    surface: '#1a1a1a', // Dark gray surface
    text: '#ffffff', // White text
    neon1: '#39ff14', // Green neon
    neon2: '#ff073a', // Red neon
    grid: '#39ff14', // Grid color
    tertiary: '#00bfff', // Deep sky blue accent
  },

  // Theme 7: Outrun - Classic outrun sunset racing aesthetic
  outrun: {
    primary: '#ff2d95', // Hot pink
    secondary: '#7b42ff', // Electric purple
    accent: '#fff020', // Laser yellow
    background: '#0c0c1e', // Night blue
    surface: '#1a1a3e', // Deep purple surface
    text: '#ffffff', // White text
    neon1: '#ff2d95', // Pink neon
    neon2: '#7b42ff', // Purple neon
    grid: '#ff2d95', // Grid color
    tertiary: '#00d4ff', // Cyan accent
  },

  // Theme 8: Cyber Noir - Dark cyberpunk detective noir
  cyberNoir: {
    primary: '#ff4444', // Neon red
    secondary: '#00ffcc', // Mint green
    accent: '#ff8800', // Amber
    background: '#0d0d0d', // Near black
    surface: '#1a1a1a', // Dark gray
    text: '#cccccc', // Gray text
    neon1: '#ff4444', // Red neon
    neon2: '#00ffcc', // Green neon
    grid: '#ff4444', // Grid color
    tertiary: '#ffcc00', // Gold accent
  },
};

/**
 * Extended color palette with all theme colors
 */
const extendedColors = {
  vapor: {
    // Shared neon colors
    pink: '#ff2e63',
    magenta: '#ff00ff',
    cyan: '#00fff5',
    purple: '#7b2cbf',
    violet: '#8b5cf6',
    orange: '#ff6b35',
    yellow: '#f9f871',
    teal: '#41ead4',
    chrome: '#64ffda',
    lavender: '#a78bfa',

    // New Phase 2 colors
    neonGreen: '#39ff14',
    arcadeRed: '#ff073a',
    hotPink: '#ff2d95',
    electricPurple: '#7b42ff',
    laserYellow: '#fff020',
    neonRed: '#ff4444',
    mintGreen: '#00ffcc',
    amber: '#ff8800',
    gold: '#ffd700',
    silver: '#c0c0c0',

    // Background variations
    night: '#0d0221',
    midnight: '#0a0a0f',
    deepBlue: '#1a1a2e',
    darkPurple: '#190535',
    darkTeal: '#011627',
    pureBlack: '#0a0a0a',
    nightBlue: '#0c0c1e',
    nearBlack: '#0d0d0d',

    // Sunset gradient colors
    sunsetStart: '#ff6b35',
    sunsetMid: '#ff2e63',
    sunsetEnd: '#7b2cbf',

    // Outrun gradient colors
    outrunStart: '#ff2d95',
    outrunMid: '#7b42ff',
    outrunEnd: '#00d4ff',
  },

  // Individual theme palettes
  sunset: themes.sunset,
  neonCity: themes.neonCity,
  miamiVice: themes.miamiVice,
  digitalDreams: themes.digitalDreams,
  midnightChrome: themes.midnightChrome,
  arcade: themes.arcade,
  outrun: themes.outrun,
  cyberNoir: themes.cyberNoir,
};

/**
 * Custom animations for vaporwave effects
 */
const animations = {
  'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
  'neon-flicker': 'neon-flicker 0.15s ease-in-out infinite',
  'grid-scroll': 'grid-scroll 20s linear infinite',
  'sunset-shift': 'sunset-shift 10s ease-in-out infinite',
  float: 'float 6s ease-in-out infinite',
  scanline: 'scanline 8s linear infinite',
  'chrome-shine': 'chrome-shine 3s linear infinite',
  // Phase 2 animations
  glitch: 'glitch 0.3s ease-in-out infinite',
  'rainbow-shift': 'rainbow-shift 5s linear infinite',
  'typing-cursor': 'typing-cursor 1s step-end infinite',
  wave: 'wave 2s ease-in-out infinite',
  'pixel-fade': 'pixel-fade 1s ease-out forwards',
  'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
  holographic: 'holographic 3s ease-in-out infinite',
  'laser-scan': 'laser-scan 2s linear infinite',
  'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
  'neon-breathe': 'neon-breathe 4s ease-in-out infinite',
  'rotate-slow': 'rotate-slow 20s linear infinite',
  bounce: 'bounce 1s ease-in-out infinite',
};

const keyframes = {
  'glow-pulse': {
    '0%, 100%': {
      opacity: '1',
      filter: 'brightness(1) blur(0px)',
    },
    '50%': {
      opacity: '0.8',
      filter: 'brightness(1.2) blur(2px)',
    },
  },
  'neon-flicker': {
    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
      opacity: '1',
      textShadow:
        '0 0 4px var(--tw-shadow-color), 0 0 11px var(--tw-shadow-color), 0 0 19px var(--tw-shadow-color)',
    },
    '20%, 24%, 55%': {
      opacity: '0.8',
      textShadow: 'none',
    },
  },
  'grid-scroll': {
    '0%': { backgroundPosition: '0 0' },
    '100%': { backgroundPosition: '0 100%' },
  },
  'sunset-shift': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
  },
  scanline: {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(100%)' },
  },
  'chrome-shine': {
    '0%': { backgroundPosition: '-200% center' },
    '100%': { backgroundPosition: '200% center' },
  },
  // Phase 2 keyframes
  glitch: {
    '0%, 100%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
    '20%': { transform: 'translate(-2px, 2px)', filter: 'hue-rotate(90deg)' },
    '40%': { transform: 'translate(-2px, -2px)', filter: 'hue-rotate(180deg)' },
    '60%': { transform: 'translate(2px, 2px)', filter: 'hue-rotate(270deg)' },
    '80%': { transform: 'translate(2px, -2px)', filter: 'hue-rotate(360deg)' },
  },
  'rainbow-shift': {
    '0%': { filter: 'hue-rotate(0deg)' },
    '100%': { filter: 'hue-rotate(360deg)' },
  },
  'typing-cursor': {
    '0%, 100%': { borderColor: 'transparent' },
    '50%': { borderColor: 'var(--vapor-neon1, #00fff5)' },
  },
  wave: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
  'pixel-fade': {
    '0%': { opacity: '0', transform: 'scale(0.8)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  'pulse-ring': {
    '0%': { transform: 'scale(0.95)', opacity: '1' },
    '100%': { transform: 'scale(1.3)', opacity: '0' },
  },
  holographic: {
    '0%, 100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
    '50%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(30deg)' },
  },
  'laser-scan': {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100%)' },
  },
  'star-twinkle': {
    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
    '50%': { opacity: '0.5', transform: 'scale(0.8)' },
  },
  'neon-breathe': {
    '0%, 100%': {
      boxShadow:
        '0 0 5px var(--vapor-neon1), 0 0 10px var(--vapor-neon1), 0 0 20px var(--vapor-neon1)',
    },
    '50%': {
      boxShadow:
        '0 0 10px var(--vapor-neon1), 0 0 20px var(--vapor-neon1), 0 0 40px var(--vapor-neon1)',
    },
  },
  'rotate-slow': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  bounce: {
    '0%, 100%': { transform: 'translateY(-5%)' },
    '50%': { transform: 'translateY(5%)' },
  },
};

/**
 * Main Tail Vapor plugin
 */
const tailVapor = plugin(
  function ({ addBase, addComponents, addUtilities, matchUtilities, theme }) {
    // Base styles for dark vaporwave background
    addBase({
      ':root': {
        '--vapor-grid-color': themes.neonCity.grid,
        '--vapor-glow-color': themes.neonCity.neon1,
      },

      // Theme CSS variables
      '[data-theme="sunset"]': {
        '--vapor-primary': themes.sunset.primary,
        '--vapor-secondary': themes.sunset.secondary,
        '--vapor-accent': themes.sunset.accent,
        '--vapor-background': themes.sunset.background,
        '--vapor-surface': themes.sunset.surface,
        '--vapor-text': themes.sunset.text,
        '--vapor-neon1': themes.sunset.neon1,
        '--vapor-neon2': themes.sunset.neon2,
        '--vapor-grid-color': themes.sunset.grid,
        '--vapor-glow-color': themes.sunset.neon1,
      },
      '[data-theme="neon-city"]': {
        '--vapor-primary': themes.neonCity.primary,
        '--vapor-secondary': themes.neonCity.secondary,
        '--vapor-accent': themes.neonCity.accent,
        '--vapor-background': themes.neonCity.background,
        '--vapor-surface': themes.neonCity.surface,
        '--vapor-text': themes.neonCity.text,
        '--vapor-neon1': themes.neonCity.neon1,
        '--vapor-neon2': themes.neonCity.neon2,
        '--vapor-grid-color': themes.neonCity.grid,
        '--vapor-glow-color': themes.neonCity.neon1,
      },
      '[data-theme="miami-vice"]': {
        '--vapor-primary': themes.miamiVice.primary,
        '--vapor-secondary': themes.miamiVice.secondary,
        '--vapor-accent': themes.miamiVice.accent,
        '--vapor-background': themes.miamiVice.background,
        '--vapor-surface': themes.miamiVice.surface,
        '--vapor-text': themes.miamiVice.text,
        '--vapor-neon1': themes.miamiVice.neon1,
        '--vapor-neon2': themes.miamiVice.neon2,
        '--vapor-grid-color': themes.miamiVice.grid,
        '--vapor-glow-color': themes.miamiVice.neon1,
      },
      '[data-theme="digital-dreams"]': {
        '--vapor-primary': themes.digitalDreams.primary,
        '--vapor-secondary': themes.digitalDreams.secondary,
        '--vapor-accent': themes.digitalDreams.accent,
        '--vapor-background': themes.digitalDreams.background,
        '--vapor-surface': themes.digitalDreams.surface,
        '--vapor-text': themes.digitalDreams.text,
        '--vapor-neon1': themes.digitalDreams.neon1,
        '--vapor-neon2': themes.digitalDreams.neon2,
        '--vapor-grid-color': themes.digitalDreams.grid,
        '--vapor-glow-color': themes.digitalDreams.neon1,
      },
      '[data-theme="midnight-chrome"]': {
        '--vapor-primary': themes.midnightChrome.primary,
        '--vapor-secondary': themes.midnightChrome.secondary,
        '--vapor-accent': themes.midnightChrome.accent,
        '--vapor-background': themes.midnightChrome.background,
        '--vapor-surface': themes.midnightChrome.surface,
        '--vapor-text': themes.midnightChrome.text,
        '--vapor-neon1': themes.midnightChrome.neon1,
        '--vapor-neon2': themes.midnightChrome.neon2,
        '--vapor-grid-color': themes.midnightChrome.grid,
        '--vapor-glow-color': themes.midnightChrome.neon1,
        '--vapor-tertiary': themes.midnightChrome.tertiary,
      },
      '[data-theme="arcade"]': {
        '--vapor-primary': themes.arcade.primary,
        '--vapor-secondary': themes.arcade.secondary,
        '--vapor-accent': themes.arcade.accent,
        '--vapor-background': themes.arcade.background,
        '--vapor-surface': themes.arcade.surface,
        '--vapor-text': themes.arcade.text,
        '--vapor-neon1': themes.arcade.neon1,
        '--vapor-neon2': themes.arcade.neon2,
        '--vapor-grid-color': themes.arcade.grid,
        '--vapor-glow-color': themes.arcade.neon1,
        '--vapor-tertiary': themes.arcade.tertiary,
      },
      '[data-theme="outrun"]': {
        '--vapor-primary': themes.outrun.primary,
        '--vapor-secondary': themes.outrun.secondary,
        '--vapor-accent': themes.outrun.accent,
        '--vapor-background': themes.outrun.background,
        '--vapor-surface': themes.outrun.surface,
        '--vapor-text': themes.outrun.text,
        '--vapor-neon1': themes.outrun.neon1,
        '--vapor-neon2': themes.outrun.neon2,
        '--vapor-grid-color': themes.outrun.grid,
        '--vapor-glow-color': themes.outrun.neon1,
        '--vapor-tertiary': themes.outrun.tertiary,
      },
      '[data-theme="cyber-noir"]': {
        '--vapor-primary': themes.cyberNoir.primary,
        '--vapor-secondary': themes.cyberNoir.secondary,
        '--vapor-accent': themes.cyberNoir.accent,
        '--vapor-background': themes.cyberNoir.background,
        '--vapor-surface': themes.cyberNoir.surface,
        '--vapor-text': themes.cyberNoir.text,
        '--vapor-neon1': themes.cyberNoir.neon1,
        '--vapor-neon2': themes.cyberNoir.neon2,
        '--vapor-grid-color': themes.cyberNoir.grid,
        '--vapor-glow-color': themes.cyberNoir.neon1,
        '--vapor-tertiary': themes.cyberNoir.tertiary,
      },
    });

    // Vaporwave component classes
    addComponents({
      // Neon text styles
      '.vapor-text': {
        color: 'var(--vapor-text, #eaeaea)',
        fontFamily: theme('fontFamily.vapor'),
      },

      '.vapor-heading': {
        fontFamily: theme('fontFamily.vaporDisplay'),
        fontWeight: '700',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      },

      // Neon glow text effects
      '.neon-text': {
        color: 'var(--vapor-neon1, #00fff5)',
        textShadow:
          '0 0 7px var(--vapor-neon1, #00fff5), 0 0 10px var(--vapor-neon1, #00fff5), 0 0 21px var(--vapor-neon1, #00fff5), 0 0 42px var(--vapor-neon1, #00fff5)',
      },

      '.neon-text-secondary': {
        color: 'var(--vapor-neon2, #ff00ff)',
        textShadow:
          '0 0 7px var(--vapor-neon2, #ff00ff), 0 0 10px var(--vapor-neon2, #ff00ff), 0 0 21px var(--vapor-neon2, #ff00ff), 0 0 42px var(--vapor-neon2, #ff00ff)',
      },

      // Retro grid background
      '.vapor-grid': {
        position: 'relative',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        backgroundImage: `
          linear-gradient(var(--vapor-grid-color, #00fff5) 1px, transparent 1px),
          linear-gradient(90deg, var(--vapor-grid-color, #00fff5) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center center',
      },

      '.vapor-grid-perspective': {
        position: 'relative',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        backgroundImage: `
          linear-gradient(transparent 65%, var(--vapor-grid-color, #00fff5) 65%),
          repeating-linear-gradient(90deg, transparent, transparent 49px, var(--vapor-grid-color, #00fff5) 50px)
        `,
        backgroundSize: '100% 200px, 50px 100%',
        backgroundPosition: 'bottom',
      },

      // Sunset gradient backgrounds
      '.vapor-sunset': {
        background: 'linear-gradient(180deg, #ff6b35 0%, #ff2e63 35%, #7b2cbf 70%, #1a1a2e 100%)',
      },

      '.vapor-sunset-horizon': {
        background:
          'linear-gradient(180deg, #0d0221 0%, #0d0221 40%, #7b2cbf 60%, #ff2e63 80%, #ff6b35 100%)',
      },

      // Sun element
      '.vapor-sun': {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(180deg, #ff6b35 0%, #ff2e63 50%, #ff6b35 100%)',
        boxShadow: '0 0 60px #ff6b35, 0 0 100px #ff2e63',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '50%',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 8px, #0d0221 8px, #0d0221 16px)',
        },
      },

      // Neon border box
      '.vapor-box': {
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5), inset 0 0 10px rgba(0, 255, 245, 0.1)',
      },

      // Card component
      '.vapor-card': {
        backgroundColor: 'var(--vapor-surface, #190535)',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        boxShadow: '0 0 20px rgba(0, 255, 245, 0.2)',
        color: 'var(--vapor-text, #eaeaea)',
      },

      // Button styles
      '.vapor-btn': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--vapor-background, #0d0221)',
        backgroundColor: 'var(--vapor-neon1, #00fff5)',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5), 0 0 20px var(--vapor-neon1, #00fff5)',
        '&:hover': {
          backgroundColor: 'var(--vapor-neon2, #ff00ff)',
          boxShadow: '0 0 15px var(--vapor-neon2, #ff00ff), 0 0 30px var(--vapor-neon2, #ff00ff)',
        },
      },

      '.vapor-btn-outline': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--vapor-neon1, #00fff5)',
        backgroundColor: 'transparent',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        '&:hover': {
          color: 'var(--vapor-background, #0d0221)',
          backgroundColor: 'var(--vapor-neon1, #00fff5)',
          boxShadow: '0 0 20px var(--vapor-neon1, #00fff5), 0 0 40px var(--vapor-neon1, #00fff5)',
        },
      },

      // Scanline overlay effect
      '.vapor-scanlines': {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)',
          pointerEvents: 'none',
          zIndex: '10',
        },
      },

      // Chrome text effect
      '.vapor-chrome': {
        background:
          'linear-gradient(180deg, #fff 0%, #d4d4d8 25%, #fff 50%, #a1a1aa 75%, #fff 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))',
      },

      // ==========================================
      // Phase 2 Components
      // ==========================================

      // Badge component
      '.vapor-badge': {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--vapor-neon1, #00fff5)',
        backgroundColor: 'rgba(0, 255, 245, 0.1)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '9999px',
        boxShadow: '0 0 5px var(--vapor-neon1, #00fff5)',
      },

      '.vapor-badge-secondary': {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--vapor-neon2, #ff00ff)',
        backgroundColor: 'rgba(255, 0, 255, 0.1)',
        border: '1px solid var(--vapor-neon2, #ff00ff)',
        borderRadius: '9999px',
        boxShadow: '0 0 5px var(--vapor-neon2, #ff00ff)',
      },

      // Alert components
      '.vapor-alert': {
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        color: 'var(--vapor-text, #eaeaea)',
        boxShadow: '0 0 10px rgba(0, 255, 245, 0.2)',
      },

      '.vapor-alert-warning': {
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(255, 107, 53, 0.1)',
        border: '1px solid #ff6b35',
        color: '#ff6b35',
        boxShadow: '0 0 10px rgba(255, 107, 53, 0.2)',
      },

      '.vapor-alert-success': {
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(57, 255, 20, 0.1)',
        border: '1px solid #39ff14',
        color: '#39ff14',
        boxShadow: '0 0 10px rgba(57, 255, 20, 0.2)',
      },

      '.vapor-alert-error': {
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(255, 68, 68, 0.1)',
        border: '1px solid #ff4444',
        color: '#ff4444',
        boxShadow: '0 0 10px rgba(255, 68, 68, 0.2)',
      },

      // Input component
      '.vapor-input': {
        width: '100%',
        padding: '0.75rem 1rem',
        fontSize: '0.875rem',
        color: 'var(--vapor-text, #eaeaea)',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.25rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        '&:focus': {
          boxShadow: '0 0 0 2px var(--vapor-background, #0d0221), 0 0 0 4px var(--vapor-neon1, #00fff5), 0 0 20px var(--vapor-neon1, #00fff5)',
          borderColor: 'var(--vapor-neon1, #00fff5)',
        },
        '&::placeholder': {
          color: 'rgba(224, 224, 255, 0.5)',
        },
      },

      // Textarea component
      '.vapor-textarea': {
        width: '100%',
        padding: '0.75rem 1rem',
        fontSize: '0.875rem',
        color: 'var(--vapor-text, #eaeaea)',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.25rem',
        outline: 'none',
        resize: 'vertical',
        minHeight: '100px',
        transition: 'all 0.3s ease',
        '&:focus': {
          boxShadow: '0 0 0 2px var(--vapor-background, #0d0221), 0 0 0 4px var(--vapor-neon1, #00fff5), 0 0 20px var(--vapor-neon1, #00fff5)',
          borderColor: 'var(--vapor-neon1, #00fff5)',
        },
        '&::placeholder': {
          color: 'rgba(224, 224, 255, 0.5)',
        },
      },

      // Toggle switch
      '.vapor-toggle': {
        position: 'relative',
        display: 'inline-block',
        width: '48px',
        height: '24px',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '24px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '2px',
          left: '2px',
          width: '16px',
          height: '16px',
          backgroundColor: 'var(--vapor-neon1, #00fff5)',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 5px var(--vapor-neon1, #00fff5)',
        },
      },

      '.vapor-toggle-active': {
        backgroundColor: 'var(--vapor-neon1, #00fff5)',
        '&::after': {
          left: '26px',
          backgroundColor: 'var(--vapor-background, #0d0221)',
        },
      },

      // Progress bar
      '.vapor-progress': {
        position: 'relative',
        width: '100%',
        height: '8px',
        backgroundColor: 'var(--vapor-surface, #190535)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid var(--vapor-neon1, #00fff5)',
      },

      '.vapor-progress-bar': {
        height: '100%',
        background: 'linear-gradient(90deg, var(--vapor-neon1, #00fff5), var(--vapor-neon2, #ff00ff))',
        borderRadius: '4px',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        transition: 'width 0.3s ease',
      },

      // Divider
      '.vapor-divider': {
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--vapor-neon1, #00fff5), transparent)',
        margin: '1.5rem 0',
      },

      '.vapor-divider-vertical': {
        width: '1px',
        height: '100%',
        background: 'linear-gradient(180deg, transparent, var(--vapor-neon1, #00fff5), transparent)',
        margin: '0 1.5rem',
      },

      // Avatar
      '.vapor-avatar': {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        overflow: 'hidden',
        color: 'var(--vapor-neon1, #00fff5)',
        fontWeight: '700',
        fontSize: '1.25rem',
      },

      '.vapor-avatar-sm': {
        width: '32px',
        height: '32px',
        fontSize: '0.875rem',
      },

      '.vapor-avatar-lg': {
        width: '64px',
        height: '64px',
        fontSize: '1.5rem',
      },

      // Navbar
      '.vapor-navbar': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(13, 2, 33, 0.9)',
        borderBottom: '1px solid var(--vapor-neon1, #00fff5)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      },

      '.vapor-navbar-brand': {
        fontSize: '1.5rem',
        fontFamily: theme('fontFamily.vaporDisplay'),
        fontWeight: '700',
        color: 'var(--vapor-neon1, #00fff5)',
        textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
      },

      '.vapor-navbar-link': {
        padding: '0.5rem 1rem',
        color: 'var(--vapor-text, #eaeaea)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: 'var(--vapor-neon1, #00fff5)',
          textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        },
      },

      // Footer
      '.vapor-footer': {
        padding: '3rem 2rem',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        borderTop: '1px solid var(--vapor-neon1, #00fff5)',
        color: 'var(--vapor-text, #eaeaea)',
      },

      // Tooltip
      '.vapor-tooltip': {
        position: 'relative',
        '&::after': {
          content: 'attr(data-tooltip)',
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-8px)',
          padding: '0.5rem 1rem',
          fontSize: '0.75rem',
          whiteSpace: 'nowrap',
          color: 'var(--vapor-text, #eaeaea)',
          backgroundColor: 'var(--vapor-surface, #190535)',
          border: '1px solid var(--vapor-neon1, #00fff5)',
          borderRadius: '0.25rem',
          boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
          opacity: '0',
          visibility: 'hidden',
          transition: 'all 0.2s ease',
          zIndex: '100',
        },
        '&:hover::after': {
          opacity: '1',
          visibility: 'visible',
        },
      },

      // Loading spinner
      '.vapor-loading': {
        display: 'inline-block',
        width: '40px',
        height: '40px',
        border: '3px solid var(--vapor-surface, #190535)',
        borderTop: '3px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '50%',
        animation: 'rotate-slow 1s linear infinite',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
      },

      '.vapor-loading-sm': {
        width: '24px',
        height: '24px',
        borderWidth: '2px',
      },

      '.vapor-loading-lg': {
        width: '56px',
        height: '56px',
        borderWidth: '4px',
      },

      // Icon box
      '.vapor-icon-box': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.5rem',
        color: 'var(--vapor-neon1, #00fff5)',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'var(--vapor-neon1, #00fff5)',
          color: 'var(--vapor-background, #0d0221)',
        },
      },

      // Stats component
      '.vapor-stats': {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 255, 245, 0.2)',
      },

      '.vapor-stat': {
        textAlign: 'center',
      },

      '.vapor-stat-value': {
        fontSize: '2rem',
        fontWeight: '700',
        fontFamily: theme('fontFamily.vaporDisplay'),
        color: 'var(--vapor-neon1, #00fff5)',
        textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
      },

      '.vapor-stat-label': {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--vapor-text, #eaeaea)',
        opacity: '0.7',
      },

      // Panel/Modal
      '.vapor-panel': {
        padding: '2rem',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.5rem',
        boxShadow: '0 0 30px rgba(0, 255, 245, 0.3), 0 0 60px rgba(0, 0, 0, 0.5)',
      },

      // Tab component
      '.vapor-tabs': {
        display: 'flex',
        gap: '0',
        borderBottom: '1px solid var(--vapor-neon1, #00fff5)',
      },

      '.vapor-tab': {
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--vapor-text, #eaeaea)',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          color: 'var(--vapor-neon1, #00fff5)',
        },
      },

      '.vapor-tab-active': {
        color: 'var(--vapor-neon1, #00fff5)',
        borderBottom: '2px solid var(--vapor-neon1, #00fff5)',
        textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
      },

      // Table styles
      '.vapor-table': {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'var(--vapor-surface, #190535)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.5rem',
        overflow: 'hidden',
      },

      '.vapor-table th': {
        padding: '1rem',
        textAlign: 'left',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--vapor-neon1, #00fff5)',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        borderBottom: '1px solid var(--vapor-neon1, #00fff5)',
      },

      '.vapor-table td': {
        padding: '1rem',
        color: 'var(--vapor-text, #eaeaea)',
        borderBottom: '1px solid rgba(0, 255, 245, 0.2)',
      },

      '.vapor-table tr:last-child td': {
        borderBottom: 'none',
      },

      '.vapor-table tr:hover td': {
        backgroundColor: 'rgba(0, 255, 245, 0.05)',
      },

      // Starfield background
      '.vapor-starfield': {
        position: 'relative',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: `radial-gradient(2px 2px at 20px 30px, var(--vapor-neon1, #00fff5), transparent),
                       radial-gradient(2px 2px at 40px 70px, var(--vapor-neon2, #ff00ff), transparent),
                       radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                       radial-gradient(2px 2px at 160px 120px, var(--vapor-neon1, #00fff5), transparent),
                       radial-gradient(1px 1px at 230px 80px, #fff, transparent),
                       radial-gradient(2px 2px at 300px 150px, var(--vapor-neon2, #ff00ff), transparent),
                       radial-gradient(1px 1px at 350px 50px, #fff, transparent),
                       radial-gradient(2px 2px at 420px 180px, var(--vapor-neon1, #00fff5), transparent)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '450px 200px',
          animation: 'star-twinkle 3s ease-in-out infinite',
        },
      },

      // Holographic card
      '.vapor-holographic': {
        background:
          'linear-gradient(135deg, rgba(255,0,255,0.3) 0%, rgba(0,255,245,0.3) 25%, rgba(139,92,246,0.3) 50%, rgba(255,0,255,0.3) 75%, rgba(0,255,245,0.3) 100%)',
        backgroundSize: '400% 400%',
        animation: 'holographic 3s ease-in-out infinite',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.5rem',
        boxShadow: '0 0 20px rgba(0, 255, 245, 0.3)',
      },

      // Laser grid
      '.vapor-laser-grid': {
        position: 'relative',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '-100%',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(90deg, transparent, var(--vapor-neon1, #00fff5), transparent)',
          animation: 'laser-scan 2s linear infinite',
        },
      },

      // Outrun gradient
      '.vapor-outrun': {
        background: 'linear-gradient(180deg, #0c0c1e 0%, #1a1a3e 30%, #7b42ff 60%, #ff2d95 80%, #fff020 100%)',
      },

      // Arcade style
      '.vapor-arcade': {
        fontFamily: '"Share Tech Mono", monospace',
        backgroundColor: '#0a0a0a',
        border: '4px solid #39ff14',
        boxShadow: '0 0 20px #39ff14, inset 0 0 20px rgba(57, 255, 20, 0.1)',
        padding: '1rem',
        borderRadius: '0',
      },

      // Cyber noir style
      '.vapor-noir': {
        backgroundColor: '#0d0d0d',
        border: '1px solid #ff4444',
        boxShadow: '0 0 20px rgba(255, 68, 68, 0.3)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(180deg, rgba(255, 68, 68, 0.1), transparent)',
          pointerEvents: 'none',
        },
      },

      // Glitch effect container
      '.vapor-glitch': {
        position: 'relative',
        '&::before, &::after': {
          content: 'attr(data-text)',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        },
        '&::before': {
          animation: 'glitch 0.3s ease-in-out infinite',
          color: 'var(--vapor-neon1, #00fff5)',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        },
        '&::after': {
          animation: 'glitch 0.3s ease-in-out infinite reverse',
          color: 'var(--vapor-neon2, #ff00ff)',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        },
      },

      // Gradient button styles
      '.vapor-btn-gradient': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#fff',
        background: 'linear-gradient(135deg, var(--vapor-neon1, #00fff5), var(--vapor-neon2, #ff00ff))',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 20px rgba(0, 255, 245, 0.3), 0 0 20px rgba(255, 0, 255, 0.3)',
        '&:hover': {
          background: 'linear-gradient(135deg, var(--vapor-neon2, #ff00ff), var(--vapor-neon1, #00fff5))',
          boxShadow: '0 0 30px rgba(0, 255, 245, 0.5), 0 0 30px rgba(255, 0, 255, 0.5)',
        },
      },

      // Pill button
      '.vapor-btn-pill': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem 2rem',
        fontSize: '0.875rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--vapor-neon1, #00fff5)',
        backgroundColor: 'transparent',
        border: '2px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        '&:hover': {
          color: 'var(--vapor-background, #0d0221)',
          backgroundColor: 'var(--vapor-neon1, #00fff5)',
          boxShadow: '0 0 20px var(--vapor-neon1, #00fff5), 0 0 40px var(--vapor-neon1, #00fff5)',
        },
      },

      // Code block
      '.vapor-code': {
        display: 'block',
        padding: '1rem',
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: '0.875rem',
        color: 'var(--vapor-neon1, #00fff5)',
        backgroundColor: 'var(--vapor-background, #0d0221)',
        border: '1px solid var(--vapor-neon1, #00fff5)',
        borderRadius: '0.25rem',
        overflow: 'auto',
      },

      // Inline code
      '.vapor-code-inline': {
        display: 'inline',
        padding: '0.125rem 0.375rem',
        fontFamily: '"Share Tech Mono", monospace',
        fontSize: '0.875rem',
        color: 'var(--vapor-neon2, #ff00ff)',
        backgroundColor: 'rgba(255, 0, 255, 0.1)',
        borderRadius: '0.25rem',
      },

      // Quote/Blockquote
      '.vapor-quote': {
        padding: '1rem 1.5rem',
        borderLeft: '4px solid var(--vapor-neon1, #00fff5)',
        backgroundColor: 'var(--vapor-surface, #190535)',
        color: 'var(--vapor-text, #eaeaea)',
        fontStyle: 'italic',
        boxShadow: '0 0 10px rgba(0, 255, 245, 0.1)',
      },

      // List styles
      '.vapor-list': {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        '& li': {
          position: 'relative',
          paddingLeft: '1.5rem',
          marginBottom: '0.5rem',
          color: 'var(--vapor-text, #eaeaea)',
          '&::before': {
            content: '"▸"',
            position: 'absolute',
            left: '0',
            color: 'var(--vapor-neon1, #00fff5)',
          },
        },
      },

      // Link style
      '.vapor-link': {
        color: 'var(--vapor-neon1, #00fff5)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
        },
      },
    });

    // Utility classes
    addUtilities({
      // Glow effects
      '.glow-sm': {
        boxShadow: '0 0 5px var(--vapor-glow-color, #00fff5)',
      },
      '.glow': {
        boxShadow:
          '0 0 10px var(--vapor-glow-color, #00fff5), 0 0 20px var(--vapor-glow-color, #00fff5)',
      },
      '.glow-lg': {
        boxShadow:
          '0 0 20px var(--vapor-glow-color, #00fff5), 0 0 40px var(--vapor-glow-color, #00fff5), 0 0 60px var(--vapor-glow-color, #00fff5)',
      },
      '.glow-xl': {
        boxShadow:
          '0 0 30px var(--vapor-glow-color, #00fff5), 0 0 60px var(--vapor-glow-color, #00fff5), 0 0 90px var(--vapor-glow-color, #00fff5)',
      },

      // Text glow effects
      '.text-glow-sm': {
        textShadow: '0 0 5px var(--vapor-glow-color, #00fff5)',
      },
      '.text-glow': {
        textShadow:
          '0 0 7px var(--vapor-glow-color, #00fff5), 0 0 10px var(--vapor-glow-color, #00fff5), 0 0 21px var(--vapor-glow-color, #00fff5)',
      },
      '.text-glow-lg': {
        textShadow:
          '0 0 7px var(--vapor-glow-color, #00fff5), 0 0 10px var(--vapor-glow-color, #00fff5), 0 0 21px var(--vapor-glow-color, #00fff5), 0 0 42px var(--vapor-glow-color, #00fff5), 0 0 82px var(--vapor-glow-color, #00fff5)',
      },

      // Background utilities
      '.bg-vapor': {
        backgroundColor: 'var(--vapor-background, #0d0221)',
      },
      '.bg-vapor-surface': {
        backgroundColor: 'var(--vapor-surface, #190535)',
      },

      // Border utilities
      '.border-vapor': {
        borderColor: 'var(--vapor-neon1, #00fff5)',
      },
      '.border-vapor-secondary': {
        borderColor: 'var(--vapor-neon2, #ff00ff)',
      },

      // Text color utilities using CSS variables
      '.text-vapor-primary': {
        color: 'var(--vapor-primary)',
      },
      '.text-vapor-secondary': {
        color: 'var(--vapor-secondary)',
      },
      '.text-vapor-accent': {
        color: 'var(--vapor-accent)',
      },

      // ==========================================
      // Phase 2 Utilities
      // ==========================================

      // Double glow effect
      '.glow-double': {
        boxShadow:
          '0 0 10px var(--vapor-neon1, #00fff5), 0 0 20px var(--vapor-neon1, #00fff5), 0 0 10px var(--vapor-neon2, #ff00ff), 0 0 40px var(--vapor-neon2, #ff00ff)',
      },

      // Rainbow glow
      '.glow-rainbow': {
        boxShadow:
          '0 0 10px #ff0000, 0 0 20px #ff7f00, 0 0 30px #ffff00, 0 0 40px #00ff00, 0 0 50px #0000ff, 0 0 60px #8b00ff',
      },

      // Pulse ring effect (use with ::before pseudo element)
      '.pulse-ring': {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          border: '2px solid var(--vapor-neon1, #00fff5)',
          animation: 'pulse-ring 1.5s ease-out infinite',
        },
      },

      // Gradient text variations
      '.gradient-text-vapor': {
        background: 'linear-gradient(90deg, var(--vapor-neon1, #00fff5), var(--vapor-neon2, #ff00ff))',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },

      '.gradient-text-sunset': {
        background: 'linear-gradient(90deg, #ff6b35, #ff2e63, #7b2cbf)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },

      '.gradient-text-rainbow': {
        background: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },

      '.gradient-text-outrun': {
        background: 'linear-gradient(90deg, #ff2d95, #7b42ff, #00d4ff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },

      // Retro outline text
      '.retro-outline': {
        color: 'transparent',
        WebkitTextStroke: '2px var(--vapor-neon1, #00fff5)',
        textShadow: '0 0 10px var(--vapor-neon1, #00fff5)',
      },

      '.retro-outline-thick': {
        color: 'transparent',
        WebkitTextStroke: '3px var(--vapor-neon1, #00fff5)',
        textShadow: '0 0 20px var(--vapor-neon1, #00fff5)',
      },

      // Double border neon
      '.border-neon-double': {
        border: '2px solid var(--vapor-neon1, #00fff5)',
        boxShadow:
          '0 0 0 4px var(--vapor-background, #0d0221), 0 0 0 6px var(--vapor-neon2, #ff00ff), 0 0 20px var(--vapor-neon1, #00fff5)',
      },

      // Animated border
      '.border-neon-pulse': {
        border: '2px solid var(--vapor-neon1, #00fff5)',
        animation: 'neon-breathe 4s ease-in-out infinite',
      },

      // Tertiary text color
      '.text-vapor-tertiary': {
        color: 'var(--vapor-tertiary, var(--vapor-accent))',
      },

      // Backdrop utilities
      '.backdrop-vapor': {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(13, 2, 33, 0.8)',
      },

      '.backdrop-vapor-heavy': {
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(13, 2, 33, 0.95)',
      },

      // Reduced motion safe
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
        },
      },

      // CRT effect
      '.crt-effect': {
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)',
          pointerEvents: 'none',
          zIndex: '10',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
          pointerEvents: 'none',
          zIndex: '11',
        },
      },

      // Vignette effect
      '.vignette': {
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.7) 100%)',
          pointerEvents: 'none',
        },
      },

      // Clip path utilities
      '.clip-chevron': {
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
      },

      '.clip-slant': {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 90%)',
      },

      '.clip-diamond': {
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      },

      '.clip-hexagon': {
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      },

      // Filter utilities
      '.filter-neon': {
        filter: 'brightness(1.2) saturate(1.5)',
      },

      '.filter-chrome': {
        filter: 'brightness(1.1) contrast(1.2)',
      },

      '.filter-noir': {
        filter: 'contrast(1.3) brightness(0.9)',
      },

      // Aspect ratio decorative
      '.aspect-vhs': {
        aspectRatio: '4 / 3',
      },

      '.aspect-widescreen': {
        aspectRatio: '21 / 9',
      },

      // Skew utilities
      '.skew-neon': {
        transform: 'skewX(-3deg)',
      },

      '.skew-neon-reverse': {
        transform: 'skewX(3deg)',
      },

      // Selection styling
      '.selection-neon::selection': {
        backgroundColor: 'var(--vapor-neon1, #00fff5)',
        color: 'var(--vapor-background, #0d0221)',
      },

      // Focus ring
      '.focus-neon:focus': {
        outline: 'none',
        boxShadow: '0 0 0 2px var(--vapor-background, #0d0221), 0 0 0 4px var(--vapor-neon1, #00fff5), 0 0 20px var(--vapor-neon1, #00fff5)',
      },
    });

    // Match utilities for custom glow colors
    matchUtilities(
      {
        glow: (value) => ({
          '--vapor-glow-color': value,
          boxShadow: `0 0 10px ${value}, 0 0 20px ${value}`,
        }),
        'text-glow': (value) => ({
          textShadow: `0 0 7px ${value}, 0 0 10px ${value}, 0 0 21px ${value}`,
        }),
      },
      { values: theme('colors.vapor') }
    );
  },
  {
    // Plugin configuration - extends Tailwind's default config
    theme: {
      extend: {
        colors: extendedColors,
        fontFamily: {
          vapor: ['"Rajdhani"', '"Orbitron"', 'sans-serif'],
          vaporDisplay: ['"Orbitron"', '"Audiowide"', 'sans-serif'],
          vaporMono: ['"Share Tech Mono"', 'monospace'],
        },
        animation: animations,
        keyframes: keyframes,
        backgroundImage: {
          'vapor-gradient':
            'linear-gradient(180deg, var(--vapor-neon1) 0%, var(--vapor-neon2) 100%)',
          'sunset-gradient':
            'linear-gradient(180deg, #ff6b35 0%, #ff2e63 35%, #7b2cbf 70%, #1a1a2e 100%)',
          'night-sky': 'linear-gradient(180deg, #0d0221 0%, #190535 50%, #7b2cbf 100%)',
          'cyber-grid': `
            linear-gradient(var(--vapor-grid-color, #00fff5) 1px, transparent 1px),
            linear-gradient(90deg, var(--vapor-grid-color, #00fff5) 1px, transparent 1px)
          `,
          // Phase 2 background images
          'outrun-gradient':
            'linear-gradient(180deg, #0c0c1e 0%, #1a1a3e 30%, #7b42ff 60%, #ff2d95 80%, #fff020 100%)',
          'arcade-gradient':
            'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #39ff14 100%)',
          'cyber-noir-gradient':
            'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 50%, #ff4444 100%)',
          'holographic':
            'linear-gradient(135deg, rgba(255,0,255,0.5) 0%, rgba(0,255,245,0.5) 25%, rgba(139,92,246,0.5) 50%, rgba(255,0,255,0.5) 75%, rgba(0,255,245,0.5) 100%)',
          'rainbow':
            'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)',
          'miami-gradient':
            'linear-gradient(180deg, #011627 0%, #023047 30%, #41ead4 70%, #ff6eff 100%)',
          'digital-gradient':
            'linear-gradient(180deg, #0f0f23 0%, #1e1b4b 40%, #8b5cf6 70%, #06b6d4 100%)',
          'midnight-gradient':
            'linear-gradient(180deg, #0a0a0f 0%, #18181b 40%, #64ffda 70%, #a78bfa 100%)',
        },
        boxShadow: {
          neon: '0 0 5px var(--vapor-neon1), 0 0 20px var(--vapor-neon1)',
          'neon-lg':
            '0 0 10px var(--vapor-neon1), 0 0 40px var(--vapor-neon1), 0 0 80px var(--vapor-neon1)',
          'neon-secondary': '0 0 5px var(--vapor-neon2), 0 0 20px var(--vapor-neon2)',
          'neon-secondary-lg':
            '0 0 10px var(--vapor-neon2), 0 0 40px var(--vapor-neon2), 0 0 80px var(--vapor-neon2)',
          // Phase 2 box shadows
          'neon-dual':
            '0 0 10px var(--vapor-neon1), 0 0 20px var(--vapor-neon1), 0 0 10px var(--vapor-neon2), 0 0 40px var(--vapor-neon2)',
          'neon-inset':
            'inset 0 0 10px var(--vapor-neon1), inset 0 0 20px var(--vapor-neon1)',
          arcade: '0 0 20px #39ff14, inset 0 0 20px rgba(57, 255, 20, 0.1)',
          'cyber-noir': '0 0 20px rgba(255, 68, 68, 0.3), 0 0 40px rgba(255, 68, 68, 0.2)',
          holographic: '0 0 20px rgba(255, 0, 255, 0.3), 0 0 40px rgba(0, 255, 245, 0.3)',
          'neon-xl':
            '0 0 20px var(--vapor-neon1), 0 0 40px var(--vapor-neon1), 0 0 80px var(--vapor-neon1), 0 0 120px var(--vapor-neon1)',
        },
        dropShadow: {
          neon: '0 0 10px var(--vapor-neon1)',
          'neon-lg': '0 0 20px var(--vapor-neon1)',
          'neon-secondary': '0 0 10px var(--vapor-neon2)',
          // Phase 2 drop shadows
          'neon-xl': '0 0 30px var(--vapor-neon1)',
          dual: '0 0 10px var(--vapor-neon1), 0 0 20px var(--vapor-neon2)',
        },
        // Phase 2: Border radius additions
        borderRadius: {
          vapor: '0.5rem',
          'vapor-lg': '1rem',
          arcade: '0',
        },
        // Phase 2: Spacing additions
        spacing: {
          vapor: '1.5rem',
          'vapor-lg': '3rem',
          'vapor-xl': '6rem',
        },
      },
    },
  }
);

// Export individual themes for direct use
module.exports = tailVapor;
module.exports.themes = themes;
module.exports.colors = extendedColors;

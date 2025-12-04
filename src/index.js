/**
 * Tail Vapor - Vaporwave/Synthwave/Cyberpunk 80s Retro Tailwind CSS Theme
 *
 * A nostalgic journey to neon-lit cities, sunset horizons, and retro-futuristic dreams.
 * Features 5 unique theme variations with custom colors, glow effects, and animations.
 */

const plugin = require('tailwindcss/plugin');

/**
 * Theme color palettes - 5 variations of vaporwave aesthetics
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

    // Background variations
    night: '#0d0221',
    midnight: '#0a0a0f',
    deepBlue: '#1a1a2e',
    darkPurple: '#190535',
    darkTeal: '#011627',

    // Sunset gradient colors
    sunsetStart: '#ff6b35',
    sunsetMid: '#ff2e63',
    sunsetEnd: '#7b2cbf',
  },

  // Individual theme palettes
  sunset: themes.sunset,
  neonCity: themes.neonCity,
  miamiVice: themes.miamiVice,
  digitalDreams: themes.digitalDreams,
  midnightChrome: themes.midnightChrome,
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
        },
        boxShadow: {
          neon: '0 0 5px var(--vapor-neon1), 0 0 20px var(--vapor-neon1)',
          'neon-lg':
            '0 0 10px var(--vapor-neon1), 0 0 40px var(--vapor-neon1), 0 0 80px var(--vapor-neon1)',
          'neon-secondary': '0 0 5px var(--vapor-neon2), 0 0 20px var(--vapor-neon2)',
          'neon-secondary-lg':
            '0 0 10px var(--vapor-neon2), 0 0 40px var(--vapor-neon2), 0 0 80px var(--vapor-neon2)',
        },
        dropShadow: {
          neon: '0 0 10px var(--vapor-neon1)',
          'neon-lg': '0 0 20px var(--vapor-neon1)',
          'neon-secondary': '0 0 10px var(--vapor-neon2)',
        },
      },
    },
  }
);

// Export individual themes for direct use
module.exports = tailVapor;
module.exports.themes = themes;
module.exports.colors = extendedColors;

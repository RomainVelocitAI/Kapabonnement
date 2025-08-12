/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'digiqo-primary': '#8B1431',
  			'digiqo-primary-light': '#A51844',
  			'digiqo-primary-dark': '#6B0F26',
  			'digiqo-accent': '#DA6530',
  			'digiqo-accent-light': '#E67A47',
  			'digiqo-accent-dark': '#C5521F',
  			'digiqo-secondary': '#199CB7',
  			'digiqo-secondary-dark': '#127387',
  			'digiqo-white': '#FFFFFF',
  			'digiqo-gray-light': '#F8F9FA',
  			'digiqo-gray': '#E9E9E9',
  			'digiqo-gray-dark': '#6C757D',
  			'digiqo-black': '#212529',
  			'digiqo-orange': '#DA6530',
  			'digiqo-blue-light': '#199CB7',
  			'digiqo-blue-dark': '#127387',
  			'digiqo-bordeaux': '#8B1431',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-montserrat)',
  				'Montserrat',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-montserrat)',
  				'Montserrat',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'var(--font-lora)',
  				'Lora',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'var(--font-inter)',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			xs: [
  				'0.75rem',
  				{
  					lineHeight: '1rem',
  					letterSpacing: '0.02em'
  				}
  			],
  			sm: [
  				'0.875rem',
  				{
  					lineHeight: '1.25rem',
  					letterSpacing: '0.01em'
  				}
  			],
  			base: [
  				'1rem',
  				{
  					lineHeight: '1.5rem',
  					letterSpacing: '0'
  				}
  			],
  			lg: [
  				'1.125rem',
  				{
  					lineHeight: '1.75rem',
  					letterSpacing: '-0.01em'
  				}
  			],
  			xl: [
  				'1.25rem',
  				{
  					lineHeight: '1.75rem',
  					letterSpacing: '-0.01em'
  				}
  			],
  			'2xl': [
  				'1.5rem',
  				{
  					lineHeight: '2rem',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'3xl': [
  				'1.875rem',
  				{
  					lineHeight: '2.25rem',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'4xl': [
  				'2.25rem',
  				{
  					lineHeight: '2.5rem',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'5xl': [
  				'3rem',
  				{
  					lineHeight: '1.16',
  					letterSpacing: '-0.03em'
  				}
  			],
  			'6xl': [
  				'3.75rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.04em'
  				}
  			],
  			'7xl': [
  				'4.5rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.04em'
  				}
  			],
  			'8xl': [
  				'6rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.04em'
  				}
  			],
  			'9xl': [
  				'8rem',
  				{
  					lineHeight: '1',
  					letterSpacing: '-0.04em'
  				}
  			]
  		},
  		fontWeight: {
  			thin: '300',
  			light: '400',
  			normal: '500',
  			medium: '600',
  			semibold: '700',
  			bold: '800',
  			extrabold: '900'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			glow: 'glow 2s ease-in-out infinite alternate',
  			'glow-orange': 'glowOrange 2s ease-in-out infinite alternate',
  			'slide-up': 'slideUp 0.5s ease-out',
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
  			ripple: 'ripple 0.6s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			glow: {
  				from: {
  					boxShadow: '0 0 10px -10px #8B1431'
  				},
  				to: {
  					boxShadow: '0 0 20px 10px #8B1431'
  				}
  			},
  			glowOrange: {
  				from: {
  					boxShadow: '0 0 10px -10px #DA6530'
  				},
  				to: {
  					boxShadow: '0 0 30px 15px rgba(218, 101, 48, 0.3)'
  				}
  			},
  			pulseSubtle: {
  				'0%, 100%': {
  					opacity: 1,
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: 0.8,
  					transform: 'scale(0.98)'
  				}
  			},
  			ripple: {
  				'0%': {
  					transform: 'scale(0.8)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'scale(2)',
  					opacity: 0
  				}
  			},
  			slideUp: {
  				from: {
  					transform: 'translateY(100px)',
  					opacity: 0
  				},
  				to: {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
  			fadeIn: {
  				from: {
  					opacity: 0
  				},
  				to: {
  					opacity: 1
  				}
  			}
  		},
  		backgroundImage: {
  			'gradient-digiqo': 'linear-gradient(135deg, #8B1431 0%, #6B0F26 100%)',
  			'gradient-digiqo-reverse': 'linear-gradient(135deg, #6B0F26 0%, #8B1431 100%)',
  			'gradient-accent': 'linear-gradient(135deg, #DA6530 0%, #C5521F 100%)',
  			'gradient-secondary': 'linear-gradient(135deg, #199CB7 0%, #127387 100%)',
  			'gradient-overlay': 'linear-gradient(180deg, transparent 0%, rgba(139, 20, 49, 0.1) 100%)'
  		},
  		boxShadow: {
  			digiqo: '0 8px 24px rgba(139, 20, 49, 0.15)',
  			'digiqo-lg': '0 12px 32px rgba(139, 20, 49, 0.2)',
  			accent: '0 8px 24px rgba(218, 101, 48, 0.3)',
  			'accent-lg': '0 12px 32px rgba(218, 101, 48, 0.4)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
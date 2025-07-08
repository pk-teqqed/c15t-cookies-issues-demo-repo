/** @type {import('tailwindcss').Config} */
const { min } = require('lodash')
const plugin = require('tailwindcss/plugin')
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	screens: {
  		xl: {
  			max: '1440px'
  		},
  		lg: {
  			max: '1024px'
  		},
  		md: {
  			max: '768px'
  		},
  		xmd: {
  			max: '576px'
  		},
  		tab: {
  			max: '1100px'
  		},
  		sm: {
  			max: '425px'
  		},
  		xs: {
  			max: '375px'
  		},
  		'-md': {
  			min: '768px'
  		},
  		'-lg': {
  			min: '1024px'
  		}
  	},
  	extend: {
  		lineClamp: {
  			'10': '10'
  		},
      backgroundImage:{
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 62.11%, rgba(0, 0, 0, 0.5) 83.3%);',
        'custom-gradient-mobile': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 36.55%, rgba(0, 0, 0, 0.5) 54.48%);',
      },
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			link: '#0676FA',
  			textblack: '#000',
  			textblackOpacity: 'rgba(0, 0, 0, 0.60)',
        whiteOpacity:'rgba(255, 255, 255, 0.20)',
  			borderColor: '#E5E5E5',
  			black200: '#222',
  			borderLight: 'rgba(0, 0, 0, 0.11)',
  			'primary-light': '#403F3F',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			gray: {
  				'100': '#FAFAFA',
  				'200': '#F5F5F5',
  				'300': '#EFEFEF',
  				'400': '#B3B2B2',
  				'500': '#9C9C9C',
  				'600': '#767676',
  				'700': '#403F3F',
  				'800': 'E9E9E9'
  			},
  			'gray-iron': {
  				'300': '#D1D1D6',
  				'500': '#70707B',
  				'800': '#26272B'
  			},
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
  		fontSize: {
  			'3xl': '32px'
  		},
      boxShadow: {
        'custom': '0px 4px 26.7px -2px rgba(0, 0, 0, 0.44)', // Custom shadow similar to the one you defined
      },
      backdropBlur: {
        'custom': '16.4px', // Custom backdrop blur value
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        '5xl':'0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      },
  	}
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/typography'),
    plugin(({ addComponents }) => {
      addComponents({
        '.heading-1': {
          'font-weight': 590,
          'font-size': '40px',
          'line-height': '56px',
          'font-family': 'Inter',
        },
        '.heading-2': {
          'font-weight': 600,
          'font-size': '44px',
          'line-height': '48px',
          'font-family': 'Inter',
        },
        '.heading-6': {
          'font-weight': 700,
          'font-size': '48px',
          'line-height': '64px',
          'font-family': 'Inter',
        },
        '.heading-7': {
          'font-weight': 600,
          'font-size': '36px',
          'line-height': '44px',
          'font-family': 'Inter',
          'letter-spacing': '-0.02em'
        },
        '.heading-3': {
          'font-weight': 600,
          'font-size': '28px',
          'line-height': '38px',
          'font-family': 'Inter',
        },
        '.heading-4': {
          'font-weight': 600,
          'font-size': '20px',
          'line-height': '24px',
          'font-family': 'Inter',
        },
        '.heading-5': {
          'font-weight': 590,
          'font-size': '24px',
          'line-height': '32px',
          'font-family': 'Inter',
        },
        '.title': {
          'font-weight': 590,
          'font-size': '64px',
          'line-height': '72px',
          'font-family': 'Inter',
          'letter-spacing': '-0.96px',
        },
        '.subtitle-500': {
          'font-family': 'Inter',
          'font-size': '24px',
          'font-style': 'normal',
          'font-weight': 510,
          'line-height': '32px',
        },
        '.subtitle-600': {
          'font-family': 'Inter',
          'font-size': '24px',
          'font-style': 'normal',
          'font-weight': 600,
          'line-height': '32px',
        },
        '.container-lg': {
          'max-width': '1360px',
          width: '100%',
          margin: '0 auto',
          padding: '0 20px',
        },
        '.body-md-400': {
          'font-family': 'Inter',
          'font-size': '16px',
          'font-weight': 400,
          'line-height': '24px',
        },
        '.body-xl-bold': {
          'font-family': 'Inter',
          'font-size': '20px',
          'font-weight': 590,
          'line-height': '24px',
        },
        '.body-lg-400': {
          'font-family': 'Inter',
          'font-size': '18px',
          'font-weight': 400,
          'line-height': '28px',
        },
        '.body-md-500': {
          'font-family': 'Inter',
          'font-size': '16px',
          'font-weight': 500,
          'line-height': '24px',
        },
        '.body-md-600': {
          'font-family': 'Inter',
          'font-size': '16px',
          'font-weight': 600,
          'line-height': '24px',
        },
        '.body-sm-590': {
          'font-family': 'Inter',
          'font-size': '14px',
          'font-weight': 500,
          'line-height': '24px',
        },
        '.body-sm-400': {
          'font-family': 'Inter',
          'font-size': '14px',
          'font-weight': 400,
          'line-height': '24px',
        },
        '.font-inter': {
          'font-family': 'Inter',
        },
        '.font-sfpro': {
          'font-family': 'SF Pro',
        },
      })
    }),
      require("tailwindcss-animate")
],
}

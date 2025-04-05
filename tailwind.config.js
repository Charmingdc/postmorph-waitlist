/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        foreground: 'hsl(var(--foreground))',
        secondary: 'hsl(var(--secondary))',
        input: 'hsl(var(--ring))',
        ring: 'hsl(var(--ring))',
        muted: 'hsl(210, 20%, 96%)',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        urbanist:['Urbanist', 'sans-serif']
      },
      backgroundImage: {
				   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			   	'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231E88E5' fill-opacity='0.08' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
			   }
    },
  },
  plugins: [],
};
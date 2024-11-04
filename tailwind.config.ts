import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'solid': '6px 6px black',
      },
      keyframes: {
				fade: {
					from : {opacity: '0',  background: '#000000', transform: 'translateX(-100%)'},
					to: {opacity:'1', background: '#ffffff', transform: 'translateX(0)'}
				}
			},
			animation: {
				'fade': 'fade 350ms ease-in-out'
			}
    },
  },
  plugins: [],
};
export default config;

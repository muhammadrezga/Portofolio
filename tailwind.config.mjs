/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    teal: '#006D77',
                    dark: '#333333',
                    gray: '#555555',
                    light: '#F8F9FA',
                    accent: '#83C5BE'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        }
    },
    plugins: [],
}

import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    include: ['./src/**/*.{vue,js,ts,css}'],
    theme: {
        colors: {
            dark: '#252525',
            carbon: '#333333',
            'medium-gray': '#4B4B4B',
            'light-gray': '#F5F5F5',
            whitesmoke: '#FAFAF8',
            white: '#FFFFFF',
        },
    },
    presets: [
        presetUno,
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                title: ['Outfit', 'sans-serif'],
                base: ['Roboto', 'sans-serif'],
            },
        }),
    ],
    transformers: [transformerVariantGroup()],
    rules: [
        [
            /^stack-(\d+)$/,
            ([, d]) => ({
                display: 'flex',
                'flex-direction': 'column',
                gap: `${parseInt(d) * 0.25}rem`,
            }),
        ],
        [
            /^text-(.*)$/,
            ([, c], { theme }) => {
                if (theme.colors[c]) return { color: theme.colors[c] }
            },
        ],
    ],
})

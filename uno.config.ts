import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: {
        btn: 'flex items-center justify-center py-2 px-4 rounded-2 gap-2 border border-solid',
        'btn-sm': 'text-sm',
        'btn-md': 'text-md',
        'btn-lg': 'text-2xl',
    },
    safelist: [
        'font-title',
        'font-base',
        'font-400',
        'font-500',
        'font-600',
        'font-700',
        'text-medium-gray',
        'text-dark',
        'text-carbon',
        'text-light-gray',
        'text-whitesmoke',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
    ],
    theme: {
        colors: {
            dark: '#252525',
            carbon: '#333333',
            'medium-gray': '#4B4B4B',
            'light-gray': '#F5F5F5',
            whitesmoke: '#FAFAF8',
            white: '#FFFFFF',
        },
        breakpoints: {
            sm: '300px',
            md: '576px',
            lg: '992px',
            xl: '1280px',
            '2xl': '1536px',
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

        [
            /^border-(.*)$/,
            ([, c], { theme }) => {
                if (theme.colors[c]) return { 'border-color': theme.colors[c] }
            },
        ],
    ],
})

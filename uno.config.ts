import {
    defineConfig,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno,
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                primary: ['Outfit', 'sans-serif'],
                secondary: ['Roboto', 'sans-serif'],
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
    ],
})

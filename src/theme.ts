import { createTheme, type MantineColorsTuple } from '@mantine/core'

// Neutral greys from the shadcn "neutral" theme, used for both light and dark mode.
// In dark mode Mantine uses dark[0] for text, dark[2] for dimmed text, dark[4] for borders
// and dark[7] for the page. The matching CSS variables live in src/styles.css.
const neutral: MantineColorsTuple = [
  '#fafafa',
  '#e5e5e5',
  '#a3a3a3',
  '#737373',
  '#525252',
  '#404040',
  '#262626',
  '#171717',
  '#0a0a0a',
  '#000000',
]

export const theme = createTheme({
  primaryColor: 'neutral',
  primaryShade: { light: 9, dark: 0 },
  colors: { neutral },
  fontFamily: 'Oxanium, system-ui, sans-serif',
  fontFamilyMonospace: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  headings: { fontFamily: 'Oxanium, system-ui, sans-serif', fontWeight: '800' },
  defaultRadius: 0,
})

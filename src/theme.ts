import { createTheme, type MantineColorsTuple } from '@mantine/core'

// The cyan from the "We're live" poster; shade 5 is the brand accent #1fdcff.
const signal: MantineColorsTuple = [
  '#e0fbff',
  '#c4f5ff',
  '#94ecff',
  '#5fe3ff',
  '#38dcff',
  '#1fdcff',
  '#00c2e8',
  '#00a5c6',
  '#0089a5',
  '#006b81',
]

// Black ground, white text. In dark mode Mantine uses dark[0] for text,
// dark[2] for dimmed text, dark[4] for borders and dark[7] for the page.
const dark: MantineColorsTuple = [
  '#ffffff',
  '#d6d6d6',
  '#9a9a9a',
  '#5c5c5c',
  '#3a3a3a',
  '#232323',
  '#0a0a0a',
  '#000000',
  '#000000',
  '#000000',
]

export const theme = createTheme({
  primaryColor: 'signal',
  primaryShade: 5,
  colors: { signal, dark },
  black: '#000000',
  fontFamily: 'Oxanium, system-ui, sans-serif',
  fontFamilyMonospace: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
  headings: { fontFamily: 'Oxanium, system-ui, sans-serif', fontWeight: '800' },
  defaultRadius: 0,
})

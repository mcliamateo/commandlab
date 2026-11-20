/// <reference types="vite/client" />
import mantineCss from '@mantine/core/styles.css?url'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { NotFound } from '~/components/not-found'
import appCss from '~/styles.css?url'
import { theme } from '~/theme'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'CommandLab | Tech Solutions, Hardware to Software' },
      {
        name: 'description',
        content:
          'CommandLab: business solutions, full-stack development, embedded systems, IT solutions and AI engineering.',
      },
      { name: 'theme-color', content: '#0a0a0a' },
      { property: 'og:title', content: 'CommandLab | Tech Solutions, Hardware to Software' },
      {
        property: 'og:description',
        content:
          'CommandLab: business solutions, full-stack development, embedded systems, IT solutions and AI engineering.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://commandlab-lyart.vercel.app/og-image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;600;800&display=swap' },
      { rel: 'stylesheet', href: mantineCss },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
  component: Outlet,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <HeadContent />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  )
}

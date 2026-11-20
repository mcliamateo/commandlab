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
      { title: 'CommandLab — Tech Solutions, Hardware to Software' },
      {
        name: 'description',
        content:
          'CommandLab: business solutions, full-stack development, embedded systems, IT solutions and AI engineering.',
      },
      { name: 'theme-color', content: '#000000' },
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
        <ColorSchemeScript forceColorScheme="dark" />
        <HeadContent />
      </head>
      <body>
        <MantineProvider theme={theme} forceColorScheme="dark">
          {children}
        </MantineProvider>
        <Scripts />
      </body>
    </html>
  )
}

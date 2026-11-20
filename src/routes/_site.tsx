import { Box } from '@mantine/core'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SiteFooter } from '~/components/site/site-footer'
import { SiteHeader } from '~/components/site/site-header'

export const Route = createFileRoute('/_site')({
  component: SiteLayout,
})

function SiteLayout() {
  return (
    <Box mih="100dvh" style={{ display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <Box component="main" style={{ flex: 1 }}>
        <Outlet />
      </Box>
      <SiteFooter />
    </Box>
  )
}

import { Anchor, Burger, Container, Drawer, Group, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from '@tanstack/react-router'
import { Mark } from '~/components/brand'
import { navLinks } from '~/lib/site-defaults'

export function SiteHeader() {
  const [opened, { toggle, close }] = useDisclosure(false)

  const navItems = navLinks.map((l) => (
    <Anchor
      key={l.to}
      component={Link}
      to={l.to}
      className="nav-link"
      underline="never"
      onClick={close}
      activeOptions={{ exact: l.to === '/' }}
      activeProps={{ 'data-active': true }}
    >
      {l.label}
    </Anchor>
  ))

  return (
    <header className="site-header">
      <Container size="lg" h={68}>
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Link to="/" className="brand" aria-label="CommandLab home">
            <Mark width={60} />
            <span className="wm">
              COMMAND<b>LAB</b>
            </span>
          </Link>

          <Group gap={32} visibleFrom="md">
            {navItems}
          </Group>

          <Group gap="sm" wrap="nowrap">
            <Link to="/contact" className="btn btn-primary header-cta">
              Contact us
            </Link>
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" aria-label="Open navigation" />
          </Group>
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} size="xs" position="right" title="Menu" hiddenFrom="md">
        <Stack gap="lg">{navItems}</Stack>
      </Drawer>
    </header>
  )
}

import { Anchor, Container, SimpleGrid, Stack, Text } from '@mantine/core'
import { IconBrandFacebook } from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { Logo } from '~/components/brand'
import { services, siteDefaults } from '~/lib/site-defaults'

export function SiteFooter() {
  const { branding, contact } = siteDefaults

  return (
    <footer className="site-footer">
      <Container size="lg" py={56}>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={32}>
          <Stack gap={14}>
            <Logo width={150} />
            <Text className="caps" c="dimmed" fz="xs">
              {branding.tagline}
            </Text>
          </Stack>
          <Stack gap={4}>
            <Text className="foot-head">Services</Text>
            {services.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="foot-link">
                {s.title}
              </Link>
            ))}
          </Stack>
          <Stack gap={4}>
            <Text className="foot-head">Follow us</Text>
            <Anchor href={contact.facebook} target="_blank" rel="noopener" c="inherit" fz="sm">
              <IconBrandFacebook size={16} style={{ verticalAlign: -3, marginRight: 6 }} />
              Facebook / CommandLab
            </Anchor>
          </Stack>
        </SimpleGrid>
        <div className="copy">
          <span>
            © {new Date().getFullYear()} {branding.siteTitle}
          </span>
          <span>{branding.kicker}</span>
        </div>
      </Container>
    </footer>
  )
}

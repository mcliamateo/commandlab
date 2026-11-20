import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { ServiceCard } from '~/components/site/service-card'
import { services, siteDefaults } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/services/')({
  head: () => ({ meta: [{ title: 'Services — CommandLab' }] }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <Container size="lg" py={80}>
      <p className="label">{siteDefaults.branding.kicker}</p>
      <h1 className="page-title">Our services</h1>
      <p className="lead" style={{ marginBottom: 40 }}>
        Five services, one team, from hardware to software.
      </p>
      <div className="cards">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </Container>
  )
}

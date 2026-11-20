import { Container } from '@mantine/core'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Corners } from '~/components/brand'
import { ServiceIcon } from '~/components/site/service-icon'
import { getService, services } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/services/$slug')({
  loader: ({ params }) => {
    const service = getService(params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? 'Service'} | CommandLab` }] }),
  component: ServicePage,
})

function ServicePage() {
  const service = Route.useLoaderData()
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <Container size="md" py={80}>
      <Link to="/services" className="back-link">
        ← All services
      </Link>

      <div className="service-hero framed">
        <Corners />
        <div className="service-icon-lg">
          <ServiceIcon name={service.icon} />
        </div>
        <h1 className="page-title prompt">{service.title}</h1>
        <p className="lead">{service.caption}</p>
        <div className="actions">
          <Link to="/contact" className="btn btn-primary btn-lg">
            Talk to us about this
          </Link>
        </div>
      </div>

      <h2 className="sub-head">
        Other services
      </h2>
      <ul className="other-services">
        {others.map((s) => (
          <li key={s.slug}>
            <Link to="/services/$slug" params={{ slug: s.slug }}>
              <span className="cyan">&gt;</span> {s.title}
              <small>{s.caption}</small>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

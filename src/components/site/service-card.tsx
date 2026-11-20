import { Link } from '@tanstack/react-router'
import { ServiceIcon } from '~/components/site/service-icon'
import type { Service } from '~/lib/site-defaults'

// The CommandLab version of Liams Cafe's ProductCard: one service, linking to its page.
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link to="/services/$slug" params={{ slug: service.slug }} className="card">
      <ServiceIcon name={service.icon} />
      <h3>{service.title}</h3>
      <p>{service.caption}</p>
    </Link>
  )
}

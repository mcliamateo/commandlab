import { Link } from '@tanstack/react-router'
import { ServiceIcon } from '~/components/site/service-icon'
import { type Service, services } from '~/lib/site-defaults'

// The CommandLab version of Liams Cafe's ProductCard: one service, linking to its page.
export function ServiceCard({ service }: { service: Service }) {
  const n = services.indexOf(service) + 1
  return (
    <Link to="/services/$slug" params={{ slug: service.slug }} className="card">
      <span className="num">
        <b>{String(n).padStart(2, '0')}</b> / {String(services.length).padStart(2, '0')}
      </span>
      <ServiceIcon name={service.icon} />
      <h3>{service.title}</h3>
      <p>{service.caption}</p>
    </Link>
  )
}

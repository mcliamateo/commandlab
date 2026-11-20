import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { ContactCard } from '~/components/site/contact-card'

export const Route = createFileRoute('/_site/contact')({
  head: () => ({ meta: [{ title: 'Contact | CommandLab' }] }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <Container size="md" py={80}>
      <h1 className="page-title">Get in touch</h1>
      <p className="lead" style={{ marginBottom: 40 }}>
        Tell us what's slowing your business down, from a device that needs firmware to a system that needs building.
      </p>
      <div style={{ maxWidth: 480 }}>
        <ContactCard />
      </div>
    </Container>
  )
}

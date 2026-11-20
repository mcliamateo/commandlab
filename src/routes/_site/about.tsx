import { Container } from '@mantine/core'
import type { CSSProperties } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Corners } from '~/components/brand'
import { Chain } from '~/components/site/chain'
import { siteDefaults } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/about')({
  head: () => ({ meta: [{ title: 'About | CommandLab' }] }),
  component: AboutPage,
})

const circlePhoto: CSSProperties = {
  width: 240,
  height: 240,
  borderRadius: '50%',
  objectFit: 'cover',
  display: 'block',
  margin: '0 auto 16px',
}

function AboutPage() {
  const { about, origins, introVideo } = siteDefaults
  return (
    <Container size="md" py={80}>
      <h1 className="page-title">{about.title}</h1>
      <p className="lead">{about.body}</p>
      <Chain items={about.chain} />

      <section style={{ marginTop: 56 }}>
        <h2 className="page-title" style={{ fontSize: '1.75rem' }}>
          {origins.title}
        </h2>
        <p className="lead">{origins.body}</p>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 24 }}>
          {origins.people.map((person) => (
            <li key={person.name} style={{ marginBottom: 32, textAlign: 'center' }}>
              {person.photo && <img src={person.photo} alt={person.name} style={circlePhoto} />}
              <strong>{person.name}</strong>, <span>{person.role}</span>
              {person.note && <p style={{ margin: '4px 0 0', opacity: 0.8 }}>{person.note}</p>}
              {(person.linkedin || person.github) && (
                <p style={{ margin: '4px 0 0', display: 'flex', gap: 16, justifyContent: 'center' }}>
                  {person.linkedin && (
                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn profile
                    </a>
                  )}
                  {person.github && (
                    <a href={person.github} target="_blank" rel="noopener noreferrer">
                      GitHub profile
                    </a>
                  )}
                </p>
              )}
            </li>
          ))}
        </ul>
        <figure style={{ marginTop: 32, textAlign: 'center' }}>
          <img src="/about/alejandro-jerez.webp" alt="Alejandro Jerez" style={circlePhoto} />
          <figcaption style={{ marginTop: 8, fontStyle: 'italic', opacity: 0.8 }}>{origins.memoriam}</figcaption>
        </figure>
      </section>

      <div className="video-wrap framed cyan-corners" style={{ marginTop: 56, maxWidth: 560 }}>
        <Corners />
        {/* biome-ignore lint/a11y/useMediaCaption: the intro video has no speech */}
        <video src={introVideo} controls autoPlay muted loop playsInline preload="auto" aria-label="CommandLab intro video" />
      </div>

      <div className="actions" style={{ justifyContent: 'flex-start', marginTop: 48 }}>
        <Link to="/services" className="btn btn-primary">
          Our services
        </Link>
        <Link to="/projects" className="btn btn-ghost">
          Our projects
        </Link>
      </div>
    </Container>
  )
}

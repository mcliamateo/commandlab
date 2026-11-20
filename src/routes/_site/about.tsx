import { Container } from '@mantine/core'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Corners } from '~/components/brand'
import { Chain } from '~/components/site/chain'
import { siteDefaults } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/about')({
  head: () => ({ meta: [{ title: 'About | CommandLab' }] }),
  component: AboutPage,
})

function AboutPage() {
  const { about, introVideo } = siteDefaults
  return (
    <Container size="md" py={80}>
      <h1 className="page-title">{about.title}</h1>
      <p className="lead">{about.body}</p>
      <Chain items={about.chain} />

      <div className="video-wrap framed cyan-corners" style={{ marginTop: 56, maxWidth: 560 }}>
        <Corners />
        {/* biome-ignore lint/a11y/useMediaCaption: the intro video has no speech */}
        <video src={introVideo} controls playsInline preload="metadata" aria-label="CommandLab intro video" />
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

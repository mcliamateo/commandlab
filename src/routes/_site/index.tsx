import { Container } from '@mantine/core'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Corners, Logo } from '~/components/brand'
import { Chain } from '~/components/site/chain'
import { ContactCard } from '~/components/site/contact-card'
import { ProjectCard } from '~/components/site/project-card'
import { ServiceCard } from '~/components/site/service-card'
import { TerminalHero } from '~/components/site/terminal-hero'
import { projects, services, siteDefaults } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/')({
  component: HomePage,
})

function HomePage() {
  const { branding, hero, about, contact, introVideo } = siteDefaults

  return (
    <>
      {/* Hero (cafe: tagline badge + headline + subtitle + two buttons) */}
      <div className="hero">
        <Container size="lg">
          <div className="hero-inner framed">
            <Corners />
            <Logo className="logo-lg" blink />
            <div className="tagline">{branding.tagline}</div>
            <TerminalHero />
            <p className="sub">{hero.subtitle}</p>
            <div className="actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get in touch
              </Link>
              <Link to="/services" className="btn btn-ghost btn-lg">
                Our services
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Services (cafe: "Customer favourites" grid) */}
      <section>
        <Container size="lg">
          <div className="section-head">
            <div>
              <h2>What we do</h2>
              <p className="dimmed">Five services, one team, from hardware to software.</p>
            </div>
            <Link to="/services" className="btn btn-ghost">
              All services
            </Link>
          </div>
          <div className="cards">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="band">
        <Container size="lg">
          <div className="section-head">
            <div>
              <h2>What we've built</h2>
              <p className="dimmed">Live systems for cafes, sports clubs, communities and shops.</p>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              All projects
            </Link>
          </div>
          <div className="logo-strip">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Intro video */}
      <section>
        <Container size="lg">
          <div className="intro-grid">
            <div>
              <h2>
                From hardware
                <br />
                to software
              </h2>
              <p className="dimmed" style={{ maxWidth: 440, marginTop: 12 }}>
                Thirty seconds on who we are and what we build. We solve problems, whether the answer is a circuit
                board, a web app or an AI model.
              </p>
            </div>
            <div className="video-wrap framed cyan-corners">
              <Corners />
              {/* biome-ignore lint/a11y/useMediaCaption: the intro video has no speech */}
              <video src={introVideo} controls playsInline preload="metadata" aria-label="CommandLab intro video" />
            </div>
          </div>
        </Container>
      </section>

      {/* About + info card (cafe: about text + hours/address/phone card) */}
      <section className="band">
        <Container size="lg">
          <div className="about-grid">
            <div>
              <h2>{about.title}</h2>
              <p className="lead">{about.body}</p>
              <Chain items={about.chain} />
            </div>
            <ContactCard />
          </div>
        </Container>
      </section>

      {/* CTA (from the "We're live" poster) */}
      <section>
        <Container size="lg">
          <div className="live framed cyan-corners">
            <Corners />
            <h2>
              We're live
            </h2>
            <p>
              <span className="cyan">&gt;</span> follow our page for updates
            </p>
            <div className="actions">
              <a href={contact.facebook} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
                Follow on Facebook
              </a>
              <Link to="/services" className="btn btn-ghost btn-lg">
                Our services
              </Link>
            </div>
            <div className="handle">
              <b>Facebook</b>
              <span className="sep">/</span>CommandLab
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

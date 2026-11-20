import { Container } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '~/components/site/project-card'
import { projects } from '~/lib/site-defaults'

export const Route = createFileRoute('/_site/projects')({
  head: () => ({ meta: [{ title: 'Projects — CommandLab' }] }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <Container size="lg" py={80}>
      <p className="label">Projects</p>
      <h1 className="page-title">What we've built</h1>
      <p className="lead" style={{ marginBottom: 40 }}>
        Systems we've designed, built and run for real businesses and communities.
      </p>
      <div className="logo-strip">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Container>
  )
}

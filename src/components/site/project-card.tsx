import type { Project } from '~/lib/site-defaults'

export function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className={`project-logo ${project.tile}`}>
        <img src={project.logo} alt={`${project.name} logo`} loading="lazy" />
      </div>
      <div className="project-text">
        <span className="project-kind">{project.kind}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.url && <span className="project-link">Visit site →</span>}
      </div>
    </>
  )

  return project.url ? (
    <a className="project" href={project.url} target="_blank" rel="noopener">
      {body}
    </a>
  ) : (
    <div className="project">{body}</div>
  )
}

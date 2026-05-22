import { MotionFade } from "@/components/MotionFade";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section id="projetos" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos reais, laboratórios técnicos e entregas que geram conversa."
          description="A seleção prioriza backend, APIs, dados, Docker, integração e capacidade de transformar requisitos em solução."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project, index) => (
            <MotionFade key={project.name} delay={index * 0.05}>
              <ProjectCard project={project} />
            </MotionFade>
          ))}
        </div>

        {secondary.length > 0 ? (
          <MotionFade className="mt-8 rounded-lg border border-white/10 bg-white/[0.025] p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              Mais projetos
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {secondary.map((project) => (
                <a
                  key={project.name}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-white/10 bg-panel p-4 transition hover:border-blue/40"
                >
                  <h3 className="font-semibold text-text">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.solution}</p>
                </a>
              ))}
            </div>
          </MotionFade>
        ) : null}
      </div>
    </section>
  );
}

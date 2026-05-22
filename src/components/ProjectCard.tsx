import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-panel p-5 transition hover:-translate-y-1 hover:border-blue/45 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-xl font-bold text-text">{project.name}</h3>
        </div>
        <span className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">
          {project.status}
        </span>
      </div>

      <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
        <p>
          <span className="font-semibold text-text">Problema: </span>
          {project.problem}
        </p>
        <p>
          <span className="font-semibold text-text">Solução: </span>
          {project.solution}
        </p>
      </div>

      <ul className="mt-5 grid gap-2">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="tech-pill">
            {item}
          </span>
        ))}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:text-cyan"
      >
        Ver repositório
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}

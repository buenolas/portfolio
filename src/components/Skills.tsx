import { SectionHeading } from "@/components/SectionHeading";
import { MotionFade } from "@/components/MotionFade";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="competencias" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Competências"
          title="Stack orientada a sistemas, automações e integração."
          description="As tecnologias aparecem organizadas pelo tipo de problema que ajudam a resolver."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionFade key={group.title} delay={index * 0.04}>
              <article className="h-full rounded-lg border border-white/10 bg-panel p-5 transition hover:border-blue/40 hover:bg-white/[0.04]">
                <h3 className="font-display text-lg font-bold text-text">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BriefcaseBusiness } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { SectionHeading } from "@/components/SectionHeading";
import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experiência"
          title="Vivência com sistemas internos, dados e operação."
          description="Experiências descritas com cuidado para preservar dados sensíveis e focar nas competências transferíveis."
        />
        <div className="grid gap-4">
          {experienceItems.map((item, index) => (
            <MotionFade key={`${item.role}-${item.period}`} delay={index * 0.05}>
              <article className="grid gap-5 rounded-lg border border-white/10 bg-panel p-5 md:grid-cols-[0.35fr_1fr]">
                <div>
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded border border-blue/40 bg-blue/10 text-cyan">
                    <BriefcaseBusiness className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-text">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.place}</p>
                </div>
                <div>
                  <p className="text-base leading-7 text-muted">{item.description}</p>
                  <ul className="mt-4 grid gap-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}

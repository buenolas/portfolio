import { Camera, Code2, Network } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/data/links";

const socials = [
  { label: "GitHub", href: links.github, icon: Code2, note: "Projetos e laboratórios técnicos" },
  { label: "LinkedIn", href: links.linkedin, icon: Network, note: "Atualizações profissionais" },
  { label: "Instagram", href: links.instagram, icon: Camera, note: "Bastidores e evolução" },
];

export function PublicPresence() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Presença pública"
          title="Também documento minha evolução."
          description="No GitHub, LinkedIn e Instagram, a ideia é conectar aprendizado, projetos reais, automações e IA aplicada com uma presença profissional mais técnica."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            const isPlaceholder = social.href === "#";
            return (
              <MotionFade key={social.label} delay={index * 0.05}>
                <a
                  href={social.href}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noreferrer"}
                  className="block h-full rounded-lg border border-white/10 bg-panel p-5 transition hover:border-blue/40"
                >
                  <Icon className="h-5 w-5 text-cyan" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-bold text-text">
                    {social.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{social.note}</p>
                  {isPlaceholder ? (
                    <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-blue">
                      Link a preencher
                    </p>
                  ) : null}
                </a>
              </MotionFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

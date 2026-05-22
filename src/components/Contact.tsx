import { ArrowUpRight, Camera, Code2, Mail, Network } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { links } from "@/data/links";

const contactLinks = [
  { label: "GitHub", href: links.github, icon: Code2 },
  { label: "LinkedIn", href: links.linkedin, icon: Network },
  { label: "Instagram", href: links.instagram, icon: Camera },
  { label: "Email", href: links.email, icon: Mail },
];

export function Contact() {
  return (
    <section id="contato" className="px-4 py-20 md:px-6 md:py-28">
      <MotionFade className="mx-auto max-w-6xl rounded-lg border border-blue/25 bg-blue/10 p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-5xl">
              Vamos conversar?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Se você procura alguém para construir APIs, automações, sistemas
              internos ou soluções com dados e IA aplicada, entre em contato.
            </p>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isPlaceholder = item.href === "#";
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noreferrer"}
                  className="flex h-12 items-center justify-between rounded border border-white/10 bg-ink/40 px-4 font-semibold text-text transition hover:border-cyan/60"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-cyan" aria-hidden />
                    {item.label}
                    {isPlaceholder ? (
                      <span className="font-mono text-xs font-normal uppercase tracking-[0.12em] text-muted">
                        preencher
                      </span>
                    ) : null}
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </MotionFade>
    </section>
  );
}

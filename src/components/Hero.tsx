import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { links } from "@/data/links";
import { siteConfig } from "@/lib/constants";

const focusItems = ["Python", "APIs", "Automação", "Dados", "IA"];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-12 pt-36 md:min-h-[calc(100svh-4rem)] md:pb-5 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_56%,rgba(77,162,255,0.18)_0%,rgba(77,162,255,0.10)_24%,rgba(77,162,255,0.04)_44%,transparent_66%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:gap-5 md:px-6">
        <MotionFade className="relative z-10 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {focusItems.join(" • ")}
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted md:inline">
            {siteConfig.location}
          </span>
        </MotionFade>

        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_23rem] md:gap-8 lg:grid-cols-[1fr_24rem]">
          <MotionFade>
            <h1 className="font-display text-[clamp(4.5rem,10.5vw,8rem)] font-black uppercase leading-[0.82] text-text">
              Lucas
              <br />
              Bueno
            </h1>
          </MotionFade>

          <MotionFade
            className="grid max-w-sm gap-5 md:max-w-none"
            delay={0.12}
          >
            <div className="relative overflow-hidden rounded border border-blue/45 bg-blue/10 shadow-glow">
              <img
                src="/lucas-bueno-profile-wide.jpeg"
                alt="Foto profissional de Lucas Bueno"
                className="aspect-[16/9] w-full object-contain grayscale-[12%] saturate-[0.95]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-cyan/10" />
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
                Desenvolvedor backend em evolução
              </p>
              <p className="mt-4 text-xl font-semibold leading-8 text-text">
                {siteConfig.title}
              </p>
              <p className="mt-4 leading-7 text-muted">
                Construo APIs, automações e ferramentas internas que organizam dados,
                reduzem tarefas repetitivas e tornam processos mais eficientes.
              </p>
            </div>
          </MotionFade>
        </div>

        <MotionFade
          className="relative z-10 hidden gap-3 md:flex"
          delay={0.18}
        >
          <a
            href="#projetos"
            className="inline-flex h-11 items-center justify-center gap-2 rounded bg-blue px-5 font-semibold text-ink transition hover:bg-cyan"
          >
            Ver projetos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.03] px-5 font-semibold text-text transition hover:border-blue/60 hover:bg-white/[0.06]"
          >
            <Code2 className="h-4 w-4" aria-hidden />
            GitHub
          </a>
        </MotionFade>
      </div>
    </section>
  );
}

import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { links } from "@/data/links";
import { siteConfig } from "@/lib/constants";

const focusItems = ["Python", "APIs", "Automação", "Dados", "IA"];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-10 pt-28 md:min-h-[calc(100svh-4rem)] md:pb-10 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_56%,rgba(77,162,255,0.18)_0%,rgba(77,162,255,0.10)_24%,rgba(77,162,255,0.04)_44%,transparent_66%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:grid md:min-h-[calc(100svh-8rem)] md:max-w-7xl md:grid-rows-[auto_1fr] md:px-6">
        <MotionFade className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex max-w-full flex-wrap items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-cyan md:text-xs md:tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {focusItems.map((item) => (
              <span
                key={item}
                className="rounded-sm bg-cyan/5 px-1.5 py-0.5 leading-none"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted md:inline">
            {siteConfig.location}
          </span>
        </MotionFade>

        <div className="relative z-10 grid items-start gap-8 py-4 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] sm:items-center md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:py-6 lg:grid-cols-[1fr_35rem]">
          <MotionFade className="flex flex-col items-start">
            <h1 className="font-display text-[clamp(4rem,17vw,6.25rem)] font-black uppercase leading-[0.82] text-text sm:text-[clamp(4rem,11vw,4.8rem)] md:text-[clamp(6rem,13vw,12rem)]">
              Lucas
              <br />
              Bueno
            </h1>

            <div className="mt-6 grid w-full grid-cols-2 gap-3 sm:hidden">
              <a
                href="#projetos"
                className="inline-flex h-10 items-center justify-center gap-2 rounded bg-blue px-3 text-sm font-semibold text-ink transition hover:bg-cyan"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.03] px-3 text-sm font-semibold text-text transition hover:border-blue/60 hover:bg-white/[0.06]"
              >
                <Code2 className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            </div>

            <div className="mt-7 hidden gap-3 sm:flex">
              <a
                href="#projetos"
                className="inline-flex h-11 items-center justify-center gap-2 rounded bg-blue px-4 text-sm font-semibold text-ink transition hover:bg-cyan md:h-12 md:px-5 md:text-base"
              >
                Ver projetos
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded border border-white/12 bg-white/[0.03] px-4 text-sm font-semibold text-text transition hover:border-blue/60 hover:bg-white/[0.06] md:h-12 md:px-5 md:text-base"
              >
                <Code2 className="h-4 w-4" aria-hidden />
                GitHub
              </a>
            </div>
          </MotionFade>

          <MotionFade
            className="grid max-w-sm gap-5 sm:max-w-none"
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

              <p className="mt-5 leading-7 text-muted">
                Construo APIs, automações e ferramentas internas que organizam dados,
                reduzem tarefas repetitivas e tornam processos mais eficientes.
              </p>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}

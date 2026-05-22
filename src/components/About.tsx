import { SectionHeading } from "@/components/SectionHeading";
import { MotionFade } from "@/components/MotionFade";

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Sobre"
          title="Desenvolvimento conectado ao processo real."
          description="Minha trajetória mistura backend, dados e operação. Isso me ajuda a entender não só o código, mas também o fluxo por trás do problema."
        />
        <MotionFade>
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-lg border border-white/10 bg-panel p-6">
              <p className="text-lg leading-8 text-muted">
                Sou Lucas Bueno, desenvolvedor com foco em backend, automações e
                sistemas internos. Trabalho com Python, APIs, bancos de dados,
                Docker e análise de dados para criar soluções práticas para
                problemas reais. Gosto de construir ferramentas que validam dados,
                automatizam tarefas repetitivas, organizam fluxos e transformam
                informação em decisão.
              </p>
            </div>
            <div className="rounded-lg border border-blue/20 bg-blue/10 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                Posicionamento
              </p>
              <p className="mt-4 text-xl font-semibold leading-8 text-text">
                Não construo apenas telas ou scripts isolados. Meu foco é entender
                o processo, organizar os dados e entregar uma solução com clareza,
                eficiência e rastreabilidade.
              </p>
            </div>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}

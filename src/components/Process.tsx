import { CheckCircle2 } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  "Entendo o processo real",
  "Identifico gargalos e tarefas repetitivas",
  "Modelo dados e fluxo",
  "Construo API, automação ou sistema",
  "Valido com dados reais",
  "Documento e melhoro continuamente",
];

export function Process() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Processo"
          title="Como transformo problemas em solução."
          description="A lógica é simples: entender antes de automatizar, organizar antes de escalar e documentar para manter evolução."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <MotionFade key={step} delay={index * 0.04}>
              <div className="h-full rounded-lg border border-white/10 bg-panel p-5">
                <div className="flex items-center justify-between gap-4">
                  <CheckCircle2 className="h-5 w-5 text-cyan" aria-hidden />
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-5 text-lg font-semibold leading-7 text-text">{step}</p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}

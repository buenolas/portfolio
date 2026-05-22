export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  description: string;
  points: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    role: "Estagiário em automação, IA e soluções internas",
    place: "Secretaria de Estado de Desenvolvimento Social de Goiás (SEDS)",
    period: "Fev/2026 até o momento",
    description:
      "Atuação com automações administrativas, dados, APIs, ferramentas internas, IA aplicada e infraestrutura conteinerizada.",
    points: [
      "Automações em Python para coleta, validação, transformação e geração de relatórios",
      "Apoio em APIs, integrações, regras de negócio e fluxos de dados entre sistemas",
      "Jenkins, GitLab CI/CD, Docker, logs, monitoramento e suporte a processos internos",
    ],
  },
  {
    role: "Estagiário",
    place: "TRE-GO",
    period: "Jun/2024 a Jun/2025",
    description:
      "Experiência prática com sistemas internos, aplicações em produção, dados e apoio ao desenvolvimento.",
    points: [
      "Desenvolvimento de sistemas internos com Elixir e PHP",
      "Manutenção da intranet, site oficial e sistemas internos",
      "PostgreSQL, Docker e suporte ao SEI em rotinas administrativas",
    ],
  },
];

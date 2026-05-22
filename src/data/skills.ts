export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Flask", "Java", "Spring Boot", "PHP", "Laravel", "APIs REST"],
  },
  {
    title: "Dados e Automação",
    items: ["Pandas", "OpenPyXL", "Excel/CSV", "ETL", "Selenium", "Scripts de validação", "Relatórios"],
  },
  {
    title: "Banco de Dados",
    items: ["PostgreSQL", "MySQL", "SQL", "Modelagem relacional"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Docker Compose", "Jenkins", "GitLab CI/CD", "Git/GitHub", "Logs", "Troubleshooting"],
  },
  {
    title: "IA Aplicada",
    items: ["LLMs", "RAG", "Agentes de IA", "n8n", "LangGraph", "APIs de IA", "Faster-Whisper"],
  },
  {
    title: "Frontend/Interface",
    items: ["HTML", "CSS", "JavaScript", "Tailwind", "UI para sistemas internos"],
  },
];

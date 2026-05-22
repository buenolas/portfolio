export type ProjectStatus =
  | "Concluído"
  | "Em evolução"
  | "Laboratório"
  | "Teste técnico";

export type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  stack: string[];
  highlights: string[];
  status: ProjectStatus;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "EduLog",
    category: "Sistema web / Dados educacionais",
    problem:
      "Rotinas escolares dependiam de registros informais, difíceis de consultar e pouco rastreáveis.",
    solution:
      "Sistema web para documentar aulas, alunos e histórico pedagógico em uma base textual centralizada.",
    stack: ["FastAPI", "Jinja2", "Firebase Auth", "Firestore", "Python"],
    highlights: [
      "Autenticação com Firebase",
      "Registros editáveis e auditáveis",
      "Interface orientada ao uso diário",
    ],
    status: "Concluído",
    githubUrl: "https://github.com/buenolas/EduLog",
    featured: true,
  },
  {
    name: "ms_test",
    category: "Backend / Teste técnico",
    problem:
      "Um sistema Django precisava evoluir para controlar clientes ativos e inativos sem perder clareza de regra de negócio.",
    solution:
      "API com Django REST Framework, filtros de listagem, PATCH para ativação/inativação, frontend Angular e testes automatizados.",
    stack: ["Django", "DRF", "Angular", "Python", "REST API"],
    highlights: [
      "Separação entre backend e frontend",
      "Regras concentradas na API",
      "Testes para API e seed de dados",
    ],
    status: "Teste técnico",
    githubUrl: "https://github.com/buenolas/ms_test",
    featured: true,
  },
  {
    name: "Laravel ToDo List",
    category: "Fullstack / API",
    problem:
      "Construir uma aplicação CRUD simples, com persistência real e ambiente reproduzível para desenvolvimento.",
    solution:
      "Aplicação de tarefas com backend Laravel, frontend Vue via Inertia, PostgreSQL e Docker Compose.",
    stack: ["Laravel", "Vue", "Inertia", "PostgreSQL", "Docker"],
    highlights: [
      "Endpoints REST para tarefas",
      "Ambiente dockerizado",
      "Frontend integrado com Vite",
    ],
    status: "Laboratório",
    githubUrl: "https://github.com/buenolas/todo-list-laravel",
    featured: true,
  },
  {
    name: "QR Code Generator",
    category: "Backend / Cloud",
    problem:
      "Gerar QR Codes sob demanda e disponibilizar os arquivos de forma acessível via URL.",
    solution:
      "API Spring Boot que recebe texto, gera imagem de QR Code e envia o arquivo para armazenamento S3.",
    stack: ["Java 21", "Spring Boot", "AWS S3", "Maven", "Docker"],
    highlights: [
      "Integração com AWS SDK",
      "Configuração por variáveis de ambiente",
      "Build e execução com Docker",
    ],
    status: "Laboratório",
    githubUrl: "https://github.com/buenolas/qrcode-generator",
    featured: true,
  },
  {
    name: "Eco-Coleta",
    category: "Java / Client-server",
    problem:
      "Organizar consulta e gestão de pontos de coleta seletiva em um sistema desenvolvido para a faculdade.",
    solution:
      "Sistema Java com sockets, serialização de objetos, papéis de usuário e dados em memória.",
    stack: ["Java", "Sockets", "Client-server", "Object Serialization"],
    highlights: [
      "Protocolo de comunicação cliente-servidor",
      "Controle básico por papel de usuário",
      "Modelagem a partir de requisitos",
    ],
    status: "Concluído",
    githubUrl: "https://github.com/buenolas/Eco-Coleta",
    featured: true,
  },
];

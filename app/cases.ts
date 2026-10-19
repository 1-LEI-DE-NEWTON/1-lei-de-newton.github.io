export type Case = {
  org: string;
  role: string;
  title: string;
  problem: string;
  approach: string[];
  metrics: [string, string][];
  stack: string[];
};

export const cases: Case[] = [
  {
    org: "CNPq / AskROD",
    role: "Lead Research Developer",
    title: "On-prem RAG assistant with open models",
    problem:
      "An institutional assistant had to answer from internal documents without sending any data to paid APIs, but hybrid retrieval was ranking the wrong passages.",
    approach: [
      "Led 5 researchers: architecture, task planning, code review and mentoring.",
      "Ran 16 controlled experiments to fix hybrid fusion, ranking, per-article dedup and indexing.",
      "Built BGE-M3 + FAISS + BM25 (PT-BR stemming/synonyms) + RRF + BGE reranker v2-m3.",
      "Calibrated RAGAS against human labels; ablations with confidence intervals.",
      "Contributed to Qwen3-4B SFT with LoRA/PEFT via teacher-answer distillation on local GPU.",
    ],
    metrics: [
      ["MRR", "0.374 → 0.835"],
      ["Precision@1", "13.5% → 77.1%"],
      ["Recall@10", "97.9%"],
      ["Acceptable answers", "61.2% → 75.5%"],
      ["Benchmark time", "87 → 41 min"],
    ],
    stack: ["Python", "FAISS", "BM25", "BGE-M3", "RAGAS", "Ollama", "LoRA/PEFT", "NestJS", "React"],
  },
  {
    org: "LASIC",
    role: "Software Engineer — Fullstack & DevOps",
    title: "Cross-system product matching in production",
    problem:
      "Inventory items and stock records from different systems were matched by hand, with frequent errors, slow queries and race conditions.",
    approach: [
      "Hybrid retrieval with embeddings, pgvector and reranking to auto-match products.",
      "Diagnosed slow queries with EXPLAIN ANALYZE; fixed indexes, joins and cardinality issues.",
      "Fingerprint-based locks and idempotency to remove concurrent read/write races.",
      "Async processing with Redis/BullMQ; unit and integration tests.",
    ],
    metrics: [
      ["Status", "In production"],
      ["Manual matching", "Substantially reduced"],
      ["Data races", "Eliminated"],
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "pgvector", "Redis", "BullMQ"],
  },
  {
    org: "LASIC",
    role: "DevOps & Infrastructure",
    title: "From manual deploys to observable, resilient infra",
    problem:
      "Deploys depended on one person, there was no monitoring, and a week-long power/internet outage took the self-hosted servers down.",
    approach: [
      "GitHub Actions + Jenkins pipelines with GitHub Environments and automated checks.",
      "Workload-aware runner selection with fallback to cut paid CI minutes.",
      "Migrated all active services from bare metal to VPS, mitigating CVEs on the way.",
      "OpenTelemetry, Prometheus, Grafana, Loki and Tempo from scratch.",
      "Docker Swarm + Portainer on AWS and OCI with Amazon RDS.",
    ],
    metrics: [
      ["CI job time", "~31% faster"],
      ["Data loss in migration", "Zero"],
      ["Outages since", "None"],
    ],
    stack: ["GitHub Actions", "Jenkins", "Docker Swarm", "AWS", "OCI", "Prometheus", "Grafana"],
  },
  {
    org: "SAACI Labs",
    role: "Founder & Full-Stack Engineer",
    title: "A solo studio shipping AI products end to end",
    problem:
      "Build and operate a portfolio of products alone, owning backend, frontend, data, auth and infra.",
    approach: [
      "Radar: daily crawl of 28 public sources matching grants, tenders and hackathons to company profiles.",
      "ChegaLá: delivery ops with route planning, Android courier app and offline-first sync.",
      "Sender: WhatsApp AI agents for support, scheduling and orders.",
      "JobMatcher and MoneyMapper: matching, automation and AI-assisted categorization.",
      "SAACI DevKit: shared rules and automation to bootstrap new repos.",
    ],
    metrics: [
      ["Products shipped", "5"],
      ["Sources monitored", "28 / day"],
      ["Agents", "Human-in-the-loop"],
    ],
    stack: ["React", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "Docker Swarm", "Kotlin"],
  },
];

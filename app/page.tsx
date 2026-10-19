import { cases } from "./cases";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Victor Castro</h1>
        <p className="lead">Fullstack AI / MLOps Engineer · Fortaleza, Brazil</p>
        <p>
          I build production RAG systems, full-stack products and the infrastructure behind them.
          Most of my work is in private repositories, so here are the case studies.
        </p>
        <nav>
          <a href="mailto:victor.guilherme.dev@gmail.com">Email</a>
          <a href="https://linkedin.com/in/p-vga1">LinkedIn</a>
          <a href="https://github.com/1-LEI-DE-NEWTON">GitHub</a>
        </nav>
      </header>

      {cases.map((c) => (
        <article key={c.title}>
          <small>
            {c.org} · {c.role}
          </small>
          <h2>{c.title}</h2>
          <h3>Problem</h3>
          <p>{c.problem}</p>
          <h3>Approach</h3>
          <ul>
            {c.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="metrics">
            {c.metrics.map(([k, v]) => (
              <div key={k}>
                <strong>{v}</strong>
                <span>{k}</span>
              </div>
            ))}
          </div>
          <p className="stack">{c.stack.join(" · ")}</p>
        </article>
      ))}
    </main>
  );
}

'use client';

import domains from '../../data/domains';

export default function DomainShowcase() {
  return (
    <section className="domains-section">
      <h2>Solutions Architecture Domains</h2>
      <div className="domains-grid">
        {domains.map((domain) => (
          <article key={domain.id} className="domain-card">
            <h3>{domain.title}</h3>
            <p>{domain.description}</p>
            <div className="domain-tech">
              {domain.tech.map((t) => (
                <span key={t} className="domain-tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

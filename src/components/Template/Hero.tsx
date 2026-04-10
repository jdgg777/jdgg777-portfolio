import Link from 'next/link';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Jose Gomez</span>
        </h1>

        <p className="hero-tagline">
          Management Engineer specializing in operations optimization, process
          automation, and data analysis.
          <br />
          <a href="mailto:dgomez0728@gmail.com" className="hero-highlight">
            Open to opportunities
          </a>{' '}
          across US, LATAM, Europe, and remote positions.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">C2 English Certified</span>
          <span className="hero-chip">Supply Chain Expert</span>
          <span className="hero-chip">Process Automation</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button button-primary">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}

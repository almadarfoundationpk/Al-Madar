import Link from "next/link";

const pillars = [
  { number: "01", title: "Food", text: "Planned community food support and responsible surplus-food redistribution.", href: "/food", className: "pillar-food" },
  { number: "02", title: "Education", text: "Learning support and outreach, with a long-term ambition to establish a charitable school.", href: "/education", className: "pillar-education" },
  { number: "03", title: "Health", text: "Future blood-donation and community health initiatives developed with appropriate partners.", href: "/health", className: "pillar-health" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grain" />
        <div className="hero-content">
          <span className="eyebrow light">AL-MADAR FOUNDATION · EST. 2026</span>
          <h1>Humanity moves forward<br />when we move <em>together.</em></h1>
          <p>Creating meaningful opportunities through food, education and healthcare — while building a more compassionate and sustainable future.</p>
          <div className="hero-actions">
            <Link href="/our-work" className="button button-gold">Explore our mission <span>↗</span></Link>
            <Link href="/get-involved" className="text-link light-link">Become a volunteer <span>→</span></Link>
          </div>
        </div>
        <div className="hero-location"><span>FAISALABAD</span><i /><span>PAKISTAN</span></div>
        <div className="scroll-mark"><span>SCROLL</span><i /></div>
      </section>

      <section className="philosophy section-pad">
        <div className="philosophy-index"><span className="eyebrow">OUR BELIEF</span><strong>01</strong></div>
        <div className="philosophy-copy">
          <h2>A little good<br />is still <em>a good.</em></h2>
          <p>Meaningful change does not always begin with extraordinary resources or large organisations. It can begin with one individual, one contribution or one decision to help.</p>
          <Link href="/about" className="under-link">Read our story <span>↗</span></Link>
        </div>
        <div className="philosophy-mark" aria-hidden="true"><span>A</span><i /></div>
      </section>

      <section className="pillars-home section-pad">
        <div className="section-heading left-heading">
          <span className="eyebrow">OUR THREE PILLARS</span>
          <h2>Basic necessities.<br /><em>Shared responsibility.</em></h2>
        </div>
        <div className="pillar-editorial">
          {pillars.map((pillar) => (
            <Link href={pillar.href} className={`pillar-feature ${pillar.className}`} key={pillar.title}>
              <div className="pillar-feature-top"><span>{pillar.number}</span><span>UPCOMING INITIATIVES</span></div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <span className="pillar-arrow">Explore {pillar.title} <b>↗</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach section-pad">
        <div className="approach-heading"><span className="eyebrow light">HOW WE WILL WORK</span><h2>Purpose,<br /><em>put into practice.</em></h2></div>
        <div className="approach-list">
          {[
            ["01", "Understand community needs", "Listen to people and identify where support can be most relevant."],
            ["02", "Encourage responsible giving", "Promote care, dignity and thoughtful use of every contribution."],
            ["03", "Mobilise community participation", "Bring volunteers, students and local organisations together."],
            ["04", "Build for the long term", "Develop sustainable initiatives with clear and accountable processes."],
          ].map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="initiatives section-pad">
        <div className="initiatives-head"><div><span className="eyebrow">ON THE HORIZON</span><h2>Initiatives in development</h2></div><Link href="/our-work" className="under-link">View our work <span>↗</span></Link></div>
        <div className="initiative-track">
          {[
            ["01", "Food support and distribution", "PLANNED", "Food"],
            ["02", "Responsible surplus-food redistribution", "IN DEVELOPMENT", "Food"],
            ["03", "Educational outreach", "PLANNED", "Education"],
            ["04", "Future charitable school", "LONG-TERM AMBITION", "Education"],
            ["05", "Blood donation initiatives", "PLANNED", "Health"],
            ["06", "Water-related initiatives", "PLANNED", "Community"],
          ].map(([n, title, status, category]) => <article className="initiative-card" key={n}><span>{n}</span><div className="initiative-art"><i>{category}</i></div><small>{status}</small><h3>{title}</h3><Link href="/our-work">Learn more <b>↗</b></Link></article>)}
        </div>
      </section>

      <section className="volunteer-band">
        <div><span className="eyebrow light">A COMMUNITY OF GOOD</span><h2>Change doesn&apos;t<br />happen <em>alone.</em></h2></div>
        <div><p>Be part of a community that believes small acts of kindness can create meaningful change.</p><Link href="/get-involved" className="button button-gold">Join our community <span>↗</span></Link></div>
      </section>

      <section className="cta-section">
        <div><span className="eyebrow light">BE PART OF SOMETHING MEANINGFUL</span><h2>Good things grow<br /><em>when shared.</em></h2></div>
        <div className="cta-links"><Link href="/get-involved" className="button button-gold">Become a volunteer ↗</Link><Link href="/donate" className="button button-outline-light">Support our mission ↗</Link></div>
      </section>
    </main>
  );
}

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  { n:"01", title:"Food", desc:"Working towards food security through community food runs, safe surplus-food rescue and sustainable support.", tag:"Nourishment" },
  { n:"02", title:"Education", desc:"Supporting learning through school and orphan-home outreach, with a long-term vision for a charity school.", tag:"Opportunity" },
  { n:"03", title:"Health", desc:"Building community health initiatives, beginning with a planned voluntary blood-donation programme.", tag:"Wellbeing" }
];

export default function Home() {
  return <>
    <main>
      <section className="hero">
        <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        <div className="hero-content">
          <span className="eyebrow light">A COMMUNITY-LED FOUNDATION · EST. 2026</span>
          <h1>Goodness is not<br/><em>a one-time act.</em></h1>
          <p>We believe a little good is still a good. Al-Madar brings people together to strengthen communities through the essentials of humanity.</p>
          <div className="hero-actions"><Link href="/our-work" className="button button-gold">Explore our work <span>↗</span></Link><Link href="/about" className="text-link light-link">Discover our story <span>→</span></Link></div>
        </div>
        <div className="hero-note"><span className="note-line"></span><span>GIVE TO SOCIETY.<br/>GIVE TO NATURE.<br/>THEY GIVE BACK.</span></div>
        <div className="hero-bottom"><span>FAISALABAD, PAKISTAN</span><span>FOOD · EDUCATION · HEALTH</span></div>
      </section>

      <section className="intro section-pad">
        <div className="intro-side"><span className="eyebrow">WHY WE EXIST</span><span className="big-index">01<span>/03</span></span></div>
        <div className="intro-copy"><h2>When people come together,<br/><em>possibility becomes action.</em></h2><p>Al-Madar is being built on a simple conviction: serving society is a shared responsibility. We are creating a platform where people, ideas and resources can come together to make meaningful change — one thoughtful initiative at a time.</p><Link className="under-link" href="/about">A little more about us <span>↗</span></Link></div>
      </section>

      <section className="pillars section-pad">
        <SectionHeading eyebrow="THE ESSENTIALS OF HUMANITY" title="Three pillars. One purpose." text="Our work is centred on three basic human necessities — the foundations on which people and communities can thrive."/>
        <div className="pillar-grid">{pillars.map(p=><article className="pillar-card" key={p.title}><div className="pillar-top"><span>{p.n}</span><span className="pillar-tag">{p.tag}</span></div><h3>{p.title}</h3><p>{p.desc}</p><Link href="/our-work" aria-label={`Explore ${p.title}`}>Explore pillar <span>↗</span></Link></article>)}</div>
      </section>

      <section className="quote-band"><span className="quote-mark">“</span><blockquote>A little good is still a good.</blockquote><p>Small acts can become a cycle of lasting change when we do them together.</p></section>

      <section className="roadmap section-pad">
        <div className="roadmap-copy"><span className="eyebrow">OUR JOURNEY STARTS HERE</span><h2>Rooted in Faisalabad.<br/><em>Open to all of Pakistan.</em></h2><p>We are beginning in Faisalabad and building a network of ambassadors and volunteers from across Pakistan. Our ambition is to grow responsibly, with local communities shaping the work that matters to them.</p><Link href="/get-involved" className="button button-dark">Become part of it <span>↗</span></Link></div>
        <div className="roadmap-visual"><div className="orbit-ring ring-a"></div><div className="orbit-ring ring-b"></div><div className="orbit-core"><span>AL</span><small>TOGETHER</small></div><div className="orbit-label label-a">COMMUNITY</div><div className="orbit-label label-b">PURPOSE</div><div className="orbit-label label-c">ACTION</div></div>
      </section>

      <section className="cta-section"><div><span className="eyebrow light">BE PART OF THE CYCLE</span><h2>Good things grow<br/><em>when shared.</em></h2><p>Give your time, skills or support. Help us turn a shared belief into meaningful action.</p></div><div className="cta-links"><Link href="/get-involved" className="button button-gold">Volunteer with us ↗</Link><Link href="/donate" className="button button-outline-light">Support our work ↗</Link></div></section>
    </main>
  </>;
}

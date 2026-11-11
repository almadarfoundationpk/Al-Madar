import Link from "next/link";
export default function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div><Link href="/" className="footer-brand">AL-MADAR FOUNDATION</Link>
        <p>Give to Society. Give to Nature. They Give Back.</p>
        <p className="muted">A little good is still a good.</p></div>
      <div><b>Explore</b><Link href="/about">Our story</Link><Link href="/our-work">Our work</Link><Link href="/team">Our team</Link><Link href="/impact">Impact & transparency</Link></div>
      <div><b>Take part</b><Link href="/get-involved">Volunteer</Link><Link href="/donate">Donate</Link><Link href="/contact">Contact</Link><Link href="/admin">Admin login</Link></div>
      <div><b>Contact</b><a href="mailto:almadarfoundationpk@gmail.com">almadarfoundationpk@gmail.com</a><a href="https://wa.me/923007625087" target="_blank" rel="noreferrer">WhatsApp: +92 300 7625087</a><span>Faisalabad, Pakistan</span></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Al-Madar Foundation</span><span>Built around people, purpose and possibility.</span></div>
  </footer>;
}

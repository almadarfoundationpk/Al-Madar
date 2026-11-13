
import Link from "next/link";
import Image from "next/image";

export default function Team() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <span className="eyebrow light">THE PEOPLE BEHIND THE PURPOSE</span>
        <h1>
          Built by people.<br />
          <em>Strengthened together.</em>
        </h1>
        <p>
          Al-Madar is being shaped by a founding team and a growing network
          of volunteers and ambassadors.
        </p>
      </section>

      <section className="section-pad">
        <div className="founder-grid">

          <article className="founder-card founder-feature">
            <div className="founder-photo">
              <Image
                src="/almadar-images/hasham.png.png"
                alt="Hasham Sultan, Founder of Al-Madar Foundation"
                width={600}
                height={700}
                className="team-image"
              />
            </div>
            <span className="eyebrow">FOUNDER</span>
            <h2>Hasham Sultan</h2>
            <p>
              Hasham founded Al-Madar in 2026 after developing a strong
              commitment to community service through work with different
              organisations. He believes service should be a shared
              responsibility — and that collective action can turn
              individual goodwill into lasting impact.
            </p>
          </article>

          <article className="founder-card">
            <div className="founder-photo">
              <Image
                src="/almadar-images/hania.png.png"
                alt="Hania Anas Piracha, Co-founder of Al-Madar Foundation"
                width={600}
                height={700}
                className="team-image"
              />
            </div>
            <span className="eyebrow">CO-FOUNDER</span>
            <h2>Hania Anas Piracha</h2>
            <p>
              Part of Al-Madar’s founding team, helping build the
              foundation and its community-led vision.
            </p>
          </article>

          <article className="founder-card">
            <div className="founder-photo">
              <Image
                src="/almadar-images/nimra.png.png"
                alt="Nimra Bhutta, Co-founder of Al-Madar Foundation"
                width={600}
                height={700}
                className="team-image"
              />
            </div>
            <span className="eyebrow">CO-FOUNDER</span>
            <h2>Nimra Bhutta</h2>
            <p>
              Part of Al-Madar’s founding team, helping build the
              foundation and its community-led vision.
            </p>
          </article>

        </div>
      </section>

      <section className="departments section-pad">
        <span className="eyebrow">HOW WE WORK TOGETHER</span>
        <h2>One mission. Many ways to contribute.</h2>

        <div className="department-grid">
          {["Media", "Logistics", "Finance", "Operations", "Outreach"].map(
            (d, i) => (
              <div key={d}>
                <span>0{i + 1}</span>
                <b>{d}</b>
              </div>
            )
          )}
        </div>

        <p>
          Our volunteer and ambassador network is open to people who want
          to contribute, beginning in Faisalabad and growing across Pakistan.
        </p>

        <Link href="/get-involved" className="under-link">
          Find your place with us ↗
        </Link>
      </section>
    </main>
  );
}

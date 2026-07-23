const ministryScenes = [
  {
    src: "/images/pastor-troy-preaching.png",
    alt: "Illustrative scene of Pastor Troy preaching from a church pulpit",
    label: "Preaching the Word",
  },
  {
    src: "/images/pastor-troy-prayer.png",
    alt: "Illustrative scene of Pastor Troy praying with church members",
    label: "Standing Together in Prayer",
  },
  {
    src: "/images/pastor-troy-bible-study.png",
    alt: "Illustrative scene of Pastor Troy leading a Bible study",
    label: "Growing Through Scripture",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Pastor Troy home">
          <span className="brand-mark" aria-hidden="true">PT</span>
          <span>
            <strong>Pastor Troy</strong>
            <small>Faith • Hope • Fellowship</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#message">Message</a>
          <a href="#gather">Gather</a>
          <a href="#gallery">Ministry</a>
        </nav>
        <a className="header-cta" href="#connect">Stay connected</a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/pastor-troy-preaching.png"
          alt="Illustrative scene of Pastor Troy preaching in a Baptist church"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Welcome to the ministry of Pastor Troy</p>
          <h1 id="hero-title">A place to grow in faith—and walk it out together.</h1>
          <p className="hero-copy">
            Rooted in the Gospel of Jesus Christ, this community is here to worship,
            learn, pray, and serve with open hearts.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#message">Hear the message</a>
            <a className="button button-ghost" href="#gather">Join the fellowship</a>
          </div>
        </div>
        <p className="hero-note">AI-created illustrative ministry scene</p>
      </section>

      <section className="scripture-band" aria-label="Scripture">
        <p>“Come unto me, all ye that labour and are heavy laden, and I will give you rest.”</p>
        <span>Matthew 11:28 · KJV</span>
      </section>

      <section className="section welcome" id="about">
        <div className="portrait-frame">
          <img src="/images/pastor-troy-portrait.jpg" alt="Portrait of Pastor Troy" />
          <span className="portrait-caption">Pastor Troy</span>
        </div>
        <div className="section-copy">
          <p className="eyebrow dark">A welcome from Pastor Troy</p>
          <h2>There is room for you here.</h2>
          <p className="lead">
            Pastor Troy is a Baptist Christian minister committed to sharing the good
            news of Jesus Christ and encouraging people in their daily walk of faith.
          </p>
          <p>
            Whether you are taking your first step toward God, returning after time
            away, or looking for a community where you can keep growing, you are
            invited to come with your questions, your hopes, and your whole story.
          </p>
          <blockquote>
            “We gather not because we have everything figured out, but because God is
            faithful—and none of us is meant to walk alone.”
          </blockquote>
        </div>
      </section>

      <section className="message-section" id="message">
        <div className="message-inner">
          <div className="message-heading">
            <p className="eyebrow">A word for the week</p>
            <h2>Grace for the journey</h2>
          </div>
          <div className="message-grid">
            <article className="message-card featured">
              <span className="message-number">01</span>
              <p className="kicker">Featured meditation</p>
              <h3>Keep walking by faith</h3>
              <p>
                Faith is not pretending the road is easy. It is trusting that God is
                present on the road—and taking the next right step with Him.
              </p>
              <a href="#connect">Receive future messages <span aria-hidden="true">→</span></a>
            </article>
            <article className="message-card">
              <span className="message-number">02</span>
              <p className="kicker">Read</p>
              <h3>2 Corinthians 5:7</h3>
              <p>“For we walk by faith, not by sight.”</p>
            </article>
            <article className="message-card">
              <span className="message-number">03</span>
              <p className="kicker">Reflect</p>
              <h3>Where is God asking you to trust Him today?</h3>
              <p>Take a quiet moment. Name the burden, then place the next step in God’s hands.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section gather" id="gather">
        <div className="gather-intro">
          <p className="eyebrow dark">Worship • Learn • Serve</p>
          <h2>Life in fellowship</h2>
          <p>
            The life of faith grows through Scripture, prayer, worship, and service.
            Here are the ways this ministry is preparing to gather people together.
          </p>
        </div>
        <div className="gather-list">
          <article>
            <span>Sunday</span>
            <div><h3>Worship gathering</h3><p>Prayer, praise, Scripture, and Gospel-centered preaching.</p></div>
            <strong>Details coming soon</strong>
          </article>
          <article>
            <span>Midweek</span>
            <div><h3>Bible study</h3><p>A welcoming space to ask questions and grow in the Word.</p></div>
            <strong>Details coming soon</strong>
          </article>
          <article>
            <span>Community</span>
            <div><h3>Prayer & service</h3><p>Standing with one another and putting faith into action.</p></div>
            <strong>Details coming soon</strong>
          </article>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Ministry in action</p>
            <h2>Faith lived together</h2>
          </div>
          <p>
            These AI-created illustrative scenes envision the spirit of Pastor Troy’s
            preaching, teaching, and pastoral care. They are not documentary event photos.
          </p>
        </div>
        <div className="gallery-grid">
          {ministryScenes.map((scene, index) => (
            <figure key={scene.src} className={index === 0 ? "gallery-large" : ""}>
              <img src={scene.src} alt={scene.alt} />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{scene.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="connect" id="connect">
        <div>
          <p className="eyebrow">Stay close to the Word</p>
          <h2>Let’s keep walking together.</h2>
        </div>
        <div className="connect-card">
          <p>
            Official service times, location, prayer-request details, and ministry
            contact information will be added here when confirmed.
          </p>
          <a className="button button-gold" href="#home">Return to the welcome</a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">PT</span>
          <span><strong>Pastor Troy</strong><small>Faith • Hope • Fellowship</small></span>
        </a>
        <p>Centered on Christ. Grounded in Scripture. Growing in community.</p>
        <p className="copyright">© {new Date().getFullYear()} Pastor Troy Ministry</p>
      </footer>
    </main>
  );
}

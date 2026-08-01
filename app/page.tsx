const ministryScenes = [
  {
    src: "/images/pastor-troy-preaching.png",
    alt: "AI-created illustrative scene of Pastor Troy preaching from a church pulpit",
    label: "Preaching the Word",
  },
  {
    src: "/images/pastor-troy-prayer.png",
    alt: "AI-created illustrative scene of Pastor Troy praying with church members",
    label: "Standing Together in Prayer",
  },
  {
    src: "/images/pastor-troy-bible-study.png",
    alt: "AI-created illustrative scene of Pastor Troy leading a Bible study",
    label: "Growing Through Scripture",
  },
];

const pathways = [
  {
    number: "01",
    title: "I’m New",
    copy: "Find a welcoming place to begin and learn what to expect when you visit.",
    href: "#visit",
    action: "Plan your visit",
  },
  {
    number: "02",
    title: "Messages",
    copy: "Return to Scripture, Gospel-centered encouragement, and a word for the week.",
    href: "#messages",
    action: "Hear the message",
  },
  {
    number: "03",
    title: "Prayer",
    copy: "Bring your hopes, burdens, and gratitude. We believe in standing together.",
    href: "#prayer",
    action: "Join in prayer",
  },
  {
    number: "04",
    title: "Our Pastor",
    copy: "Meet Pastor Troy and the heart behind Greater Expectation Church.",
    href: "#pastor",
    action: "Meet Pastor Troy",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Greater Expectation Church home">
          <img src="/images/greater-expectation-logo.jpg" alt="" />
          <span>
            <strong>Greater Expectation</strong>
            <small>Faith • Purpose • Expectation</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#visit">New Here</a>
          <a href="#messages">Messages</a>
          <a href="#pastor">Pastor Troy</a>
          <a href="#ministry">Ministry</a>
        </nav>
        <a className="header-cta" href="#visit">Plan Your Visit</a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />
        <div className="hero-horizon" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light hero-kicker"><span /> Welcome home</p>
          <div className="hero-logo">
            <img
              src="/images/greater-expectation-logo.jpg"
              alt="Greater Expectation Church — Faith, Purpose, Expectation"
            />
          </div>
          <h1 id="hero-title">Christ at the center. A people growing in faith.</h1>
          <p className="hero-intro">
            Come as you are. Encounter Christ through the Word. Grow in faith
            and walk forward with the Greater Expectation church family.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Plan Your Visit</a>
            <a className="button button-outline" href="#messages">Explore Messages</a>
          </div>
        </div>
        <div className="hero-pastor">
          <img src="/images/pastor-troy-main-refined.png" alt="Pastor Troy of Greater Expectation Church" />
          <div className="pastor-caption">
            <span>Lead Pastor</span>
            <strong>Pastor Troy</strong>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll to discover <span>↓</span></div>
      </section>

      <section className="faith-ticker" aria-label="Greater Expectation values">
        <div className="ticker-track">
          <span>Faith</span><i>✦</i><span>Purpose</span><i>✦</i><span>Expectation</span><i>✦</i>
          <span>Hope</span><i>✦</i><span>Community</span><i>✦</i><span>Faith</span><i>✦</i>
          <span>Purpose</span><i>✦</i><span>Expectation</span><i>✦</i><span>Hope</span><i>✦</i>
          <span>Community</span><i>✦</i>
        </div>
      </section>

      <section className="pathways" aria-label="Ways to connect">
        {pathways.map((path) => (
          <a href={path.href} className="pathway-card" key={path.title}>
            <span className="path-number">{path.number}</span>
            <h2>{path.title}</h2>
            <p>{path.copy}</p>
            <strong>{path.action} <span aria-hidden="true">→</span></strong>
          </a>
        ))}
      </section>

      <section className="welcome-section" id="visit">
        <div className="welcome-art" aria-hidden="true">
          <img src="/images/greater-expectation-logo.jpg" alt="" />
        </div>
        <div className="welcome-copy">
          <p className="eyebrow navy">Your first Sunday</p>
          <h2>You can walk in with confidence.</h2>
          <p className="large-copy">
            Greater Expectation is a Christ-centered Baptist church community
            where Scripture, prayer, worship, and fellowship make room for real
            people and real growth.
          </p>
          <p>
            Whether you are exploring faith, returning to church, or looking for
            a community to call home, there is room for you here. Official
            service time and location details will be posted as soon as they are
            confirmed.
          </p>
          <div className="visit-note">
            <span>Service details</span>
            <strong>Coming soon</strong>
          </div>
        </div>
      </section>

      <section className="slogan-section" aria-label="Greater Expectation Church slogan">
        <p className="eyebrow light">Live with expectation</p>
        <blockquote>
          “Your past explains where you&apos;ve been. Christ reveals where your going.
          Live with a Greater Expectation”!
        </blockquote>
        <span className="slogan-rule" />
      </section>

      <section className="messages-section" id="messages">
        <div className="section-heading">
          <div>
            <p className="eyebrow navy">Latest encouragement</p>
            <h2>A word for the journey.</h2>
          </div>
          <p>
            Gospel-centered truth for everyday life—grounded in Scripture and
            shared to strengthen your faith.
          </p>
        </div>
        <article className="featured-message">
          <div className="message-image">
            <img src="/images/pastor-troy-preaching.png" alt="AI-created illustrative scene of Pastor Troy preaching" />
            <span>Illustrative AI-created ministry scene</span>
          </div>
          <div className="message-copy">
            <p className="eyebrow light">Featured meditation</p>
            <span className="message-scripture">2 Corinthians 5:7</span>
            <h3>Keep walking by faith.</h3>
            <p>
              Faith is not pretending the road is easy. It is trusting that God
              is present on the road—and taking the next right step with Him.
            </p>
            <blockquote>“For we walk by faith, not by sight.”</blockquote>
            <a href="#connect">Receive future messages <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <section className="pastor-section" id="pastor">
        <div className="pastor-photo">
          <img src="/images/pastor-troy-main-refined.png" alt="Pastor Troy" />
          <span className="pastor-photo-note">Portrait refined to reflect the Greater Expectation visual identity</span>
        </div>
        <div className="pastor-copy">
          <p className="eyebrow navy">Meet our pastor</p>
          <h2>A shepherd’s heart. A Gospel-centered message.</h2>
          <p className="large-copy">
            Pastor Troy is a Baptist Christian minister committed to sharing the
            good news of Jesus Christ with clarity, compassion, and hope.
          </p>
          <p>
            His ministry invites people to understand where they have been,
            discover who they are in Christ, and live forward with a greater
            expectation of what God can do.
          </p>
          <div className="pastor-signoff">
            <span>Pastor Troy</span>
            <small>Greater Expectation Church</small>
          </div>
        </div>
      </section>

      <section className="ministry-section" id="ministry">
        <div className="section-heading ministry-heading">
          <div>
            <p className="eyebrow light">Life together</p>
            <h2>Faith in action.</h2>
          </div>
          <p>
            These AI-created illustrative scenes envision the spirit of Pastor
            Troy’s preaching, teaching, and pastoral care. They are not
            documentary event photos.
          </p>
        </div>
        <div className="ministry-grid">
          {ministryScenes.map((scene, index) => (
            <figure key={scene.src} className={index === 0 ? "ministry-featured" : ""}>
              <img src={scene.src} alt={scene.alt} />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{scene.label}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="prayer-section" id="prayer">
        <div>
          <p className="eyebrow navy">Prayer changes things</p>
          <h2>You don’t have to carry it alone.</h2>
        </div>
        <div>
          <p>
            Greater Expectation is preparing a place for prayer requests,
            encouragement, and pastoral connection. Until official contact
            information is confirmed, hold this promise close:
          </p>
          <blockquote>“Cast all your anxiety on him because he cares for you.”</blockquote>
          <span>1 Peter 5:7</span>
        </div>
      </section>

      <section className="connect-section" id="connect">
        <img src="/images/greater-expectation-logo.jpg" alt="" aria-hidden="true" />
        <div className="connect-glow" aria-hidden="true" />
        <div>
          <p className="eyebrow light">Your next step</p>
          <h2>Come expecting God to meet you here.</h2>
          <p>
            Service times, location, prayer-request details, and official church
            contact information will be added once confirmed.
          </p>
          <a className="button button-light" href="#home">Return to Welcome</a>
        </div>
      </section>

      <footer>
        <a className="footer-logo" href="#home" aria-label="Greater Expectation Church home">
          <img src="/images/greater-expectation-logo.jpg" alt="Greater Expectation Church" />
        </a>
        <div className="footer-links">
          <a href="#visit">New Here</a>
          <a href="#messages">Messages</a>
          <a href="#pastor">Pastor Troy</a>
          <a href="#ministry">Ministry</a>
        </div>
        <div className="footer-meta">
          <strong>Faith • Purpose • Expectation</strong>
          <span>© {new Date().getFullYear()} Greater Expectation Church</span>
          <a
            className="design-credit"
            href="https://franksmithlll.com/"
            rel="author"
          >
            Website design by Frank Smith New Jersey
          </a>
        </div>
      </footer>
    </main>
  );
}

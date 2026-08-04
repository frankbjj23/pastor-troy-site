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
    copy: "Follow the sound into an immersive library of Scripture and Gospel-centered encouragement.",
    href: "/messages",
    action: "Enter the experience",
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
    title: "About Us",
    copy: "Discover our Christ-centered vision and Pastor Troy’s story of restoration.",
    href: "/about",
    action: "Know our heart",
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
          <a href="/messages">Messages</a>
          <a href="/about">About</a>
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
          <h1 id="hero-title">Greater Expectation Church: Christ at the center, people growing in faith.</h1>
          <p className="hero-intro">
            Greater Expectation Church is a Christ-centered Baptist Christian
            ministry led by Pastor Troy E. Bazemore. Come as you are, encounter Christ
            through the Word, and grow with a welcoming church family.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Plan Your Visit</a>
            <a className="button button-outline" href="/messages">Explore Messages</a>
          </div>
        </div>
        <div className="hero-pastor">
          <img src="/images/pastor-troy-main-refined.png" alt="Pastor Troy E. Bazemore of Greater Expectation Church" />
          <div className="pastor-caption">
            <span>Lead Pastor</span>
            <strong>Pastor Troy E. Bazemore</strong>
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
            Greater Expectation Church is a Christ-centered Baptist church community
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

      <section className="vision-preview" aria-labelledby="vision-preview-title">
        <div className="vision-preview-copy">
          <p className="eyebrow light">Our vision</p>
          <h2 id="vision-preview-title">Because Jesus is greater, we expect greater.</h2>
          <p>
            We believe Christ transforms lives, restores families, strengthens
            communities, and equips ordinary people to advance the Kingdom of God.
            Our confidence rests in the finished work of Jesus and the ongoing work
            of the Holy Spirit.
          </p>
          <a className="vision-link" href="/about#vision">
            Read our full vision <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="vision-pillars" aria-label="How we live">
          <article>
            <span>01</span>
            <h3>Faith over fear</h3>
            <p>Trusting the greater promises of Christ in every season.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Purpose over passivity</h3>
            <p>Serving, growing, and living as people called by God.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Expectation over doubt</h3>
            <p>Believing that nothing is impossible with our God.</p>
          </article>
        </div>
      </section>

      <section className="slogan-section" aria-label="Greater Expectation Church slogan">
        <p className="eyebrow light">Live with expectation</p>
        <blockquote>
          “Your past explains where you&apos;ve been. Christ reveals where you&apos;re going.
          Live with a Greater Expectation!”
        </blockquote>
        <span className="slogan-rule" />
      </section>

      <section className="messages-section" id="messages">
        <div className="section-heading">
          <div>
            <p className="eyebrow navy">The Messages experience</p>
            <h2>Follow the sound. Enter the sanctuary.</h2>
          </div>
          <p>
            Walk toward the Word as a distant sermon becomes clear, enter the
            sanctuary, and choose a minister’s message library.
          </p>
        </div>
        <a className="messages-experience" href="/messages" aria-label="Enter the Greater Expectation Messages experience">
          <span className="experience-door-glow" aria-hidden="true" />
          <span className="experience-copy">
            <span className="experience-label">An immersive message journey</span>
            <strong>Come closer.<br />The doors are opening.</strong>
            <span className="experience-description">
              Hear the sermon grow clearer, step into the sanctuary, and select
              the voice you want to hear.
            </span>
            <span className="experience-action">Enter Messages <span aria-hidden="true">→</span></span>
            <small>Current minister portraits and voices include clearly labeled AI demonstrations.</small>
          </span>
          <span className="experience-steps" aria-hidden="true">
            <span><i>01</i> Follow the sound</span>
            <span><i>02</i> Watch the doors open</span>
            <span><i>03</i> Choose a message</span>
          </span>
        </a>
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
            <a href="/messages">Hear this message <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <section className="pastor-section" id="pastor">
        <div className="pastor-photo">
          <img src="/images/pastor-troy-main-refined.png" alt="Pastor Troy E. Bazemore" />
        </div>
        <div className="pastor-copy">
          <p className="eyebrow navy">Meet our pastor</p>
          <h2>A life restored. A calling answered.</h2>
          <p className="large-copy">
            Pastor Troy E. Bazemore is the founder and lead pastor of Greater
            Expectation Church. Shaped by a family legacy of Christian ministry
            and his own testimony of Christ&apos;s restoring grace, he is committed
            to teaching Scripture clearly and helping people know who they are in Christ.
          </p>
          <p>
            Alongside Elder Tanisha Bazemore, co-pastor and co-founder, he leads
            a ministry centered on transformed lives, restored families,
            equipped disciples, and enduring hope in Jesus.
          </p>
          <a className="pastor-story-link" href="/about#pastor-story">
            Read Pastor Troy&apos;s story <span aria-hidden="true">→</span>
          </a>
          <div className="pastor-signoff">
            <span>Pastor Troy E. Bazemore</span>
            <small>Founder &amp; Lead Pastor</small>
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
          <a href="/messages">Messages</a>
          <a href="/about">About</a>
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

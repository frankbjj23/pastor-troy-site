import type { Metadata } from "next";
import Link from "next/link";

const pageUrl = "https://greaterexpectation.org/about";
const pageTitle = "About Greater Expectation Church | Pastor Troy E. Bazemore";
const pageDescription =
  "Discover the Christ-centered vision of Greater Expectation Church and the testimony, preparation, and calling of founder and lead pastor Troy E. Bazemore.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
    siteName: "Greater Expectation Church",
    images: [
      {
        url: "/og-greater-expectation-v2.png",
        width: 1672,
        height: 941,
        alt: "Greater Expectation Church with Pastor Troy E. Bazemore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-greater-expectation-v2.png"],
  },
};

const expectations = [
  {
    number: "01",
    title: "Transformed lives",
    copy: "His power is greater than sin.",
  },
  {
    number: "02",
    title: "Freedom",
    copy: "His freedom is greater than bondage.",
  },
  {
    number: "03",
    title: "Healing",
    copy: "His mercy is greater than our pain.",
  },
  {
    number: "04",
    title: "Restoration",
    copy: "His grace is greater than our past.",
  },
  {
    number: "05",
    title: "Victory",
    copy: "His promises are greater than our problems.",
  },
  {
    number: "06",
    title: "Hope",
    copy: "His truth is greater than every lie.",
  },
  {
    number: "07",
    title: "The impossible",
    copy: "Nothing is impossible with our God.",
  },
];

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": "https://greaterexpectation.org/#website" },
        about: [
          { "@id": "https://greaterexpectation.org/#church" },
          { "@id": `${pageUrl}#pastor-troy-bazemore` },
        ],
        datePublished: "2026-08-04",
        dateModified: "2026-08-04",
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${pageUrl}#pastor-troy-bazemore`,
        name: "Pastor Troy E. Bazemore",
        jobTitle: "Founder and Lead Pastor",
        image: "https://greaterexpectation.org/images/pastor-troy-main-refined.png",
        worksFor: { "@id": "https://greaterexpectation.org/#church" },
        spouse: {
          "@type": "Person",
          name: "Elder Tanisha Bazemore",
          jobTitle: "Co-Pastor and Co-Founder",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://greaterexpectation.org/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="site-header about-header">
        <Link className="brand" href="/" aria-label="Greater Expectation Church home">
          <img src="/images/greater-expectation-logo.jpg" alt="" />
          <span>
            <strong>Greater Expectation</strong>
            <small>Faith • Purpose • Expectation</small>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#visit">New Here</Link>
          <Link href="/messages">Messages</Link>
          <a href="#vision" aria-current="page">About</a>
          <Link href="/#ministry">Ministry</Link>
        </nav>
        <Link className="header-cta" href="/#visit">Plan Your Visit</Link>
      </header>

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-light" aria-hidden="true" />
        <div className="about-hero-copy">
          <p className="eyebrow light">Who we are</p>
          <h1 id="about-title">Because Jesus is greater, we expect greater.</h1>
          <p>
            Greater Expectation Church is a Christ-centered Baptist community
            convinced that the power, freedom, mercy, grace, promises, and truth
            of Jesus are greater than anything His people face.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#vision">Explore our vision</a>
            <a className="button button-outline" href="#pastor-story">Meet Pastor Troy</a>
          </div>
        </div>
        <aside className="about-purpose-card">
          <span>Our purpose</span>
          <p>
            To see ordinary people become godly people, families restored,
            communities transformed, and disciples equipped to advance the Kingdom of God.
          </p>
        </aside>
      </section>

      <section className="vision-story" id="vision" aria-labelledby="vision-title">
        <div className="vision-story-heading">
          <p className="eyebrow navy">The vision of Greater Expectation</p>
          <h2 id="vision-title">A vision rooted in the greatness of Christ.</h2>
        </div>
        <div className="vision-story-copy">
          <p className="large-copy">
            Because we have been redeemed by the Greater—Jesus Christ—we believe
            we should live with greater expectation. We expect greater because
            our Savior is greater.
          </p>
          <p>
            Our vision is to raise up men, women, and children who know who they
            are in Christ and live with unwavering confidence in His Word. We
            believe the Holy Spirit is changing believers from the inside out,
            producing the character of Christ and empowering lives that glorify God.
          </p>
          <p>
            Our confidence is never in human ability. It is in the finished work
            of Jesus Christ and the ongoing work of the Holy Spirit.
          </p>
        </div>
      </section>

      <section className="expectation-section" aria-labelledby="expectation-title">
        <div className="expectation-heading">
          <p className="eyebrow light">What we expect</p>
          <h2 id="expectation-title">The Greater is still at work.</h2>
          <p>
            The circumstances may be real, but they are never greater than Christ.
          </p>
        </div>
        <div className="expectation-grid">
          {expectations.map((expectation) => (
            <article key={expectation.number}>
              <span>{expectation.number}</span>
              <h3>{expectation.title}</h3>
              <p>{expectation.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-we-live" aria-labelledby="how-we-live-title">
        <div className="how-we-live-intro">
          <p className="eyebrow navy">How we live</p>
          <h2 id="how-we-live-title">A people shaped by confident hope.</h2>
          <p>
            As we await the return of our Messiah, we choose a life that reflects
            the hope, purpose, and victory we have in Him.
          </p>
        </div>
        <div className="how-we-live-list">
          <article>
            <span>01</span>
            <div>
              <h3>Faith instead of fear</h3>
              <p>We trust the Word and character of God beyond what we can see.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Purpose instead of passivity</h3>
              <p>We pray, worship, serve, give, love, and believe with intention.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Expectation instead of doubt</h3>
              <p>We refuse to let the past, the present, or circumstances define the future.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="vision-manifesto" aria-label="Greater Expectation declaration">
        <p>
          “Because our Redeemer is greater, our future is greater. Because our
          King is greater, our hope is greater. Because Jesus is greater, we expect greater.”
        </p>
        <span>Greater Expectation Church</span>
      </section>

      <section className="pastor-story" id="pastor-story" aria-labelledby="pastor-story-title">
        <div className="pastor-story-photo">
          <img src="/images/pastor-troy-main-refined.png" alt="Pastor Troy E. Bazemore" />
          <div>
            <span>Founder &amp; Lead Pastor</span>
            <strong>Pastor Troy E. Bazemore</strong>
          </div>
        </div>
        <div className="pastor-story-copy">
          <p className="eyebrow navy">Meet Pastor Troy</p>
          <h2 id="pastor-story-title">A life restored. A calling answered.</h2>
          <p className="large-copy">
            Pastor Troy E. Bazemore was raised in a family with a rich legacy of
            ministry and accepted Jesus Christ at nine years old. His own journey,
            however, would teach him that inherited faith must become personal faith.
          </p>
          <p>
            After trying to walk away from God, he experienced homelessness,
            alcohol addiction, violence, and a near-death encounter. At his lowest
            point, Jesus met him with hope, healing, and restoration. That testimony
            now shapes a ministry that reminds people their past does not limit
            what God can redeem.
          </p>
          <blockquote>
            “While I was dating sin, Jesus made a pass at me.”
          </blockquote>
          <p>
            Today, Pastor Troy and his wife, Elder Tanisha Bazemore, serve together
            as founders of Greater Expectation Church. She is his co-pastor,
            faithful helpmeet, and confidante; together they are parents of five.
          </p>
        </div>
      </section>

      <section className="pastor-details" aria-label="Pastor Troy's background and preparation">
        <article>
          <span>01</span>
          <h3>A legacy of faith</h3>
          <p>
            His grandfather, the late Pastor John Bazemore Sr., pastored Reid Temple
            Church of God in Christ for more than 30 years. His grandmother, Lucille
            Span, traveled as an evangelist and served as a C.O.G.I.C. state supervisor.
            His father is Pastor John Bazemore Jr. of Restoration Christian Ministry.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Called and equipped</h3>
          <p>
            When a missing high school diploma closed traditional doors, Pastor Troy
            continued studying theology, doctrine, apologetics, Christian history,
            and Scripture. An online Bible school recognized his ability, and he
            earned a Diploma in Christian Studies.
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>Prepared to serve</h3>
          <p>
            He later earned a Bachelor of Divinity and received an honorary Doctor
            of Divinity from Spirit of Truth Institute in Richmond, Virginia. His
            additional preparation includes Sure Foundation, The Way of the Master
            Institute, American Bible Institute, and extensive Christian research.
          </p>
        </article>
        <article>
          <span>04</span>
          <h3>Serving with accountability</h3>
          <p>
            Pastor Troy served under the late Bishop Herbert Banks as Overseer of
            P.D.O.M. Ministries and now serves under Bishop Charles Harris of CKMI.
            His story stands as living proof that God qualifies those He calls.
          </p>
        </article>
      </section>

      <section className="about-closing">
        <div>
          <p className="eyebrow light">The invitation</p>
          <h2>Your past does not get the final word.</h2>
          <p>
            Because Jesus is greater, restoration is possible, purpose can be
            renewed, and hope can rise again. Come grow with us.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/messages">Explore Messages</Link>
            <Link className="button button-outline" href="/#visit">Plan Your Visit</Link>
          </div>
        </div>
      </section>

      <footer>
        <Link className="footer-logo" href="/" aria-label="Greater Expectation Church home">
          <img src="/images/greater-expectation-logo.jpg" alt="Greater Expectation Church" />
        </Link>
        <div className="footer-links">
          <Link href="/#visit">New Here</Link>
          <Link href="/messages">Messages</Link>
          <a href="#vision">Our Vision</a>
          <a href="#pastor-story">Pastor Troy</a>
        </div>
        <div className="footer-meta">
          <strong>Faith • Purpose • Expectation</strong>
          <span>© {new Date().getFullYear()} Greater Expectation Church</span>
          <a className="design-credit" href="https://franksmithlll.com/" rel="author">
            Website design by Frank Smith New Jersey
          </a>
        </div>
      </footer>
    </main>
  );
}

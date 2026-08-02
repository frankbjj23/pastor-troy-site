import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const canonicalUrl = "https://greaterexpectation.org/";
const socialImageUrl = "https://greaterexpectation.org/og-greater-expectation-v2.png";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Greater Expectation Church | Pastor Troy";
const description = "Greater Expectation Church is a Christ-centered Baptist Christian ministry led by Pastor Troy, sharing the Gospel through Scripture, prayer, worship, fellowship, and Christian encouragement.";

export function generateMetadata(): Metadata {
  const base = new URL(canonicalUrl);

  return {
    metadataBase: base,
    title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "1WaqZNjWxqrn9S2ikJC2yVncaU9ApmhQBOUidq06j2I",
    },
    icons: { icon: "/images/greater-expectation-logo.jpg", shortcut: "/images/greater-expectation-logo.jpg" },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "Greater Expectation Church",
      images: [{ url: socialImageUrl, width: 1672, height: 941, alt: "Greater Expectation Church with Pastor Troy" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImageUrl] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        "@id": `${canonicalUrl}#church`,
        name: "Greater Expectation Church",
        alternateName: "Greater Expectation",
        url: canonicalUrl,
        description,
        image: socialImageUrl,
        slogan: "Faith • Purpose • Expectation",
        leader: {
          "@type": "Person",
          name: "Pastor Troy",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: "Greater Expectation Church",
        description,
        publisher: { "@id": `${canonicalUrl}#church` },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${canonicalUrl}#website` },
        about: { "@id": `${canonicalUrl}#church` },
        datePublished: "2026-07-29",
        dateModified: "2026-08-02",
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

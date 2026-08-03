import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "https://greaterexpectation.org/messages" },
};

export default function MessagesDemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

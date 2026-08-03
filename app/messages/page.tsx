import type { Metadata } from "next";
import MessagesExperience from "../messages-demo/page";

export const metadata: Metadata = {
  title: "Messages | Greater Expectation Church",
  description:
    "Enter the Greater Expectation Church Messages experience and explore Gospel-centered Christian encouragement from Pastor Troy and the ministry team.",
  alternates: { canonical: "https://greaterexpectation.org/messages" },
  openGraph: {
    title: "Messages | Greater Expectation Church",
    description:
      "Follow the sound, enter the sanctuary, and explore Gospel-centered messages from Greater Expectation Church.",
    url: "https://greaterexpectation.org/messages",
    type: "website",
  },
};

export default function MessagesPage() {
  return <MessagesExperience />;
}

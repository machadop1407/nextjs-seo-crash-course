import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazing Recipes - Recipes.com",
  description: "Find the best recipes in the world on this website.",
  keywords: ["recipes", "food", "best recipes"],
  openGraph: {
    title: "Best Recipes in the World",
    description: "Find the best recipes in the world on this website.",
    siteName: "Recipes.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image", // or "summary"
    title: "Next.js SEO Crash Course",
    description: "Master metadata, robots, sitemaps, and more.",
    creator: "@pedrotech",
    images: ["https://example.com/seo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://Recipes.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to our sample application! This is a perfect example of a
          static route that you can enhance with metadata for SEO purposes.
        </p>
        <p className="mb-4">
          This page demonstrates how Next.js handles static routes and how you
          can later add metadata like title, description, and Open Graph tags to
          improve search engine optimization.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-4">
          We're here to help you learn about metadata and SEO in Next.js
          applications. This sample app provides various route types that you
          can enhance with proper metadata configuration.
        </p>
        <h2 className="text-2xl font-semibold mb-3">What You'll Learn</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Static route metadata</li>
          <li>Dynamic route metadata</li>
          <li>Open Graph tags</li>
          <li>Twitter Card metadata</li>
          <li>Structured data</li>
        </ul>
      </div>
    </div>
  );
}

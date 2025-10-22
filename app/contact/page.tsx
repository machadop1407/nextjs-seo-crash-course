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
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl">
        <p className="text-lg mb-6">
          Get in touch with us! This is another static route that's perfect for
          demonstrating metadata configuration.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> hello@example.com
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Learning Street, Education City, EC
              12345
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">SEO Learning Notes</h2>
          <p className="mb-2">This contact page is ideal for teaching:</p>
          <ul className="list-disc pl-6">
            <li>Contact page specific metadata</li>
            <li>Local business schema markup</li>
            <li>Contact information structured data</li>
            <li>Canonical URLs for contact pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

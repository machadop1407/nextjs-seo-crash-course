import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Metadata Course</h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn how to implement SEO and metadata features in Next.js
          applications
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          This sample application demonstrates different types of routes and
          pages that you can enhance with proper metadata configuration for
          better SEO.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            Static Routes
          </h2>
          <p className="text-gray-600 mb-4">
            Learn about static routes and how to add metadata to pages that
            don't change dynamically.
          </p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                About Page
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact Page
              </Link>
            </li>
          </ul>
          <div className="bg-blue-50 p-3 rounded text-sm">
            <strong>Teaching Focus:</strong> Static metadata, page titles,
            descriptions
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Dynamic Routes
          </h2>
          <p className="text-gray-600 mb-4">
            Explore dynamic routes and how to generate metadata based on route
            parameters.
          </p>
          <ul className="space-y-2 mb-4">
            <li>
              <Link
                href="/blog"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                Blog Listing
              </Link>
            </li>
            <li>
              <Link
                href="/blog/getting-started-with-nextjs"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                Sample Blog Post
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                Products Listing
              </Link>
            </li>
            <li>
              <Link
                href="/products/laptop-pro"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                Sample Product
              </Link>
            </li>
          </ul>
          <div className="bg-green-50 p-3 rounded text-sm">
            <strong>Teaching Focus:</strong> Dynamic metadata, structured data,
            Open Graph
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">
            SEO Features
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the SEO features you can implement across different page
            types.
          </p>
          <ul className="space-y-2 mb-4 text-sm">
            <li>• Page titles and meta descriptions</li>
            <li>• Open Graph tags for social sharing</li>
            <li>• Twitter Card metadata</li>
            <li>• Structured data (Schema.org)</li>
            <li>• Canonical URLs</li>
            <li>• Sitemap generation</li>
          </ul>
          <div className="bg-purple-50 p-3 rounded text-sm">
            <strong>Teaching Focus:</strong> Complete SEO implementation
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Course Structure
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
            <ul className="space-y-2">
              <li>• Next.js metadata API</li>
              <li>• Static vs dynamic metadata</li>
              <li>• Open Graph optimization</li>
              <li>• Structured data implementation</li>
              <li>• SEO best practices</li>
              <li>• Performance considerations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Sample Pages</h3>
            <ul className="space-y-2">
              <li>• Home page with overview</li>
              <li>• About page (static)</li>
              <li>• Contact page (static)</li>
              <li>• Blog listing (static)</li>
              <li>• Blog posts (dynamic)</li>
              <li>• Product pages (dynamic)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Ready to start learning? Navigate through the different pages using
          the menu above.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start with About Page
          </Link>
          <Link
            href="/blog"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Explore Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

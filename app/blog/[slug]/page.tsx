interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Sample blog post data
const blogPosts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that provides a great developer experience with many built-in features. In this article, we'll explore the basics of getting started with Next.js.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
        <li>Automatic code splitting</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>To create a new Next.js project, you can use the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will create a new Next.js application with all the necessary dependencies and configuration files.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    excerpt:
      "Learn the basics of Next.js and how to build modern web applications.",
  },
  "understanding-metadata": {
    title: "Understanding Metadata in Web Development",
    content: `
      <h2>What is Metadata?</h2>
      <p>Metadata is data that describes other data. In web development, metadata provides information about a web page that is not visible to users but is important for search engines and other systems.</p>
      
      <h3>Types of Metadata</h3>
      <ul>
        <li><strong>Title tags:</strong> The title of the page</li>
        <li><strong>Meta descriptions:</strong> Brief descriptions of page content</li>
        <li><strong>Open Graph tags:</strong> For social media sharing</li>
        <li><strong>Twitter Cards:</strong> For Twitter sharing</li>
        <li><strong>Structured data:</strong> Machine-readable information</li>
      </ul>
      
      <h3>Why Metadata Matters</h3>
      <p>Proper metadata helps search engines understand your content, improves click-through rates from search results, and enhances social media sharing.</p>
    `,
    author: "Jane Smith",
    date: "2024-01-10",
    excerpt: "A comprehensive guide to metadata and its importance for SEO.",
  },
  "seo-best-practices": {
    title: "SEO Best Practices for Developers",
    content: `
      <h2>SEO Fundamentals</h2>
      <p>Search Engine Optimization (SEO) is crucial for making your website discoverable. Here are some best practices every developer should know.</p>
      
      <h3>Technical SEO</h3>
      <ul>
        <li>Fast loading times</li>
        <li>Mobile-friendly design</li>
        <li>Clean URL structure</li>
        <li>Proper heading hierarchy</li>
        <li>Alt text for images</li>
      </ul>
      
      <h3>Content SEO</h3>
      <ul>
        <li>Keyword research and optimization</li>
        <li>High-quality, original content</li>
        <li>Internal linking</li>
        <li>Regular content updates</li>
      </ul>
      
      <h3>Next.js SEO Features</h3>
      <p>Next.js provides excellent built-in SEO features including automatic optimization, image optimization, and flexible metadata configuration.</p>
    `,
    author: "Mike Johnson",
    date: "2024-01-05",
    excerpt: "Essential SEO techniques every developer should know.",
  },
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <a
          href="/blog"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          ← Back to Blog
        </a>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-4">
            <p>
              By {post.author} • {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
          <p className="text-lg text-gray-700">{post.excerpt}</p>
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Teaching Notes</h2>
        <p className="mb-2">This dynamic blog post page demonstrates:</p>
        <ul className="list-disc pl-6">
          <li>Dynamic route metadata generation</li>
          <li>Content-specific SEO optimization</li>
          <li>Article structured data</li>
          <li>Social media sharing optimization</li>
          <li>Breadcrumb navigation</li>
        </ul>
      </div>
    </div>
  );
}

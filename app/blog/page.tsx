export default function BlogPage() {
  const posts = [
    {
      id: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      excerpt:
        "Learn the basics of Next.js and how to build modern web applications.",
      date: "2024-01-15",
      author: "John Doe",
    },
    {
      id: "understanding-metadata",
      title: "Understanding Metadata in Web Development",
      excerpt: "A comprehensive guide to metadata and its importance for SEO.",
      date: "2024-01-10",
      author: "Jane Smith",
    },
    {
      id: "seo-best-practices",
      title: "SEO Best Practices for Developers",
      excerpt: "Essential SEO techniques every developer should know.",
      date: "2024-01-05",
      author: "Mike Johnson",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg mb-8">
        Welcome to our blog! This page demonstrates a static route with dynamic
        content that links to individual blog posts.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {post.title}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
              <p>By {post.author}</p>
              <p>{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Teaching Notes</h2>
        <p className="mb-2">
          This blog listing page is perfect for demonstrating:
        </p>
        <ul className="list-disc pl-6">
          <li>Static page metadata</li>
          <li>Blog listing page optimization</li>
          <li>Internal linking structure</li>
          <li>Breadcrumb navigation</li>
        </ul>
      </div>
    </div>
  );
}

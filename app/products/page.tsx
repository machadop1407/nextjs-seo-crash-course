export default function ProductsPage() {
  const products = [
    {
      id: "laptop-pro",
      name: 'Laptop Pro 15"',
      price: 1299,
      description:
        "High-performance laptop perfect for developers and content creators.",
      category: "Electronics",
      brand: "TechCorp",
      inStock: true,
      rating: 4.8,
      reviews: 1247,
    },
    {
      id: "wireless-headphones",
      name: "Wireless Noise-Canceling Headphones",
      price: 299,
      description:
        "Premium wireless headphones with active noise cancellation.",
      category: "Audio",
      brand: "SoundMax",
      inStock: true,
      rating: 4.6,
      reviews: 892,
    },
    {
      id: "smart-watch",
      name: "Smart Watch Series 5",
      price: 399,
      description:
        "Advanced smartwatch with health monitoring and fitness tracking.",
      category: "Wearables",
      brand: "FitTech",
      inStock: false,
      rating: 4.4,
      reviews: 567,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-lg mb-8">
        Discover our range of products! This page demonstrates a product listing
        with links to individual product pages.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              <a
                href={`/products/${product.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {product.name}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
              <span
                className={`ml-3 px-2 py-1 rounded-full text-xs ${
                  product.inStock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              <div className="flex items-center mb-1">
                <span className="text-yellow-500">★</span>
                <span className="ml-1">{product.rating}</span>
                <span className="ml-2">({product.reviews} reviews)</span>
              </div>
              <p>
                {product.brand} • {product.category}
              </p>
            </div>

            <a
              href={`/products/${product.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-orange-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Teaching Notes</h2>
        <p className="mb-2">This products listing page demonstrates:</p>
        <ul className="list-disc pl-6">
          <li>E-commerce listing page optimization</li>
          <li>Product category metadata</li>
          <li>Internal linking for products</li>
          <li>Product collection structured data</li>
          <li>Pagination metadata (if implemented)</li>
        </ul>
      </div>
    </div>
  );
}

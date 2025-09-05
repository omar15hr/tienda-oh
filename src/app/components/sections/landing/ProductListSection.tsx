import Image from 'next/image';

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "White Sneakers"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Black Sneakers"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Grey Sneakers"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Classic White"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Navy Sneakers"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Brown Sneakers"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Black Leather"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Beige Sneakers"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Colorful Sneakers"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1549298916-acc8271a00d6?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Light Grey"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1600054800495-2d4b4e1a6b96?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "Blue Sneakers"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=300&h=300&fit=crop&crop=center&q=80",
    alt: "White Athletic"
  }
];

export default function ProductListSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-2">
          {products.map((product) => (
            <div 
              key={product.id}
              className="aspect-square bg-white overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-md text-sm uppercase tracking-wider">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
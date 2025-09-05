import Image from 'next/image';

export default function ImagesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Men's Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Men&apos;s
            </h2>
            <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/men.jpg"
                alt="Men's Collection"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Women's Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Women&apos;s
            </h2>
            <div className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              <Image
                src="/images/women.jpg"
                alt="Women's Collection"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every style and occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-md">
              Shop Men&apos;s
            </button>
            <button className="px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-200 rounded-md">
              Shop Women&apos;s
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

export default function ImagesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat">
              HOMBRES
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

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat">
              MUJERES
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

        <div className="text-center mt-16">
          <p className="text-lg mb-8 max-w-2xl mx-auto font-poppins">
            Discover our carefully curated collections designed for every style and occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white text-small h-10 w-[193px] px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer">
              Colección Hombres
            </button>
            <button className="border-black text-small h-10 w-[193px] border-1 px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer">
              Colección Mujeres
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
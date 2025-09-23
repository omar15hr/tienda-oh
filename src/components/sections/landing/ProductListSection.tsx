import Image from "next/image";

const products = [
  {
    id: 1,
    image:
      "/images/polera-train-rest-repeat.svg",
    alt: "White Sneakers",
  },
  {
    id: 2,
    image:
      "/images/short-azul-oh-bolsillo-rojo.svg",
    alt: "Black Sneakers",
  },
  {
    id: 3,
    image:
      "/images/short-negro-bordes-amarillos.svg",
    alt: "Grey Sneakers",
  },
  {
    id: 4,
    image:
      "/images/short-azul-fresh-and-go.svg",
    alt: "Classic White",
  },
  {
    id: 5,
    image:
      "/images/short-morado-oh-bolsillos-negros.svg",
    alt: "Navy Sneakers",
  },
  {
    id: 6,
    image:
      "/images/sweater.jpg",
    alt: "Brown Sneakers",
  },
  {
    id: 7,
    image:
      "/images/sweater.jpg",
    alt: "Black Leather",
  },
  {
    id: 8,
    image:
      "/images/sweater.jpg",
    alt: "Beige Sneakers",
  },
  {
    id: 9,
    image:
      "/images/sweater.jpg",
    alt: "Colorful Sneakers",
  },
  {
    id: 10,
    image:
      "/images/sweater.jpg",
    alt: "Light Grey",
  },
  {
    id: 11,
    image:
      "/images/sweater.jpg",
    alt: "Blue Sneakers",
  },
  {
    id: 12,
    image:
      "/images/sweater.jpg",
    alt: "White Athletic",
  },
];

export default function ProductListSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
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

        <div className="flex justify-center mt-12">
          <button className="bg-black text-white text-small h-10 w-[193px] px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer">
            Ver Colección
          </button>
        </div>
      </div>
    </section>
  );
}

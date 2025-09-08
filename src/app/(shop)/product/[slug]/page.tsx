import SizeSelector from "@/components/product/SizeSelector";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <h1>Hola Mundo</h1>
      </div>

      <div className="col-span-1 px-5 font-poppins">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>

        <SizeSelector
          availableSizes={product.sizes}
        />

        <button className="bg-black text-white text-small h-10 w-[183px] px-[16px] py-[10px] leading-5 font-medium font-poppins cursor-pointer">
          Nueva Colección
        </button>

        <h3 className="font-bold text-md mb-2 mt-10 font-montserrat">
          Descripción
        </h3>
        <p className="font-light text-sm">{product.description}</p>
      </div>
    </div>
  );
}

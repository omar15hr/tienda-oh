import { WhatsAppIcon } from "@/components/Icons";
import ProductMobileSlideShow from "@/components/product/ProductMobileSlideShow";
import ProductSlideShow from "@/components/product/ProductSlideShow";
import SizeSelector from "@/components/product/SizeSelector";
import { initialData } from "@/seed/seed";
import Link from "next/link";
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
      <div className="col-span-1 md:col-span-2 px-5">
        <ProductMobileSlideShow
          className="block md:hidden"
          title={product.title}
          images={product.images}
        />
        <ProductSlideShow
          className="hidden md:block"
          title={product.title}
          images={product.images}
        />
      </div>

      <div className="col-span-1 px-5 font-poppins">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>

        <SizeSelector availableSizes={product.sizes} />

        <Link
          href={"https://wa.me/5493515555555"}
          className="flex gap-2 items-center justify-center bg-black text-white text-small h-10 w-[193px] px-[18px] py-[10px] leading-5 font-medium font-poppins cursor-pointer"
        >
          <WhatsAppIcon />
          Compra ahora
        </Link>

        <h3 className="font-bold text-md mb-2 mt-10 font-montserrat">
          Descripción
        </h3>
        <p className="font-light text-sm">{product.description}</p>
      </div>
    </div>
  );
}

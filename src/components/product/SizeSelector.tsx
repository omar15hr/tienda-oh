import { ValidSizes } from "@/interfaces/product.interface";

interface Props {
  selectedSize?: ValidSizes;
  availableSizes: ValidSizes[];
}

export default function SizeSelector({ availableSizes }: Props) {
  return (
    <div className="my-5">
      <h3 className="font-bold font-montserrat mb-4 text-md">
        Tallas disponibles
      </h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <div key={size} className="mx-2 text-md">
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}

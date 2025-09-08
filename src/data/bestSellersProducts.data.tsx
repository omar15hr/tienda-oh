import { Product } from "@/interfaces/product.interface";

export const bestSellersProducts: Product[] = [
  {
    description:
      "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
    images: ["/images/sweater.jpg", "/images/origin.jpg"],
    inStock: 10,
    price: 130,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    slug: "chill_pullover_hoodie",
    type: "hoodies",
    tags: ["hoodie"],
    title: "Chill Pullover Hoodie",
    gender: "women",
  },
  {
    description:
      "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
    images: ["/images/sweater.jpg", "/images/origin.jpg"],
    inStock: 13,
    price: 60,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    slug: "cybertruck_graffiti_hoodie",
    type: "hoodies",
    tags: ["hoodie"],
    title: "Cybertruck Graffiti Hoodie",
    gender: "men",
  },
  {
    description:
      "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
    images: ["/images/sweater.jpg", "/images/origin.jpg"],
    inStock: 0,
    price: 40,
    sizes: ["XS", "S"],
    slug: "women_turbine_cropped_short_sleeve_tee",
    type: "shirts",
    tags: ["shirt"],
    title: "Women's Turbine Cropped Short Sleeve Tee",
    gender: "women",
  },
];

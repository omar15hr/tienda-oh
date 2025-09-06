interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: "men" | "women" | "kid";
}

type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
type ValidTypes = "shirts" | "pants" | "hoodies" | "t-shirts";

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
      images: ["1740176-00-A_0_2000.jpg", "1740176-00-A_1.jpg"],
      inStock: 7,
      price: 75,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      slug: "mens_chill_crew_neck_sweatshirt",
      type: "shirts",
      tags: ["sweatshirt"],
      title: "Men’s Chill Crew Neck Sweatshirt",
      gender: "men",
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 5,
      price: 200,
      sizes: ["XS", "S", "M", "XL", "XXL"],
      slug: "men_quilted_shirt_jacket",
      type: "shirts",
      tags: ["jacket"],
      title: "Men's Quilted Shirt Jacket",
      gender: "men",
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 10,
      price: 130,
      sizes: ["S", "M", "L", "XL", "XXL"],
      slug: "men_raven_lightweight_zip_up_bomber_jacket",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Raven Lightweight Zip Up Bomber Jacket",
      gender: "men",
    },

    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 50,
      price: 45,
      sizes: ["XS", "S", "M", "L"],
      slug: "men_turbine_long_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Turbine Long Sleeve Tee",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 50,
      price: 40,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_turbine_short_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Turbine Short Sleeve Tee",
      gender: "men",
    },
    {
      description:
        "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 0,
      price: 35,
      sizes: ["M", "L", "XL", "XXL"],
      slug: "men_cybertruck_owl_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Cybertruck Owl Tee",
      gender: "men",
    },
    {
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 15,
      price: 35,
      sizes: ["S", "M", "L", "XL"],
      slug: "men_solar_roof_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Solar Roof Tee",
      gender: "men",
    },
    {
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 17,
      price: 35,
      sizes: ["XS", "S", "XL", "XXL"],
      slug: "men_let_the_sun_shine_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Men's Let the Sun Shine Tee",
      gender: "men",
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
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
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
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
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 0,
      price: 40,
      sizes: ["XS", "S"],
      slug: "women_turbine_cropped_short_sleeve_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Women's Turbine Cropped Short Sleeve Tee",
      gender: "women",
    },
    {
      description:
        "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      images: ["/images/sweater.jpg", "/images/sweater.jpg"],
      inStock: 10,
      price: 30,
      sizes: ["XS", "S", "M"],
      slug: "kids_racing_stripe_tee",
      type: "shirts",
      tags: ["shirt"],
      title: "Kids Racing Stripe Tee",
      gender: "kid",
    },
  ],
};

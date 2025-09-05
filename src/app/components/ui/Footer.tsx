"use client";

import Link from "next/link";
import { FacebookIcon, InstagramIcon, TikTokIcon, YoutubeIcon } from "../Icons";

export default function Footer() {
  const socialLinks = [
    { icon: <InstagramIcon />, href: "#" },
    { icon: <FacebookIcon />, href: "#" },
    { icon: <TikTokIcon />, href: "#" },
    { icon: <YoutubeIcon />, href: "#" },
  ];

  const womenItems = [
    { label: "Vestidos", href: "#" },
    { label: "Tops", href: "#" },
    { label: "Faldas", href: "#" },
    { label: "Shorts", href: "#" },
    { label: "Poleras", href: "#" },
  ];

  const menItems = [
    { label: "Polerones", href: "#" },
    { label: "Poleras", href: "#" },
    { label: "Shorts", href: "#" },
    { label: "Musculosas", href: "#" },
  ];

  const kidsItems = [
    { label: "Polerones", href: "#" },
    { label: "Poleras", href: "#" },
    { label: "Shorts", href: "#" },
  ];

  const exploreItems = [
    { label: "Sobre Nosotros", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Canal de Youtube", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h2 className="text-4xl font-bold mb-4 font-autour">OH</h2>
            <p className="text-sm leading-relaxed mb-8 font-poppins">
              House of Blanks is a factory brand produced by Roopa Knitting
              Mills, the makers of the world&apos;s highest quality knit fabrics
              and apparel.
            </p>

            <div>
              <h3 className="font-bold mb-4 font-montserrat">SOCIAL</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="transition-colors text-sm"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mujeres */}
          <div className="col-span-1 text-left sm:text-center lg:text-center">
            <h3 className="font-bold mb-6 underline font-montserrat">
              MUJERES
            </h3>
            <nav className="space-y-4 font-poppins">
              {womenItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hombres */}
          <div className="col-span-1 text-left sm:text-center lg:text-center">
            <h3 className="text-gray-900 font-bold mb-6 underline font-montserrat">
              HOMBRES
            </h3>
            <nav className="space-y-4 font-poppins">
              {menItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Niños */}
          <div className="col-span-1 text-left sm:text-center lg:text-center">
            <h3 className="text-gray-900 font-bold mb-6 underline font-montserrat">
              NIÑOS
            </h3>
            <nav className="space-y-4 font-poppins">
              {kidsItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Explora */}
          <div className="col-span-1 text-left sm:text-center lg:text-center">
            <h3 className="text-gray-900 font-bold mb-6 underline font-montserrat">
              EXPLORA
            </h3>
            <nav className="space-y-4 font-poppins">
              {exploreItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 OH. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="text-gray-500 hover:text-gray-900 transition-colors text-sm underline hover:no-underline">
                Términos de Servicio
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors text-sm underline hover:no-underline">
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

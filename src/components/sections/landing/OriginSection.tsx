"use client";

import Image from "next/image";

export default function OriginSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight font-montserrat">
              ROPA DE LA MÁS ALTA CALIDAD
            </h2>
          </div>
        </div>

        <div className="relative bg-gray-100 lg:bg-transparent">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10"></div>
          <Image
            src="/images/origin.jpg"
            alt="Craftsman working in workshop"
            width={800}
            height={1200}
            className="w-full h-full object-cover"
            priority
          />

          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nos preocupamos por la calidad
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cada prenda es seleccionada para garantizar la máxima calidad y comodidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

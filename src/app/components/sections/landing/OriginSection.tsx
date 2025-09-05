'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function OriginSection() {
  const [email, setEmail] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && isAccepted) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setEmail('');
      setIsAccepted(false);
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Newsletter Form */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              SUBSCRIBE TO OUR<br />
              NEWSLETTER
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-0 py-4 text-gray-900 placeholder-gray-400 bg-transparent border-0 border-b-2 border-gray-200 focus:border-gray-900 focus:ring-0 focus:outline-none text-lg"
                  required
                />
                <button
                  type="submit"
                  disabled={!email || !isAccepted}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Subscribe
                </button>
              </div>
              
              <div className="space-y-4 text-sm text-gray-600">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={(e) => setIsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                  />
                  <span>
                    I have read and accept the{' '}
                    <button 
                      type="button"
                      className="underline hover:no-underline text-gray-900"
                    >
                      terms and conditions
                    </button>
                    .
                  </span>
                </label>
                
                <p className="leading-relaxed">
                  By subscribing you agree to with our Privacy Policy and provide consent to receive 
                  updates from our company.
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right Column - Image */}
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
          
          {/* Overlay Content */}
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Handcrafted Excellence
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Each pair is meticulously crafted by skilled artisans using traditional techniques 
                combined with modern innovation to ensure the highest quality and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
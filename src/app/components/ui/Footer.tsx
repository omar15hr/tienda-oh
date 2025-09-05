'use client';

import { useState } from 'react';

export default function Footer() {
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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              HOUSE OF BLANKS
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              House of Blanks is a factory brand produced by Roopa Knitting Mills, 
              the makers of the world&apos;s highest quality knit fabrics and apparel.
            </p>
            
            <div>
              <h3 className="text-gray-900 font-medium mb-4">Social</h3>
              <a 
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Information Links */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-medium mb-6 underline">Information</h3>
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Size Guide
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                FAQ
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Wholesale
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Contact
              </a>
              <a 
                href="#" 
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                Shipping & Returns
              </a>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="max-w-md lg:max-w-none">
              <p className="text-gray-900 text-sm mb-6 leading-relaxed">
                Join our newsletter to stay up to date on features and releases.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none text-sm"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!email || !isAccepted}
                    className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                
                <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={(e) => setIsAccepted(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                  />
                  <span className="leading-relaxed">
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
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 House Of Blanks. All Rights Reserved
            </p>
            <div className="flex gap-6">
              <button className="text-gray-500 hover:text-gray-900 transition-colors text-sm underline hover:no-underline">
                Terms of Service
              </button>
              <button className="text-gray-500 hover:text-gray-900 transition-colors text-sm underline hover:no-underline">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

import { Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container max-w-screen-xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-medium mb-6">About Us</h3>
            <p className="text-slate-400 mb-6">
              There are many variations of passages of Lorem the majority suffer
            </p>
            <div className="flex items-center text-slate-400">
              <Phone className="h-5 w-5 mr-2" />
              <Link href="tel:+1800-001-658" className="hover:text-amber-500 transition-colors">
                +1800-001-658
              </Link>
            </div>
          </div>
          
          {/* Our Navigate */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Navigate</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/marble" className="hover:text-amber-500 transition-colors">
                  Marble
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-amber-500 transition-colors">
                  Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Product */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Product</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/product/travertine-bianco" className="hover:text-amber-500 transition-colors">
                  Travertine Bianco
                </Link>
              </li>
              <li>
                <Link href="/product/calacatta" className="hover:text-amber-500 transition-colors">
                  Calacatta
                </Link>
              </li>
              <li>
                <Link href="/product/macael-white" className="hover:text-amber-500 transition-colors">
                  Macael White
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Showroom */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Showroom</h3>
            <p className="text-slate-400 mb-4">
              Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA
            </p>
            <p className="text-slate-400 mb-4">
              +1800-001-658
            </p>
            <p className="text-slate-400">
              Info@Peacefulthemes.Com Here
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="container max-w-screen-xl mx-auto py-6 px-4 md:px-8 text-center md:text-left">
          <p className="text-slate-400 text-sm">
            Copyright 2023 Rishi Exports All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <Link href="#" className="fixed bottom-6 right-6 bg-amber-500 p-3 rounded-sm shadow-lg hover:bg-amber-600 transition-colors">
        <ArrowUp className="h-5 w-5 text-white" />
      </Link>
    </footer>
  );
} 
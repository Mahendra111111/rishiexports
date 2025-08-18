import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Home, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Carpets & Rugs | Marblex - Premium Marble Exporters",
  description: "Explore our premium carpets and rugs collection featuring high-quality materials and expert craftsmanship.",
  keywords: "carpets, rugs, premium carpets, luxury rugs, home decor, flooring solutions",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CarpetsRugs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage 
            text="Carpets & Rugs Hero" 
            height="100%" 
            className="brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Carpets & Rugs
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Carpets & Rugs</span>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <div className="bg-amber-500 text-white py-4 px-6">
                  <h3 className="font-bold text-lg">CARPETS & RUGS</h3>
                </div>
                
                <div className="divide-y">
                  {[
                    "INDUSTRIAL FLOORING",
                    "LAMINATE FLOORING",
                    "MARBLE FLOORING",
                    "OAK FLOORING",
                    "STONE FLOORING",
                    "VINYL FLOORING",
                    "WOOD FLOORINGS"
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block py-4 px-6 hover:bg-gray-50 transition-colors ${
                        item === "CARPETS & RUGS" ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-amber-500 rounded-lg p-8 text-white">
                <h3 className="font-bold text-xl mb-4">Need Help Right away?</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">Call Us Now!</p>
                    <p className="font-bold">123-456-789</p>
                  </div>
                </div>
                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                  Learn More
                </Button>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                  DOWNLOAD NOW
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <PlaceholderImage 
                    text="Kitchen Design" 
                    height="100%" 
                    className="rounded-lg mb-6"
                  />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Choose Water Resistant Flooring At Your Home</h2>
                  <p className="text-muted-foreground mb-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since.
                  </p>
                  <p className="text-muted-foreground">
                    Marblex is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <PlaceholderImage 
                    text="Wooden Flooring" 
                    height="100%" 
                    className="rounded-lg mb-6"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Marble Collection</h3>
                  <p className="text-muted-foreground mb-6">
                    Marblex is a long established fact that a reader will be distracted by the readable content of a page when looking.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Creative ideas for getting a better result</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Provide highest quality marbles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>We provide quality services</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Kitchen Finishing</h3>
                <p className="text-muted-foreground mb-6">
                  Marblex is a long established fact that a reader will be distracted by the readable content of a page when looking.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>We provide quality marble surface</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Diverse variety of creative styles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>Professional marble repair</span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <PlaceholderImage 
                    text="Kitchen Finishing" 
                    height="400px" 
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Our Best Team Expert</h3>
                <p className="text-muted-foreground mb-6">
                  Marblex is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is interior dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since.
                </p>
                
                <div className="bg-amber-500 text-white p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-4">What Are Industrial Visuals?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">How To Find High-Quality Industrial Images</h4>
                    <button className="w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Brief Introduction For You</h4>
                    <button className="w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">Variations Of Passages Of Available</h4>
                    <button className="w-6 h-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
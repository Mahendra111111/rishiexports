import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Our History | Marblex - Premium Marble Exporters",
  description: "Explore the journey of Marblex from its humble beginnings to becoming a leading exporter of premium marble products worldwide.",
  keywords: "Marblex history, marble company timeline, marble industry evolution, natural stone business history",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function History() {
  const timelineEvents = [
    {
      year: "2000",
      title: "Laminate Flooring",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "Laminate Flooring",
      isLeft: true
    },
    {
      year: "1995",
      title: "Industrial Flooring",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "Industrial Flooring",
      isLeft: false
    },
    {
      year: "2005",
      title: "Marble Flooring",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "Marble Flooring",
      isLeft: true
    },
    {
      year: "2010",
      title: "Wooden Flooring",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "Wooden Flooring",
      isLeft: false
    },
    {
      year: "2015",
      title: "Oak Flooring",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "Oak Flooring",
      isLeft: true
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/History-banner.jpg"
            alt="Our History Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our History
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Our History</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-500"></div>
            
            {/* Timeline events */}
            <div className="space-y-32">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative">
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold z-10 border-4 border-amber-500">
                    {event.year}
                  </div>
                  
                  <div className={`grid md:grid-cols-2 gap-8 ${event.isLeft ? "" : "md:grid-flow-dense"}`}>
                    {/* Content */}
                    <div className={`${event.isLeft ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    
                    {/* Image */}
                    <div className={`rounded-lg overflow-hidden h-64 md:h-auto ${event.isLeft ? "md:order-2" : ""}`}>
                      <PlaceholderImage 
                        text={event.image} 
                        height="100%" 
                        className="h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Your Email Address</h3>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 pr-12 rounded-md bg-slate-700 border border-slate-600 text-white w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

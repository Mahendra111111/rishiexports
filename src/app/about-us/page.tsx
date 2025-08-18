import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Home } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "About Us | Marblex - Premium Marble Exporters",
  description: "Learn about Marblex, a leading exporter of premium marble products with over 15 years of experience in the natural stone industry.",
  keywords: "about Marblex, marble company history, marble exporters India, natural stone suppliers",
};

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/History-banner.jpg"
            alt="About Us Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Choose Your Color Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[180px]">
                <Image
                  src="/images/Kitchen Countertop.jpg"
                  alt="Kitchen Countertop"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[180px] mt-8">
                <Image
                  src="/images/Modern Kitchen.jpg"
                  alt="Modern Kitchen"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[180px] col-span-2">
                <Image
                  src="/images/Bathroom Design.jpg"
                  alt="Bathroom Design"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Choose Your Color What You Want For Your Home</h2>
              <p className="text-muted-foreground mb-8">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                  <div className="bg-amber-500 rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M3 3v18h18" />
                      <path d="M7 17v-4h4v-4h4V5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Industrial Flooring</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                  <div className="bg-amber-500 rounded-lg p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M3 3v18h18" />
                      <path d="M7 17v-4h4v-4h4V5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Laminate Flooring</h3>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5" />
                  <span>A long established fact that a reader will be distracted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 text-amber-500 mt-0.5" />
                  <span>Established fact that a reader will be distracted</span>
                </li>
              </ul>
              
              <Button className="bg-slate-800 hover:bg-amber-500 text-white">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">What We Offer</h2>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Provides Best Services</h2>
            <Link href="/services" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Carpets & Rugs",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "carpet"
              },
              {
                title: "Laminate Flooring",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "laminate"
              },
              {
                title: "Vinyl Flooring",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "vinyl"
              },
              {
                title: "Industrial Flooring",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "industrial"
              },
              {
                title: "Wood Flooring",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "wood"
              },
              {
                title: "Oak Flooring",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                icon: "oak"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-6">
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <div className="w-10 h-10 flex items-center justify-center text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" />
                        <path d="M7 17v-4h4v-4h4V5" />
                      </svg>
                    </div>
                  </div>
                  <button className="w-10 h-10 border rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">Latest Work</h2>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Watch Our Latest Projects</h2>
            <Link href="/portfolio" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                01
              </div>
              <h3 className="font-medium w-40">Marble Flooring</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: MARBLE</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                02
              </div>
              <h3 className="font-medium w-40">Exclusive Slate Tiles</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: TILES</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                03
              </div>
              <h3 className="font-medium w-40">Laminate Flooring</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: LAMINATE</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                04
              </div>
              <h3 className="font-medium w-40">Ceramic Tiles</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: CERAMIC</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                05
              </div>
              <h3 className="font-medium w-40">Wall Carpeting</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: CARPETS</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                06
              </div>
              <h3 className="font-medium w-40">Kitchen Renovation</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: KITCHEN</span>
            </div>
            
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm">
                07
              </div>
              <h3 className="font-medium w-40">Industrial Flooring</h3>
              <div className="h-px flex-grow bg-gray-200"></div>
              <span className="text-amber-500 font-medium">CATEGORY: INDUSTRIAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-slate-800 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">Testimonials</h2>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <Link href="/testimonials" className="bg-amber-500 text-white px-4 py-2 rounded text-sm hover:bg-amber-600 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((item) => (
              <div key={item} className="relative">
                <div className="bg-slate-700 p-8 rounded-lg">
                  <p className="italic mb-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6 ml-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <PlaceholderImage 
                      text="Person" 
                      height="100%" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Nielson Smith</h4>
                    <p className="text-sm text-amber-500">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">Latest News</h2>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Watch Our Latest Blog</h2>
            <Link href="/blog" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How To Create Marble Staircase With Lighting",
                image: "marble-staircase",
                category: "MARBLE"
              },
              {
                title: "Choose Water Resistant Flooring At Your Home",
                image: "water-resistant-flooring",
                category: "TILES"
              },
              {
                title: "Wooden Texture Flooring Used Extensively",
                image: "wooden-flooring",
                category: "WOODEN"
              }
            ].map((post, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <PlaceholderImage 
                    text={post.image} 
                    height="100%" 
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-4 py-1 text-sm font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.title}
                  </Link>
                </h3>
                <div className="flex items-center gap-4">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-slate-800 hover:text-amber-500">
                    <span className="mr-2">READ MORE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
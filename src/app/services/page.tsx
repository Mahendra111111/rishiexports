import Link from "next/link";
import Image from "next/image";


import { Home } from "lucide-react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Services | Marblex - Premium Marble Exporters",
  description: "Explore our comprehensive range of marble and natural stone services including flooring, countertops, and custom solutions.",
  keywords: "marble services, flooring services, marble installation, stone countertops, custom marble solutions",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Portfolio banner.jpg"
            alt="Services Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services 2
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* Best Services Section */}
      <section className="py-16 md:py-24">
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
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/white marble.jpg"
                alt="White Marble"
                fill
                className="object-cover brightness-[0.8] group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">White Marble Tiles</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/brown marble.jpg"
                alt="Calacatta Lincoln Marble"
                fill
                className="object-cover brightness-[0.8] group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Calacatta Lincoln Marble</h3>
              </div>
            </div>

             <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/marble1.jpg"
                alt="Limestone Ceramics Tile"
                fill
                className="object-cover brightness-[0.8] group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Limestone Ceramics Tile</h3>
              </div>
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
            {[
              { person: "/images/person1.jpg", name: "Nielson Smith" },
              { person: "/images/person2.jpg", name: "Sarah Johnson" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-700 p-8 rounded-lg">
                  <p className="italic mb-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={`text-amber-500 ${index === 1 && star > 3 ? 'text-gray-400' : ''}`}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6 ml-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={item.person}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-amber-500">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24">
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
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                icon: "carpet"
              },
              {
                title: "Laminate Flooring",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                icon: "laminate"
              },
              {
                title: "Vinyl Flooring",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                icon: "vinyl"
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

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "786+", label: "CLIENTS WORLDWIDE" },
              { value: "600+", label: "TOTAL PROJECTS" },
              { value: "989+", label: "SATISFIED CUSTOMERS" },
              { value: "125+", label: "AWARD WINNING" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
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
            <Link href="/images/brown marble.jpg" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How To Protect A Bathroom With Marble Surface?",
                image: "oak-flooring",
                category: "STONE"
              },
              {
                title: "Choose Water Resistant Flooring At Your Home",
                image: "water-resistant-flooring",
                category: "TILES"
              },
              {
                title: "How To Create Marble Staircase With Lighting",
                image: "Modern Kitchen",
                category: "WOODEN"
              }
            ].map((post, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={`/images/${post.image}.jpg`}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
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
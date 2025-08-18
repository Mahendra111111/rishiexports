import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Our Team | Marblex - Premium Marble Exporters",
  description: "Meet the dedicated professionals behind Marblex who bring expertise, passion, and commitment to delivering premium marble products worldwide.",
  keywords: "Marblex team, marble experts, stone industry professionals, management team, marble specialists",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Team() {
  const teamMembers = [
    {
      name: "Nielson Smith",
      position: "CEO",
      image: "/images/person1.jpg"
    },
    {
      name: "Berta Brown",
      position: "Manager",
      image: "/images/person2.jpg"
    },
    {
      name: "Michael Baker",
      position: "Designer",
      image: "/images/person3.jpg"
    },
    {
      name: "Daniel Frankie",
      position: "Developer",
      image: "/images/person4.jpg"
    },
    {
      name: "Robert Anderson",
      position: "Marketing Officer",
      image: "/images/person5.jpg"
    },
    {
      name: "Nielson Smith",
      position: "Designer",
      image: "/images/person6.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/teamheroabnner.jpg"
            alt="Our Team Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Team
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Our Team</span>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Our Best Team Expert</h2>
            <Link href="/team" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-amber-500">{member.position}</p>
                </div>
              </div>
            ))}
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
              },
              {
                title: "Industrial Flooring",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                icon: "industrial"
              },
              {
                title: "Wood Flooring",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
                icon: "wood"
              },
              {
                title: "Oak Flooring",
                description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
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

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">Testimonials</h2>
          </div>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <Link href="/testimonial-image.jpg" className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-amber-500 transition-colors">
              VIEW MORE
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <PlaceholderImage 
                  text="Testimonial Image" 
                  height="100%" 
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
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
                <div className="mt-4">
                  <h4 className="font-bold">Alan John Martin</h4>
                  <p className="text-amber-500">Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
                title: "Choose Water Resistant Flooring At Your Home",
                image: "water-resistant-flooring",
                category: "STONE"
              },
              {
                title: "What Kind Of Flooring Was Best For My Art Studio?",
                image: "art-studio-flooring",
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
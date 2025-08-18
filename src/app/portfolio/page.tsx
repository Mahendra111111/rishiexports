import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Portfolio | Marblex - Premium Marble Exporters",
  description: "Explore our portfolio of marble and natural stone projects across residential, commercial, and architectural applications.",
  keywords: "marble portfolio, stone projects, marble installations, natural stone projects",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const categories = ["ALL", "FLOORING", "LAMINATE", "MARBLE", "STONE", "TILES", "WOODEN"];

const portfolioItems = [
  {
    title: "Modern Kitchen Design",
    image: "/images/portfolio/kitchen-1.jpg",
    category: "MARBLE",
    link: "modern-kitchen-design"
  },
  {
    title: "Luxury Office Reception",
    image: "/images/portfolio/office-1.jpg",
    category: "STONE",
    link: "luxury-office-reception"
  },
  {
    title: "Contemporary Bathroom",
    image: "/images/portfolio/bathroom-1.jpg",
    category: "TILES",
    link: "contemporary-bathroom"
  },
  {
    title: "Elegant Living Room",
    image: "/images/portfolio/living-1.jpg",
    category: "FLOORING",
    link: "elegant-living-room"
  },
  {
    title: "Marble Wall Feature",
    image: "/images/portfolio/wall-1.jpg",
    category: "MARBLE",
    link: "marble-wall-feature"
  },
  {
    title: "Modern Bedroom",
    image: "/images/portfolio/bedroom-1.jpg",
    category: "WOODEN",
    link: "modern-bedroom"
  },
  {
    title: "Hotel Lobby",
    image: "/images/portfolio/lobby-1.jpg",
    category: "MARBLE",
    link: "hotel-lobby"
  },
  {
    title: "Restaurant Interior",
    image: "/images/portfolio/restaurant-1.jpg",
    category: "STONE",
    link: "restaurant-interior"
  },
  {
    title: "Spa Bathroom",
    image: "/images/portfolio/spa-1.jpg",
    category: "TILES",
    link: "spa-bathroom"
  }
];

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Portfolio banner.jpg"
            alt="Portfolio Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Masonry
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Masonry</span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 text-sm font-medium transition-colors ${index === 0 ? 'bg-amber-500 text-white rounded' : 'hover:text-amber-500'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Link
                key={index}
                href={`/portfolio/${item.link}`}
                className="group relative block overflow-hidden rounded-lg"
                style={{ 
                  height: index % 3 === 0 ? '300px' : index % 3 === 1 ? '400px' : '350px'
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium text-amber-500 mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-medium border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white">
              LOAD MORE <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
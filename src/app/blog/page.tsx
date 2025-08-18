import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog | Marblex - Premium Marble Exporters",
  description: "Explore our blog for insights on marble trends, maintenance tips, industry news, and project showcases.",
  keywords: "marble blog, natural stone trends, marble maintenance, stone industry news, marble design ideas",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const blogPosts = [
  {
    title: "How To Protect A Bathroom With Marble Surface?",
    image: "/images/blog/bathroom-marble.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "MARBLE"
  },
  {
    title: "In Home Choose A Light Floor If At All Possible",
    image: "/images/blog/light-floor.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "FLOORING"
  },
  {
    title: "How To Create Marble Staircase With Lighting",
    image: "/images/blog/marble-staircase.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "MARBLE"
  },
  {
    title: "Choose Water Resistant Flooring At Your Home",
    image: "/images/blog/water-resistant-flooring.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "TILES"
  },
  {
    title: "What Kind Of Flooring Was Best For My Art Studio?",
    image: "/images/blog/art-studio-flooring.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "FLOORING"
  },
  {
    title: "Wooden Texture Flooring Used Extensively",
    image: "/images/blog/wooden-flooring.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "WOODEN"
  },
  {
    title: "Granite & Marble Flooring Make Classy Walkways",
    image: "/images/blog/granite-marble-walkway.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "MARBLE"
  },
  {
    title: "What's Your Style? Defining Kitchen Design Styles",
    image: "/images/blog/kitchen-design.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "DESIGN"
  },
  {
    title: "Renovate Flooring Of Your Home With Modern Technology",
    image: "/images/blog/modern-flooring.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "FLOORING"
  },
  {
    title: "We Provide You The Quality With Perfect Credibility",
    image: "/images/blog/quality-marble.jpg",
    date: "NOVEMBER 2, 2022",
    comments: 0,
    excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    category: "MARBLE"
  }
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Portfolio banner.jpg"
            alt="Blog Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            2 Column Blog
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group mb-8">
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="relative h-[300px] mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
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
                </Link>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>{post.comments} COMMENTS</span>
                </div>

                <h2 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="group/btn bg-slate-800 text-white hover:bg-amber-500 border-slate-800 hover:border-amber-500"
                >
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                    READ MORE
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full bg-amber-500 text-white border-amber-500">
              1
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500">
              2
            </Button>
            <Button variant="outline" size="icon" className="w-10 h-10 rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500">
              3
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
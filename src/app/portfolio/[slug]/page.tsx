import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio Item | Rishi Exports - Premium Marble Exporters",
  description: "Detailed view of our marble and natural stone project.",
  keywords: "marble project details, stone installation showcase, marble work portfolio",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function PortfolioItem({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = slug; // Available for dynamic content loading
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Laminate Flooring.jpg"
            alt="Laminate Flooring"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Laminate Flooring
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/portfolio" className="hover:text-amber-500 transition-colors">
              Portfolio
            </Link>
            <span className="mx-2">›</span>
            <span>Laminate Flooring</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* Main Image */}
          <div className="mb-12">
            <Image
              src="/images/portfolio/kitchen-large.jpg"
              alt="Modern Kitchen Design"
              width={1200}
              height={800}
              className="rounded-lg w-full"
            />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-4 gap-6 mb-12 text-center border-y border-gray-200 py-6">
            <div>
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">Not Disclosed</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <p className="text-muted-foreground">Complete Tile</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <p className="text-muted-foreground">Marble</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Year</h3>
              <p className="text-muted-foreground">2024</p>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Natural Stone Can Increase Your Home&apos;s Value</h2>
            <p className="text-muted-foreground mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <p className="text-muted-foreground mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-6">Overview & Challenges</h3>
            <p className="text-muted-foreground mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          {/* Additional Image */}
          <div className="mb-12">
            <Image
              src="/images/portfolio/kitchen-detail.jpg"
              alt="Kitchen Detail"
              width={1200}
              height={600}
              className="rounded-lg w-full"
            />
          </div>

          {/* Related Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">Explore Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Modern Kitchen",
                  image: "/images/portfolio/kitchen-1.jpg"
                },
                {
                  title: "Luxury Bathroom",
                  image: "/images/portfolio/bathroom-1.jpg"
                },
                {
                  title: "Office Reception",
                  image: "/images/portfolio/office-1.jpg"
                }
              ].map((project, index) => (
                <Link
                  key={index}
                  href="/portfolio/project-name"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
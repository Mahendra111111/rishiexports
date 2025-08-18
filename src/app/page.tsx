import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/marble background video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-12 bg-amber-500"></div>
                <h2 className="text-amber-500 font-medium tracking-wider uppercase">Welcome to Rishi Exports</h2>
                <div className="h-px w-12 bg-amber-500"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              High Performance<br />Natural Stone Panels
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                asChild 
                className="bg-amber-500 hover:bg-amber-600 text-white border-0 px-4 py-6 text-base font-medium"
              >
                <Link href="/about-us" className="flex items-center">
                  READ MORE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-black hover:bg-white/10 hover:text-white px-4 py-6 text-base font-medium"
              >
                <Link href="/contact" className="flex items-center">
                  GET IN TOUCH
                  <ArrowRight className="ml-2 h-5  w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src="/images/marble.png"
                alt="Marble Slab Display"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <h2 className="text-amber-500 font-medium tracking-wider uppercase">About Us</h2>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our Marble & Granite Display Warehouse
              </h3>

              <p className="text-muted-foreground mb-8">
                At Rishi Exports stone, we offer quality stone products in the form of tiles and slabs selected from all over the world to enhance your home project.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features List 1 */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Marble At A Glance</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>More Expensive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Red Alicante Marble</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Less Maintenance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Very Durable</span>
                    </li>
                  </ul>
                </div>

                {/* Features List 2 */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Marble Slab Creamery</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Elegant Vein Patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Heat-Resistant</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Stargate Gold Marble</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span>Red Beauty Marble</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Work Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <h2 className="text-amber-500 font-medium tracking-wider uppercase">Latest Work</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Discover Our Creation</h3>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/portfolio" className="flex items-center">
                VIEW MORE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kitchen Countertop",
                image: "/images/portfolio/kitchen-1.jpg",
                category: "RESIDENTIAL"
              },
              {
                title: "Office Reception",
                image: "/images/portfolio/office-1.jpg",
                category: "COMMERCIAL"
              },
              {
                title: "Modern Kitchen",
                image: "/images/portfolio/kitchen-large.jpg",
                category: "RESIDENTIAL"
              },
              {
                title: "Bathroom Design",
                image: "/images/portfolio/bathroom-1.jpg",
                category: "RESIDENTIAL"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-[300px]">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm font-medium text-amber-500">{project.category}</span>
                    <h4 className="text-xl font-semibold mt-2">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-amber-500"></div>
              <h2 className="text-amber-500 font-medium tracking-wider uppercase">Our Testimonial</h2>
              <div className="h-px w-12 bg-amber-500"></div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h3>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/testimonial-image.jpg"
                    alt="Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <div className="mb-8">
                  <p className="text-lg text-muted-foreground">
                    Rishi Exports should look for ones that are specific, detailed, and highlight the unique benefits of working with the company. This can include aspects such as the quality of the marble products and excellent customer service Rishi Exports can these reviews to differentiate itself
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold">Arun Kumar Reddy</h4>
                  <p className="text-amber-500">PRODUCTION MANAGER</p>
                </div>

                <div className="flex justify-center md:justify-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>

            <button className="absolute md:left-[-60px] left-[-10px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors">
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button className="absolute md:right-[-60px] right-[-10px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-amber-500"></div>
                <h2 className="text-amber-500 font-medium tracking-wider uppercase">Latest News</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Watch Our Latest Blog</h3>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/blog" className="flex items-center">
                VIEW MORE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "How To Create Marble Staircase With Lighting",
                image: "/images/blog/marble-staircase.jpg",
                category: "MARBLE",
                date: "NOVEMBER 2, 2022",
                comments: 0
              },
              {
                title: "Choose Water Resistant Flooring At Your Home",
                image: "/images/blog/water-resistant-flooring.jpg",
                category: "TILES",
                date: "NOVEMBER 2, 2022",
                comments: 0
              },
              {
                title: "Wooden Texture Flooring Used Extensively",
                image: "/images/blog/wooden-flooring.jpg",
                category: "WOODEN",
                date: "NOVEMBER 2, 2022",
                comments: 0
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-[240px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-4 py-1 text-sm font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>{post.comments} COMMENTS</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{post.title}</h4>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog" className="flex items-center">
                      READ MORE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

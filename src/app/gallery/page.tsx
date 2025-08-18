import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Gallery | Rishi Exports - Premium Marble Exporters",
  description: "Explore our gallery of premium marble varieties including white, beige, green, black, and pink marble sourced from the finest quarries in India.",
  keywords: "marble gallery, marble varieties, white marble, beige marble, green marble, black marble, pink marble",
};

export default function Gallery() {
  // Sample marble products data
  const marbleProducts = {
    all: [
      { id: 1, name: "White Marble - Makrana", image: "/images/white marble.jpg" },
      { id: 2, name: "Beige Marble - Jaisalmer", image: "/images/being marble.jpg" },
      { id: 3, name: "Green Marble - Udaipur", image: "/images/Green marble.jpg" },
      { id: 4, name: "Black Marble - Rajasthan", image: "/images/Black marble.jpg" },
      { id: 5, name: "Pink Marble - Jodhpur", image: "/images/Pink marble.jpg" },
      { id: 6, name: "Brown Marble - Agra", image: "/images/brown marble.jpg" },
      { id: 7, name: "White Marble - Ambaji", image: "/images/marble1.jpg" },
      { id: 8, name: "Beige Marble - Kota", image: "/images/marble2.jpg" },
      { id: 9, name: "Green Marble - Kishangarh", image: "/images/marble3.jpg" },
      { id: 10, name: "Black Marble - Ajmer", image: "/images/marble4.jpg" },
      { id: 11, name: "Pink Marble - Alwar", image: "/images/marble5.jpg" },
      { id: 12, name: "Brown Marble - Jaipur", image: "/images/marble6.jpg" },
    ],
    white: [
      { id: 1, name: "White Marble - Makrana", image: "/images/white marble.jpg" },
      { id: 7, name: "White Marble - Ambaji", image: "/images/marble1.jpg" },
    ],
    beige: [
      { id: 2, name: "Beige Marble - Jaisalmer", image: "/images/being marble.jpg" },
      { id: 8, name: "Beige Marble - Kota", image: "/images/marble2.jpg" },
    ],
    green: [
      { id: 3, name: "Green Marble - Udaipur", image: "/images/Green marble.jpg" },
      { id: 9, name: "Green Marble - Kishangarh", image: "/images/marble3.jpg" },
    ],
    black: [
      { id: 4, name: "Black Marble - Rajasthan", image: "/images/Black marble.jpg" },
      { id: 10, name: "Black Marble - Ajmer", image: "/images/marble4.jpg" },
    ],
    pink: [
      { id: 5, name: "Pink Marble - Jodhpur", image: "/images/Pink marble.jpg" },
      { id: 11, name: "Pink Marble - Alwar", image: "/images/marble5.jpg" },
    ],
    brown: [
      { id: 6, name: "Brown Marble - Agra", image: "/images/brown marble.jpg" },
      { id: 12, name: "Brown Marble - Jaipur", image: "/images/marble6.jpg" },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/marble.png"
            alt="Gallery Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Marble Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explore our collection of premium marble varieties sourced from the finest quarries across India.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Marble Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our extensive range of marble varieties, each known for its unique patterns, colors, and exceptional quality.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="white">White</TabsTrigger>
                <TabsTrigger value="beige">Beige</TabsTrigger>
                <TabsTrigger value="green">Green</TabsTrigger>
                <TabsTrigger value="black">Black</TabsTrigger>
                <TabsTrigger value="pink">Pink</TabsTrigger>
                <TabsTrigger value="brown">Brown</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(marbleProducts).map(([category, products]) => (
              <TabsContent key={category} value={category}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Interested in our marble products? Contact us for more information, pricing, and availability.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Assurance</h2>
              <p className="text-muted-foreground mb-6">
                At Rishi Exports, we take pride in offering only the highest quality marble products. Each piece in our gallery undergoes rigorous quality checks to ensure it meets our strict standards.
              </p>
              <p className="text-muted-foreground mb-6">
                Our marble is sourced from the finest quarries in India, known for their exceptional quality and distinctive characteristics. We carefully select each block based on color consistency, veining patterns, and structural integrity.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking for elegant white marble, sophisticated black marble, or any other variety, you can trust that our products will add timeless beauty and value to your projects.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/Quality Assurance.jpg"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
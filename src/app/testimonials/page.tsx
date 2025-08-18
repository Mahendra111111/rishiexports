import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials | Rishi Exports - Premium Marble Exporters",
  description: "Read what our clients say about their experience working with Rishi Exports for premium marble and natural stone products.",
  keywords: "Rishi Exports testimonials, marble customer reviews, natural stone client feedback, marble exporter reviews",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      company: "Architectural Innovations, USA",
      quote: "Working with Rishi Exports has been a game-changer for our architectural projects. Their premium marble quality and attention to detail have elevated our designs. The team's responsiveness and expertise made the entire process smooth, from selection to delivery.",
      project: "Luxury Hotel Development",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      company: "Interior Elegance, Spain",
      quote: "We've been sourcing marble from Rishi Exports for over five years now, and their consistency in quality is remarkable. The variety of options and customization capabilities have helped us deliver unique interiors to our discerning clients.",
      project: "High-end Residential Projects",
      rating: 5
    },
    {
      name: "Ahmed Al-Farsi",
      company: "Royal Construction, UAE",
      quote: "The marble supplied by Rishi Exports for our palace project exceeded expectations. Their ability to source rare varieties and deliver large quantities on schedule was impressive. Their team's expertise in handling logistics for international shipments made the process hassle-free.",
      project: "Royal Palace Renovation",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "Parisian Interiors, France",
      quote: "The quality of marble from Rishi Exports is exceptional. What sets them apart is their commitment to sustainability and ethical sourcing, which aligns perfectly with our company values. Our clients appreciate knowing their beautiful marble comes from responsible sources.",
      project: "Boutique Hotel Chain",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Pacific Developers, Singapore",
      quote: "Rishi Exports has been our trusted supplier for multiple high-rise developments. Their ability to maintain consistent quality across large orders is remarkable. Their technical team's advice on the best marble varieties for different applications has been invaluable.",
      project: "Luxury Condominium Development",
      rating: 5
    },
    {
      name: "Isabella Rossi",
      company: "Milanese Design Studio, Italy",
      quote: "As designers from Italy, we have high standards for marble quality. Rishi Exports has consistently met and exceeded these expectations. Their range of unique patterns and colors has allowed us to create truly distinctive spaces for our clients.",
      project: "Museum Renovation",
      rating: 5
    }
  ];

  const featuredTestimonials = [
    {
      name: "David Williams",
      position: "Chief Architect",
      company: "Global Structures Ltd., UK",
      quote: "In my 25 years in the architecture industry, I've worked with many marble suppliers, but Rishi Exports stands out for their exceptional product quality and service. For our landmark project in London, they provided rare marble varieties that became the centerpiece of the design, drawing admiration from everyone who visits the building.",
      image: "/images/David Williams.jpg"
    },
    {
      name: "Aisha Patel",
      position: "Procurement Director",
      company: "Luxury Hotels Group, India",
      quote: "We've partnered with Rishi Exports for our hotel renovations across India, and they've consistently delivered premium marble that enhances the luxury experience our guests expect. Their team's knowledge about which marble types work best in different environments has been particularly valuable for our diverse properties.",
      image: "/images/Aisha Patel.jpg"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/testimonial banner.jpg"
            alt="Testimonials Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover what our clients around the world say about their experience working with Rishi Exports.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Client Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-8 relative">
                <Quote className="text-primary/20 absolute top-6 left-6 h-16 w-16" />
                <div className="relative z-10">
                  <p className="text-lg italic mb-8 text-foreground/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-foreground/90 mb-6 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <Separator className="my-4" />
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-sm text-primary mt-1">Project: {testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Stats */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "30+", label: "Countries Served" },
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimonial */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We value feedback from all our clients. If you&apos;ve worked with Rishi Exports and would like to share your experience, we&apos;d love to hear from you.
          </p>
          <Button asChild size="lg" className="font-medium">
            <Link href="/contact">Submit Your Testimonial</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Excellence Yourself</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our growing list of satisfied clients worldwide. Contact us today to discuss your marble requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium border-white/30 hover:bg-white/10">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
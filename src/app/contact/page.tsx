import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Home, MapPin, Phone, Mail } from "lucide-react";
import type { Metadata } from "next";
// import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Contact Us | Rishi Exports - Premium Marble Exporters",
  description:
    "Get in touch with Rishi Exports for all your marble and natural stone requirements. Contact us for quotes, inquiries, and support.",
  keywords:
    "contact Rishi Exports, marble export contact, stone supplier contact, marble inquiry",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Contact us image.jpg"
            alt="Contact Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href="/"
              className="flex items-center hover:text-amber-500 transition-colors"
            >
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500"></div>
            <h2 className="text-amber-500 font-medium tracking-wider uppercase">
              Our Contact
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Get In Touch With Us
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">
                    Visit Our Office
                  </h4>
                  <p className="text-muted-foreground">
                    Karimnagar
                    <br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">90000 07415</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Email Us</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      rishiexports2020@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60754.621708846005!2d79.09487769725341!3d18.43831379098671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd092ba7c3d8d%3A0x9f8d06411cb4597c!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710240297144!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/images/marble.png"
                alt="Marble Interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6">How Can We Help You?</h3>
              <p className="text-muted-foreground mb-8">
                Please feel free to get in touch using the form below. We&apos;d
                love to hear from you.
              </p>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Name" className="bg-white" />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-white"
                  />
                  <Input
                    type="text"
                    placeholder="Project Scope"
                    className="bg-white"
                  />
                </div>
                <Textarea
                  placeholder="Write Your Message"
                  className="min-h-[150px] bg-white"
                />
                <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8">
                  SEND NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our History | Marblex - Premium Marble Exporters",
  description:
    "Explore the journey of Marblex from its humble beginnings to becoming a leading exporter of premium marble products worldwide.",
  keywords:
    "Marblex history, marble company timeline, marble industry evolution, natural stone business history",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function History() {
  const timelineEvents = [
    {
      year: "2000",
      title: "Laminate Flooring",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "/images/Laminate Flooring.jpg",
      isLeft: true,
    },
    {
      year: "1995",
      title: "Industrial Flooring",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "/images/industrial-flooring.jpg",
      isLeft: false,
    },
    {
      year: "2005",
      title: "Marble Flooring",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "/images/marble-flooring.jpg",
      isLeft: true,
    },
    {
      year: "2010",
      title: "Wooden Flooring",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "/images/wooden-flooring.jpg",
      isLeft: false,
    },
    {
      year: "2015",
      title: "Oak Flooring",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Sydney College in Virginia, looked-up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.",
      image: "/images/oak-flooring.jpg",
      isLeft: true,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/History-banner.jpg"
            alt="Our History Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our History</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link
              href="/"
              className="flex items-center hover:text-amber-500 transition-colors"
            >
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <span>Our History</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-500 hidden sm:block"></div>
            {/* Mobile vertical line (thinner) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-amber-500 sm:hidden"></div>

            {/* Timeline events */}
            <div className="space-y-24 sm:space-y-32">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pt-20 sm:pt-0">
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 sm:top-1/2 sm:-translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold z-10 border-3 sm:border-4 border-amber-500">
                    <span className="text-[13px] sm:text-base leading-none">
                      {event.year}
                    </span>
                  </div>

                  <div
                    className={`grid md:grid-cols-2 gap-6 sm:gap-8 ${
                      event.isLeft ? "" : "md:grid-flow-dense"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`mt-6 sm:mt-0 ${
                        event.isLeft
                          ? "md:pr-12 lg:pr-16"
                          : "md:order-2 md:pl-12 lg:pl-16"
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {event.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div
                      className={`rounded-lg overflow-hidden h-48 sm:h-64 md:h-auto ${
                        event.isLeft ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription section removed */}
    </>
  );
}

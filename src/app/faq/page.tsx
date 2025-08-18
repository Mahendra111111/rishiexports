import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "FAQ | Rishi Exports - Premium Marble Exporters",
  description: "Find answers to frequently asked questions about our marble products, export services, shipping, and more.",
  keywords: "marble FAQ, marble export questions, marble shipping FAQ, marble quality questions",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function FAQ() {
  const faqCategories = [
    {
      title: "Products & Materials",
      faqs: [
        {
          question: "What types of marble do you offer?",
          answer: "We offer a wide range of marble varieties including White, Beige, Green, Black, Pink, and Brown marble. Each type comes in different patterns, veining, and color variations sourced from the finest quarries across India."
        },
        {
          question: "How do I choose the right marble for my project?",
          answer: "The right marble depends on your specific application, aesthetic preferences, and practical requirements. Factors to consider include the location (indoor/outdoor), traffic level, maintenance expectations, and desired appearance. Our team can provide expert guidance based on your project needs."
        },
        {
          question: "What sizes and finishes are available?",
          answer: "We offer marble in various standard sizes including tiles, slabs, and blocks. Custom cutting is also available. Our finishes include polished, honed, brushed, sandblasted, and more. Contact us with your specific requirements for detailed information."
        },
        {
          question: "How durable is marble?",
          answer: "Marble is a natural stone known for its durability and longevity. With proper installation and maintenance, marble can last for decades. However, different varieties have different hardness levels and resistance to staining, scratching, and etching."
        }
      ]
    },
    {
      title: "Ordering & Pricing",
      faqs: [
        {
          question: "How do I request a quote?",
          answer: "You can request a quote by filling out our contact form, sending us an email, or calling us directly. Please provide details about the type of marble, quantity, dimensions, and any other specific requirements to help us provide an accurate quote."
        },
        {
          question: "What is the minimum order quantity?",
          answer: "Minimum order quantities vary depending on the type of marble and product. For standard sizes, we typically have lower MOQs, while custom orders may require larger quantities. Please contact us with your requirements for specific information."
        },
        {
          question: "Do you provide samples before ordering?",
          answer: "Yes, we provide samples of our marble varieties to help you make an informed decision. Samples can be requested through our contact form. Please note that natural stone products may have variations in color and pattern from the samples."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including bank transfers, letters of credit, and other standard international payment options. Payment terms are discussed during the quotation process and specified in our commercial agreements."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship our marble products worldwide. We have extensive experience in international logistics and can handle all aspects of the export process to ensure safe and timely delivery to your location."
        },
        {
          question: "How are your products packaged for shipping?",
          answer: "Our marble products are carefully packaged to prevent damage during transit. Depending on the product, we use wooden crates, strong cardboard boxes, foam protection, and other specialized packaging materials to ensure safe delivery."
        },
        {
          question: "What is the typical delivery timeframe?",
          answer: "Delivery timeframes vary depending on your location, the specific products ordered, and current inventory levels. Standard orders typically take 2-4 weeks for production plus shipping time. Custom orders may require additional time. We provide estimated delivery dates with each quote."
        },
        {
          question: "Who handles customs clearance?",
          answer: "We can assist with export documentation, but the importer (buyer) is typically responsible for customs clearance in the destination country. We work with experienced freight forwarders who can provide guidance on the import process if needed."
        }
      ]
    },
    {
      title: "Quality & Maintenance",
      faqs: [
        {
          question: "How do you ensure quality control?",
          answer: "We implement rigorous quality control measures throughout our process. Each piece of marble undergoes inspection for color consistency, veining patterns, structural integrity, and finish quality before packaging and shipping."
        },
        {
          question: "What is your policy on damaged goods?",
          answer: "In the rare event that products arrive damaged, we require notification within a specified period (typically 48-72 hours) along with photographic evidence. Depending on the circumstances, we will arrange for replacement, repair, or other appropriate resolution."
        },
        {
          question: "How should I maintain and clean marble surfaces?",
          answer: "Marble requires specific care to maintain its beauty. We recommend using pH-neutral cleaners specifically designed for natural stone, avoiding acidic or abrasive cleaning products, promptly cleaning spills, and periodically sealing the surface. We provide detailed care instructions with our products."
        },
        {
          question: "Does marble require sealing?",
          answer: "Yes, most marble surfaces benefit from periodic sealing to protect against stains and enhance durability. The frequency of sealing depends on the specific marble type, usage, and exposure to potential staining agents. We recommend professional sealing for best results."
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/FAQ banner.jpg"
            alt="FAQ Hero"
            fill
            className="object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Find answers to common questions about our marble products, services, and processes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              If you couldn't find the answer to your question, please don't hesitate to contact us directly. Our team is ready to assist you.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 
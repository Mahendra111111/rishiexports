"use client";

import Link from "next/link";
import { Phone, Mail, ArrowUp, MapPin } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<null | "success" | "error">(null);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSubscriptionStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the email to your backend API
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubscriptionStatus("success");
      setEmail("");
    } catch {
      setSubscriptionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="bg-slate-800 text-white">
      {/* Newsletter Subscription */}
      <div className="container max-w-screen-xl mx-auto py-8 px-4 md:px-8 border-b border-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-medium">Your Email Address</h3>
          <div className="w-full md:w-auto max-w-md">
            <form onSubmit={handleSubscribe} className="w-full">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className={`w-full md:w-80 py-3 px-4 bg-slate-700 text-white rounded-md focus:outline-none focus:ring-2 ${subscriptionStatus === "error" ? "ring-red-500" : "focus:ring-amber-500"} pr-12`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <button 
                  type="submit"
                  className={`absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-md transition-colors ${isSubmitting ? "bg-slate-600" : "bg-amber-500 hover:bg-amber-600"}`}
                  aria-label="Subscribe"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  )}
                </button>
              </div>
              {subscriptionStatus === "success" && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
              {subscriptionStatus === "error" && (
                <p className="text-red-400 text-sm mt-2">Please enter a valid email address.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container max-w-screen-xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-medium mb-6">About Us</h3>
            <p className="text-slate-400 mb-6">
              We are located in Karimnagar, Telangana, India. Contact us for
              premium quality marble and stone products.
            </p>
           
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Marble
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-xl font-medium mb-6">Our Products</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-amber-500 transition-colors"
                >
                  Travertine Bianco
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-amber-500 transition-colors"
                >
                  Calacatta
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-amber-500 transition-colors"
                >
                  Macael White
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-slate-400">
                <MapPin className="h-5 w-5 mr-2" />
                <p>Karimnagar, Telangana, India</p>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-2" />
                <Link
                  href="tel:+919000007415"
                  className="hover:text-amber-500 transition-colors"
                >
                  +91 90000 07415
                </Link>
              </div>
              <div className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-2" />
                <Link
                  href="mailto:rishiexports2020@gmail.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  rishiexports2020@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700">
        <div className="container max-w-screen-xl mx-auto py-6 px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-slate-400 text-sm">
            Copyright 2025 Managed by{" "}
            <a
              href="https://digimirai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              DigiMirai
            </a>
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <Link
        href="#"
        className="fixed bottom-6 right-6 bg-amber-500 p-3 rounded-sm shadow-lg hover:bg-amber-600 transition-colors"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </Link>
    </footer>
  );
}

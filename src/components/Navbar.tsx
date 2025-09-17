"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white shadow-sm">
      <div className="container flex justify-between pr-6 h-16 max-w-screen-xl items-center md:ml-16 ml-0 ">
        {/* Logo with added left padding */}
        <div className="flex items-center pl-6">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-8 h-8 border-2 border-amber-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-amber-500"></div>
              </div>
              <span className="ml-2 font-bold text-2xl text-slate-800">
                Rishi Exports
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation - centered with flex-1 and justify-center */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-8 text-sm font-medium">
          <Link
            href="/"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="uppercase tracking-wide hover:text-amber-500 transition-colors p-0 font-medium bg-transparent"
              >
                Pages <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/history">Our History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/team">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/gallery">Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/testimonials">Testimonials</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq">FAQ</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/services"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="uppercase tracking-wide hover:text-amber-500 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <button className="text-slate-700 hover:text-amber-500 transition-colors">
            {/* <Search className="h-5 w-5" /> */}
          </button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-slate-700 hover:text-amber-500 transition-colors">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              {/* Adding SheetTitle for accessibility, visually hidden */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="relative w-8 h-8">
                        <div className="absolute top-0 left-0 w-6 h-6 border-2 border-amber-500"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-2 border-amber-500"></div>
                      </div>
                      <span className="ml-2 font-bold text-xl text-slate-800">
                        Rishi Exports
                      </span>
                    </div>
                  </Link>
                  <SheetClose className="rounded-full p-1 hover:bg-slate-100">
                    <X className="h-5 w-5" />
                  </SheetClose>
                </div>

                <nav className="flex flex-col p-4 space-y-4 text-base font-medium">
                  <Link
                    href="/"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="py-2">
                    <div
                      className="flex items-center justify-between mb-2 cursor-pointer hover:text-amber-500 transition-colors"
                      onClick={() => setIsPagesOpen(!isPagesOpen)}
                    >
                      <span>Pages</span>
                      {isPagesOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`pl-4 space-y-2 mt-2 border-l border-slate-200 ${
                        isPagesOpen ? "block" : "hidden"
                      }`}
                    >
                      <Link
                        href="/history"
                        className="block py-1 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Our History
                      </Link>
                      <Link
                        href="/team"
                        className="block py-1 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Team
                      </Link>
                      <Link
                        href="/gallery"
                        className="block py-1 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Gallery
                      </Link>
                      <Link
                        href="/testimonials"
                        className="block py-1 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Testimonials
                      </Link>
                      <Link
                        href="/faq"
                        className="block py-1 hover:text-amber-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/services"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about-us"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="py-2 hover:text-amber-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </nav>

                <div className="mt-auto p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get In Touch
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

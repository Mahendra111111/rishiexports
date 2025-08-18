import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white shadow-sm">
      <div className="container flex h-16 max-w-screen-xl items-center md:ml-16 ml-0">
        {/* Logo with added left padding */}
        <div className="flex items-center pl-6">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <div className="absolute top-0 left-0 w-8 h-8 border-2 border-amber-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-amber-500"></div>
              </div>
              <span className="ml-2 font-bold text-2xl text-slate-800">Rishi Exports</span>
            </div>
          </Link>
        </div>

        {/* Navigation - centered with flex-1 and justify-center */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-8 text-sm font-medium">
          <Link href="/" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="uppercase tracking-wide hover:text-amber-500 transition-colors p-0 font-medium bg-transparent">
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
          <Link href="/services" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            Blog
          </Link>
          <Link href="/about-us" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="uppercase tracking-wide hover:text-amber-500 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right icons */}
        <div className="flex items-center space-x-4 none md:block">
          <button className="text-slate-700 hover:text-amber-500 transition-colors">
            {/* <Search className="h-5 w-5" /> */}
          </button>
          <button className="md:hidden text-slate-700 hover:text-amber-500 transition-colors ml-16">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
} 
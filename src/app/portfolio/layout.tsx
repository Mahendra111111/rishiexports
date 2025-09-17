import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Marblex - Premium Marble Exporters",
  description: "Explore our portfolio of marble and natural stone projects across residential, commercial, and architectural applications.",
  keywords: "marble portfolio, stone projects, marble installations, natural stone projects",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
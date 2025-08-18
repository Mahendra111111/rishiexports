# Rishi Exports - Marble Exporters Website

A static business lead generation website for Rishi Exports, a premium marble exporter, built with React.js, Next.js (app directory), Tailwind CSS, and Shadcn UI.

## Features

- Modern, responsive design optimized for all devices
- SEO-friendly with metadata for each page
- Static site generation for fast loading times
- Contact form integration with Formspree
- Interactive UI components using Shadcn UI
- Comprehensive pages showcasing products and services

## Pages

- Home (/)
- About Us (/about-us)
- Our Services (/services)
- Our History (/history)
- Our Team (/team)
- Gallery (/gallery)
- Testimonials (/testimonials)
- FAQ (/faq)
- Portfolio (/portfolio)
- Blog (/blog)
- Contact Us (/contact)

## Technologies Used

- **Next.js 14**: React framework with app directory structure
- **React 19**: JavaScript library for building user interfaces
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: High-quality UI components built with Radix UI and Tailwind CSS
- **Formspree**: Form backend for the contact form

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rishiexports.git
   cd rishiexports
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Deployment

This website can be easily deployed to Vercel, Netlify, or any other static site hosting platform.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Project Structure

```
/src
  /app                # Next.js app directory with pages
  /components         # React components
    /ui               # Shadcn UI components
  /lib                # Utility functions
  /public             # Static assets
```

## Contact Form Setup

To make the contact form functional, update the Formspree endpoint in the Contact page with your own endpoint:

1. Sign up for a free account at [Formspree](https://formspree.io/)
2. Create a new form and get your endpoint URL
3. Replace the placeholder URL in `src/app/contact/page.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

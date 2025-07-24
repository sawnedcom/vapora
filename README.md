ProdukX - Professional Landing Page
(Replace hero-illustration.png with the actual filename of your hero image in the public/images/ folder. The image above is just an example; you can use one I generated or your own chosen image.)

ProdukX is a modern and professional landing page built with Next.js 14 (App Router) and styled using Tailwind CSS. Designed to highlight innovative products, this landing page focuses on an intuitive user experience, fast performance, and SEO optimization.

Key Features
Next.js 14 (App Router): Leverages the latest Next.js features for efficient routing, Server Components, and optimal performance.

Tailwind CSS: A utility-first CSS framework for rapidly building custom and responsive designs without writing excessive custom CSS.

Poppins Font: Utilizes the Poppins font from Google Fonts for a modern and clean aesthetic.

Modular Components: Clean code structure with reusable components for each section of the landing page (Header, Hero, Features, Testimonials, Pricing, Footer).

Responsive Design: Adaptive design that looks great on various screen sizes and devices (desktop, tablet, mobile).

SEO Optimization: Configured with Next.js Metadata to enhance search engine and social media visibility.

Static Site Generation (SSG): Exported as static HTML, making it perfect for free hosting solutions like GitHub Pages with superior performance.

Installation & Local Setup
Follow the steps below to get the project running on your local machine.

Prerequisites
Make sure you have Node.js (LTS version recommended) and npm or Yarn installed.

Steps
Clone the Repository:

Bash

git clone https://github.com/USERNAME/your-repository-name.git
cd your-repository-name
(Replace USERNAME and your-repository-name with your actual GitHub repository information)

Install Dependencies:

Bash

npm install
# or
yarn install
Run the Development Server:

Bash

npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to view the project.

Project Structure
/
├── public/                 # Static files (images, favicon) accessible publicly
│   └── images/             # Images like hero, avatars, etc.
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root application layout (metadata, font, global CSS)
│   │   ├── page.tsx        # Main landing page content
│   │   └── globals.css     # Global Tailwind CSS directives and custom CSS
│   └── components/         # Reusable UI components
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── FeaturesSection.tsx
│       ├── TestimonialSection.tsx
│       ├── PricingSection.tsx
│       └── Footer.tsx
├── next.config.js          # Next.js configuration (including static export)
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file!
Deployment to GitHub Pages
This project is configured for static site export, making it highly suitable for deployment to GitHub Pages.

Ensure next.config.js has output: 'export' and images.unoptimized: true:

JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
Build and Export Static Files:

Bash

npm run build && npm run export
# or
yarn build && yarn export
This will generate an out/ folder in your project's root directory.

Configure GitHub Pages:

Go to your repository on GitHub.

Click on the "Settings" tab.

In the left sidebar, click "Pages".

Under "Build and deployment", for "Source", select the main branch (or your primary branch) and the /out folder.

Click "Save".

Your site should soon be live at a URL like https://USERNAME.github.io/your-repository-name/.

Contribution
Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
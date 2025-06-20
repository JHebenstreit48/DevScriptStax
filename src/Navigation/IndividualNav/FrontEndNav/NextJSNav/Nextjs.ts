import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const NextJSNav: Subpage = {
  name: "Next.js",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Getting Started", path: "/nextjs/basics/getting-started" }, // Introduction and setup
        { name: "Routing", path: "/nextjs/basics/routing" }, // Pages, dynamic routing
        { name: "API Routes", path: "/nextjs/basics/api-routes" }, // Server-side endpoints
        { name: "Project Structure", path: "/nextjs/basics/project-structure" }, // Directory layout
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Static Generation (SSG)", path: "/nextjs/core-concepts/ssg" }, // getStaticProps, getStaticPaths
        { name: "Server-Side Rendering (SSR)", path: "/nextjs/core-concepts/ssr" }, // getServerSideProps
        { name: "Client-Side Rendering (CSR)", path: "/nextjs/core-concepts/csr" }, // When to use CSR
        { name: "Middleware", path: "/nextjs/core-concepts/middleware" }, // Middleware usage
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Incremental Static Regeneration (ISR)", path: "/nextjs/advanced/isr" }, // Revalidate pages
        { name: "Image Optimization", path: "/nextjs/advanced/image-optimization" }, // Next.js Image component
        { name: "API Integrations", path: "/nextjs/advanced/api-integrations" }, // External APIs and data fetching
        { name: "Custom Server", path: "/nextjs/advanced/custom-server" }, // Custom Express or other server
      ],
    },
    {
      name: "Deployment",
      subpages: [
        { name: "Vercel", path: "/nextjs/deployment/vercel" }, // Deploying with Vercel
        { name: "Custom Platforms", path: "/nextjs/deployment/custom-platforms" }, // AWS, Docker, etc.
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Performance Optimization", path: "/nextjs/best-practices/performance" }, // Tips for fast apps
        { name: "SEO Optimization", path: "/nextjs/best-practices/seo" }, // SEO best practices
        { name: "Code Splitting", path: "/nextjs/best-practices/code-splitting" }, // Reducing bundle size
      ],
    },
  ],
};

export default NextJSNav;

import { Subpage } from "@/Navigation/NavigationTypes";

const NginxNavigation: Subpage = {
  name: "Nginx",
  subpages: [
    // ---------- Nginx Fundamentals Navigation Start ----------
    {
      name: "Nginx Fundamentals",
      subpages: [
        { name: "Introduction to Nginx", path: "/servers/nginx/intro" },
        { name: "How Nginx Works", path: "/servers/nginx/how-it-works" },
        { name: "Nginx vs Apache", path: "/servers/nginx/nginx-vs-apache" },
        { name: "Common Use Cases for Nginx", path: "/servers/nginx/use-cases" },
      ],
    },
    // ---------- Nginx Fundamentals Navigation End ----------

    // ---------- Nginx Configuration Navigation Start ----------
    {
      name: "Nginx Configuration",
      subpages: [
        { name: "Basic Nginx Configuration", path: "/servers/nginx/configuration/basic" },
        { name: "Setting Up Virtual Hosts (Server Blocks)", path: "/servers/nginx/configuration/server-blocks" },
        { name: "Custom Error Pages", path: "/servers/nginx/configuration/error-pages" },
        { name: "Optimizing Nginx Performance", path: "/servers/nginx/configuration/performance" },
      ],
    },
    // ---------- Nginx Configuration Navigation End ----------

    // ---------- Reverse Proxy & Load Balancing Navigation Start ----------
    {
      name: "Reverse Proxy & Load Balancing",
      subpages: [
        { name: "Reverse Proxy with Nginx", path: "/servers/nginx/reverseproxy/setup" },
        { name: "Load Balancing Strategies", path: "/servers/nginx/reverseproxy/load-balancing" },
        { name: "SSL Termination in Reverse Proxy", path: "/servers/nginx/reverseproxy/ssl-termination" },
        { name: "Handling WebSockets", path: "/servers/nginx/reverseproxy/websockets" },
      ],
    },
    // ---------- Reverse Proxy & Load Balancing Navigation End ----------

    // ---------- Caching & Compression Navigation Start ----------
    {
      name: "Caching & Compression",
      subpages: [
        { name: "Introduction to Nginx Caching", path: "/servers/nginx/caching/overview" },
        { name: "Using FastCGI Cache", path: "/servers/nginx/caching/fastcgi" },
        { name: "Enabling Gzip & Brotli Compression", path: "/servers/nginx/caching/compression" },
        { name: "Optimizing Cache Performance", path: "/servers/nginx/caching/performance" },
      ],
    },
    // ---------- Caching & Compression Navigation End ----------

    // ---------- Nginx Security Navigation Start ----------
    {
      name: "Nginx Security",
      subpages: [
        { name: "Securing Nginx with SSL/TLS", path: "/servers/nginx/security/ssl-tls" },
        { name: "Protecting Against DDoS Attacks", path: "/servers/nginx/security/ddos" },
        { name: "Rate Limiting & Throttling", path: "/servers/nginx/security/rate-limiting" },
        { name: "Best Practices for Nginx Security", path: "/servers/nginx/security/best-practices" },
      ],
    },
    // ---------- Nginx Security Navigation End ----------
  ],
};

export default NginxNavigation;

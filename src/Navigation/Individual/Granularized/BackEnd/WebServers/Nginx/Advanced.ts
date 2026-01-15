import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Proxy & Load Balancing",
      subpages: [
        {
          name: "Reverse Proxy Setup",
          path: "/nginx/advanced/proxy-load-balancing/reverse-proxy-setup"
        },
        {
          name: "Load Balancing Strategies",
          path: "/nginx/advanced/proxy-load-balancing/load-balancing-strategies"
        },
        {
          name: "SSL Termination",
          path: "/nginx/advanced/proxy-load-balancing/ssl-termination"
        },
        {
          name: "WebSockets",
          path: "/nginx/advanced/proxy-load-balancing/websockets"
        }
      ]
    },
    {
      name: "Caching & Compression",
      subpages: [
        {
          name: "Caching Overview",
          path: "/nginx/advanced/caching-compression/caching-overview"
        },
        {
          name: "FastCGI Cache",
          path: "/nginx/advanced/caching-compression/fastcgi-cache"
        },
        {
          name: "Gzip & Brotli",
          path: "/nginx/advanced/caching-compression/gzip-brotli"
        },
        {
          name: "Cache Performance",
          path: "/nginx/advanced/caching-compression/cache-performance"
        }
      ]
    },
    {
      name: "Security & Hardening",
      subpages: [
        {
          name: "TLS/SSL Certificates",
          path: "/nginx/advanced/security-hardening/tls-ssl-certificates"
        },
        {
          name: "Rate Limiting & Throttling",
          path: "/nginx/advanced/security-hardening/rate-limiting-throttling"
        },
        {
          name: "Headers & HSTS",
          path: "/nginx/advanced/security-hardening/headers-hsts"
        }
      ]
    },
    {
      name: "Performance & Tuning",
      subpages: [
        {
          name: "Optimization Techniques",
          path: "/nginx/advanced/performance-tuning/optimization-techniques"
        },
        {
          name: "Keep-Alive & Timeouts",
          path: "/nginx/advanced/performance-tuning/keep-alive-timeouts"
        }
      ]
    }
  ]
};

export default Advanced;
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Koa",
          path: "/backend/frameworks/koa/advanced/api-patterns/rest-in-koa"
        },
        {
          name: "GraphQL (Koa)",
          path: "/backend/frameworks/koa/advanced/api-patterns/graphql-koa"
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "JWT (Koa)",
          path: "/backend/frameworks/koa/advanced/auth/jwt-koa"
        },
        {
          name: "Sessions",
          path: "/backend/frameworks/koa/advanced/auth/sessions"
        },
        {
          name: "Passport (Koa)",
          path: "/backend/frameworks/koa/advanced/auth/passport-koa"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS",
          path: "/backend/frameworks/koa/advanced/security/cors"
        },
        {
          name: "Helmet",
          path: "/backend/frameworks/koa/advanced/security/helmet"
        },
        {
          name: "CSRF (koa-csrf)",
          path: "/backend/frameworks/koa/advanced/security/csrf"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Compression & ETag",
          path: "/backend/frameworks/koa/advanced/performance/compression-etag"
        },
        {
          name: "Static Cache Control",
          path: "/backend/frameworks/koa/advanced/performance/static-cache-control"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Trust Proxy",
          path: "/backend/frameworks/koa/advanced/production/trust-proxy"
        },
        {
          name: "Error Strategy",
          path: "/backend/frameworks/koa/advanced/production/error-strategy"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging Middleware",
          path: "/backend/frameworks/koa/advanced/observability/logging-middleware"
        },
        {
          name: "Metrics & Tracing",
          path: "/backend/frameworks/koa/advanced/observability/metrics-tracing"
        }
      ]
    }
  ]
};

export default Advanced;
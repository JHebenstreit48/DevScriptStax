import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Koa",
          path: '/frameworks/koa/advanced/api-patterns/rest-in-koa'
        },
        {
          name: "GraphQL (Koa)",
          path: '/frameworks/koa/advanced/api-patterns/graphql-koa'
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "JWT (Koa)",
          path: '/frameworks/koa/advanced/auth/jwt-koa'
        },
        {
          name: "Sessions",
          path: '/frameworks/koa/advanced/auth/sessions'
        },
        {
          name: "Passport (Koa)",
          path: '/frameworks/koa/advanced/auth/passport-koa'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS",
          path: '/frameworks/koa/advanced/security/cors'
        },
        {
          name: "Helmet",
          path: '/frameworks/koa/advanced/security/helmet'
        },
        {
          name: "CSRF (koa-csrf)",
          path: '/frameworks/koa/advanced/security/csrf'
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Compression & ETag",
          path: '/frameworks/koa/advanced/performance/compression-etag'
        },
        {
          name: "Static Cache Control",
          path: '/frameworks/koa/advanced/performance/static-cache-control'
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Trust Proxy",
          path: '/frameworks/koa/advanced/production/trust-proxy'
        },
        {
          name: "Error Strategy",
          path: '/frameworks/koa/advanced/production/error-strategy'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging Middleware",
          path: '/frameworks/koa/advanced/observability/logging-middleware'
        },
        {
          name: "Metrics & Tracing",
          path: '/frameworks/koa/advanced/observability/metrics-tracing'
        }
      ]
    }
  ]
};

export default Advanced;
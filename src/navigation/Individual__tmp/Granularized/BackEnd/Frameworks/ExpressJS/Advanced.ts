import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Express",
          path: '/frameworks/express/advanced/api-patterns/rest-in-express'
        },
        {
          name: "GraphQL (Express)",
          path: '/frameworks/express/advanced/api-patterns/graphql-express'
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "Passport.js",
          path: '/frameworks/express/advanced/auth/passport'
        },
        {
          name: "JWT",
          path: '/frameworks/express/advanced/auth/jwt'
        },
        {
          name: "Sessions",
          path: '/frameworks/express/advanced/auth/sessions'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS (Express)",
          path: '/frameworks/express/advanced/security/cors'
        },
        {
          name: "Helmet & Rate Limit",
          path: '/frameworks/express/advanced/security/helmet-rate-limit'
        },
        {
          name: "CSRF (Cookies)",
          path: '/frameworks/express/advanced/security/csrf-cookies'
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Compression & ETag",
          path: '/frameworks/express/advanced/performance/compression-etag'
        },
        {
          name: "Static Cache Control",
          path: '/frameworks/express/advanced/performance/static-cache-control'
        },
        {
          name: "Router Splitting",
          path: '/frameworks/express/advanced/performance/router-splitting'
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Trust Proxy",
          path: '/frameworks/express/advanced/production/trust-proxy'
        },
        {
          name: "Prod Error Strategy",
          path: '/frameworks/express/advanced/production/prod-error-strategy'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging Middleware",
          path: '/frameworks/express/advanced/observability/logging-middleware'
        },
        {
          name: "Metrics & Tracing",
          path: '/frameworks/express/advanced/observability/metrics-tracing'
        }
      ]
    }
  ]
};

export default Advanced;
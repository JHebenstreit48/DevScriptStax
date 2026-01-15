import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Express",
          path: "/backend/frameworks/express/advanced/api-patterns/rest-in-express"
        },
        {
          name: "GraphQL (Express)",
          path: "/backend/frameworks/express/advanced/api-patterns/graphql-express"
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "Passport.js",
          path: "/backend/frameworks/express/advanced/auth/passport"
        },
        {
          name: "JWT",
          path: "/backend/frameworks/express/advanced/auth/jwt"
        },
        {
          name: "Sessions",
          path: "/backend/frameworks/express/advanced/auth/sessions"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS (Express)",
          path: "/backend/frameworks/express/advanced/security/cors"
        },
        {
          name: "Helmet & Rate Limit",
          path: "/backend/frameworks/express/advanced/security/helmet-rate-limit"
        },
        {
          name: "CSRF (Cookies)",
          path: "/backend/frameworks/express/advanced/security/csrf-cookies"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Compression & ETag",
          path: "/backend/frameworks/express/advanced/performance/compression-etag"
        },
        {
          name: "Static Cache Control",
          path: "/backend/frameworks/express/advanced/performance/static-cache-control"
        },
        {
          name: "Router Splitting",
          path: "/backend/frameworks/express/advanced/performance/router-splitting"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Trust Proxy",
          path: "/backend/frameworks/express/advanced/production/trust-proxy"
        },
        {
          name: "Prod Error Strategy",
          path: "/backend/frameworks/express/advanced/production/prod-error-strategy"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging Middleware",
          path: "/backend/frameworks/express/advanced/observability/logging-middleware"
        },
        {
          name: "Metrics & Tracing",
          path: "/backend/frameworks/express/advanced/observability/metrics-tracing"
        }
      ]
    }
  ]
};

export default Advanced;
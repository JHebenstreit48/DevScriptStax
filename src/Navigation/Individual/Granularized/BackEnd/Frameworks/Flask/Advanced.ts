import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Flask",
          path: '/frameworks/flask/advanced/api-patterns/rest-in-flask'
        },
        {
          name: "GraphQL (Flask)",
          path: '/frameworks/flask/advanced/api-patterns/graphql-flask'
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "Flask-Login",
          path: '/frameworks/flask/advanced/auth/flask-login'
        },
        {
          name: "JWT",
          path: '/frameworks/flask/advanced/auth/jwt'
        },
        {
          name: "Sessions",
          path: '/frameworks/flask/advanced/auth/sessions'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS (Flask-CORS)",
          path: '/frameworks/flask/advanced/security/cors'
        },
        {
          name: "CSRF (WTF-CSRF)",
          path: '/frameworks/flask/advanced/security/csrf'
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching (Flask-Caching)",
          path: '/frameworks/flask/advanced/performance/caching'
        },
        {
          name: "Compression",
          path: '/frameworks/flask/advanced/performance/compression'
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Proxy Fix",
          path: '/frameworks/flask/advanced/production/proxy-fix'
        },
        {
          name: "Error Strategy",
          path: '/frameworks/flask/advanced/production/error-strategy'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging",
          path: '/frameworks/flask/advanced/observability/logging'
        },
        {
          name: "Metrics & Tracing",
          path: '/frameworks/flask/advanced/observability/metrics-tracing'
        }
      ]
    }
  ]
};

export default Advanced;
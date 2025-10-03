import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API Patterns",
      subpages: [
        {
          name: "REST in Flask",
          path: "/backend/frameworks/flask/advanced/api-patterns/rest-in-flask"
        },
        {
          name: "GraphQL (Flask)",
          path: "/backend/frameworks/flask/advanced/api-patterns/graphql-flask"
        }
      ]
    },
    {
      name: "Auth",
      subpages: [
        {
          name: "Flask-Login",
          path: "/backend/frameworks/flask/advanced/auth/flask-login"
        },
        {
          name: "JWT",
          path: "/backend/frameworks/flask/advanced/auth/jwt"
        },
        {
          name: "Sessions",
          path: "/backend/frameworks/flask/advanced/auth/sessions"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "CORS (Flask-CORS)",
          path: "/backend/frameworks/flask/advanced/security/cors"
        },
        {
          name: "CSRF (WTF-CSRF)",
          path: "/backend/frameworks/flask/advanced/security/csrf"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching (Flask-Caching)",
          path: "/backend/frameworks/flask/advanced/performance/caching"
        },
        {
          name: "Compression",
          path: "/backend/frameworks/flask/advanced/performance/compression"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Proxy Fix",
          path: "/backend/frameworks/flask/advanced/production/proxy-fix"
        },
        {
          name: "Error Strategy",
          path: "/backend/frameworks/flask/advanced/production/error-strategy"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging",
          path: "/backend/frameworks/flask/advanced/observability/logging"
        },
        {
          name: "Metrics & Tracing",
          path: "/backend/frameworks/flask/advanced/observability/metrics-tracing"
        }
      ]
    }
  ]
};

export default Advanced;
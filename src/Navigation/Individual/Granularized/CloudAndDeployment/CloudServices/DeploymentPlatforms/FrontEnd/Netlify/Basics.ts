import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/netlify/basics/fundamentals/introduction"
        },
        {
          name: "Platform Model",
          path: "/netlify/basics/fundamentals/platform-model"
        },
        {
          name: "Pricing & Plans",
          path: "/netlify/basics/fundamentals/pricing-plans"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Create Account",
          path: "/netlify/basics/setup/create-account"
        },
        {
          name: "Connect Repo & Deploy",
          path: "/netlify/basics/setup/connect-repo-deploy"
        },
        {
          name: "Custom Domain & HTTPS",
          path: "/netlify/basics/setup/custom-domain-https"
        }
      ]
    },
    {
      name: "Builds & Config",
      subpages: [
        {
          name: "Build Settings (netlify.toml)",
          path: "/netlify/basics/builds-config/build-settings"
        },
        {
          name: "Env Vars & Secrets",
          path: "/netlify/basics/builds-config/env-vars-secrets"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Deploy Previews & Branches",
          path: "/netlify/basics/deploys/previews-branches"
        },
        {
          name: "Rollbacks & Locks",
          path: "/netlify/basics/deploys/rollbacks-locks"
        }
      ]
    },
    {
      name: "Routing & Headers",
      subpages: [
        {
          name: "Redirects & Rewrites",
          path: "/netlify/basics/routing-headers/redirects-rewrites"
        },
        {
          name: "Headers & CORS",
          path: "/netlify/basics/routing-headers/headers-cors"
        }
      ]
    },
    {
      name: "Forms & Identity",
      subpages: [
        {
          name: "Forms Basics",
          path: "/netlify/basics/forms-identity/forms-basics"
        },
        {
          name: "Identity Basics",
          path: "/netlify/basics/forms-identity/identity-basics"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/netlify/basics/monitoring/logs-metrics"
        },
        {
          name: "Debugging Deploys",
          path: "/netlify/basics/monitoring/debugging-deploys"
        }
      ]
    }
  ]
};

export default Basics;
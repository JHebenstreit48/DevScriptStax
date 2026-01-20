import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cloud-services/deployment/front-end/netlify/basics/fundamentals/introduction"
        },
        {
          name: "Platform Model",
          path: "/cloud-services/deployment/front-end/netlify/basics/fundamentals/platform-model"
        },
        {
          name: "Pricing & Plans",
          path: "/cloud-services/deployment/front-end/netlify/basics/fundamentals/pricing-plans"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Create Account",
          path: "/cloud-services/deployment/front-end/netlify/basics/setup/create-account"
        },
        {
          name: "Connect Repo & Deploy",
          path: "/cloud-services/deployment/front-end/netlify/basics/setup/connect-repo-deploy"
        },
        {
          name: "Custom Domain & HTTPS",
          path: "/cloud-services/deployment/front-end/netlify/basics/setup/custom-domain-https"
        }
      ]
    },
    {
      name: "Builds & Config",
      subpages: [
        {
          name: "Build Settings (netlify.toml)",
          path: "/cloud-services/deployment/front-end/netlify/basics/builds-config/build-settings"
        },
        {
          name: "Env Vars & Secrets",
          path: "/cloud-services/deployment/front-end/netlify/basics/builds-config/env-vars-secrets"
        }
      ]
    },
    {
      name: "Deploys",
      subpages: [
        {
          name: "Deploy Previews & Branches",
          path: "/cloud-services/deployment/front-end/netlify/basics/deploys/previews-branches"
        },
        {
          name: "Rollbacks & Locks",
          path: "/cloud-services/deployment/front-end/netlify/basics/deploys/rollbacks-locks"
        }
      ]
    },
    {
      name: "Routing & Headers",
      subpages: [
        {
          name: "Redirects & Rewrites",
          path: "/cloud-services/deployment/front-end/netlify/basics/routing-headers/redirects-rewrites"
        },
        {
          name: "Headers & CORS",
          path: "/cloud-services/deployment/front-end/netlify/basics/routing-headers/headers-cors"
        }
      ]
    },
    {
      name: "Forms & Identity",
      subpages: [
        {
          name: "Forms Basics",
          path: "/cloud-services/deployment/front-end/netlify/basics/forms-identity/forms-basics"
        },
        {
          name: "Identity Basics",
          path: "/cloud-services/deployment/front-end/netlify/basics/forms-identity/identity-basics"
        }
      ]
    },
    {
      name: "Monitoring",
      subpages: [
        {
          name: "Logs & Metrics",
          path: "/cloud-services/deployment/front-end/netlify/basics/monitoring/logs-metrics"
        },
        {
          name: "Debugging Deploys",
          path: "/cloud-services/deployment/front-end/netlify/basics/monitoring/debugging-deploys"
        }
      ]
    }
  ]
};

export default Basics;
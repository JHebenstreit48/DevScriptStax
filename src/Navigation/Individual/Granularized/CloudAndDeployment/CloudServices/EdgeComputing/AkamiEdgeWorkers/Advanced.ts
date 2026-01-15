import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching Strategies",
          path: "/akamai-edgeworkers/advanced/performance/caching-strategies"
        },
        {
          name: "Optimization",
          path: "/akamai-edgeworkers/advanced/performance/optimization"
        }
      ]
    },
    {
      name: "Security & Access",
      subpages: [
        {
          name: "TLS & mTLS",
          path: "/akamai-edgeworkers/advanced/security-access/tls-mtls"
        },
        {
          name: "Auth & JWT",
          path: "/akamai-edgeworkers/advanced/security-access/auth-jwt"
        }
      ]
    },
    {
      name: "Data & State",
      subpages: [
        {
          name: "EdgeKV Patterns",
          path: "/akamai-edgeworkers/advanced/data-state/edgekv-patterns"
        },
        {
          name: "Consistency & TTL",
          path: "/akamai-edgeworkers/advanced/data-state/consistency-ttl"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "Property Manager API",
          path: "/akamai-edgeworkers/advanced/integrations/property-manager-api"
        },
        {
          name: "CDN Features",
          path: "/akamai-edgeworkers/advanced/integrations/cdn-features"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Limits & Quotas",
          path: "/akamai-edgeworkers/advanced/cost-scaling/limits-quotas"
        },
        {
          name: "Cost Controls",
          path: "/akamai-edgeworkers/advanced/cost-scaling/cost-controls"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "CI/CD & CLI",
          path: "/akamai-edgeworkers/advanced/workflows/ci-cd-cli"
        },
        {
          name: "Canary & A/B",
          path: "/akamai-edgeworkers/advanced/workflows/canary-ab"
        }
      ]
    }
  ]
};

export default Advanced;
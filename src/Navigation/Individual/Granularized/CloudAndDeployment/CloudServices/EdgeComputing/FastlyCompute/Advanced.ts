import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Caching Strategies",
          path: "/fastly-compute/advanced/performance/caching-strategies"
        },
        {
          name: "Optimization",
          path: "/fastly-compute/advanced/performance/optimization"
        }
      ]
    },
    {
      name: "Security & Access",
      subpages: [
        {
          name: "TLS & mTLS",
          path: "/fastly-compute/advanced/security-access/tls-mtls"
        },
        {
          name: "WAF & Controls",
          path: "/fastly-compute/advanced/security-access/waf-controls"
        }
      ]
    },
    {
      name: "Data & State",
      subpages: [
        {
          name: "Edge Dictionaries (Advanced)",
          path: "/fastly-compute/advanced/data-state/edge-dictionaries-advanced"
        },
        {
          name: "Streaming & Fanout",
          path: "/fastly-compute/advanced/data-state/streaming-fanout"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "VCL Interop",
          path: "/fastly-compute/advanced/integrations/vcl-interop"
        },
        {
          name: "CDN Features",
          path: "/fastly-compute/advanced/integrations/cdn-features"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Limits & Quotas",
          path: "/fastly-compute/advanced/cost-scaling/limits-quotas"
        },
        {
          name: "Cost Controls",
          path: "/fastly-compute/advanced/cost-scaling/cost-controls"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "CI/CD",
          path: "/fastly-compute/advanced/workflows/ci-cd"
        },
        {
          name: "Canary & A/B",
          path: "/fastly-compute/advanced/workflows/canary-ab"
        }
      ]
    }
  ]
};

export default Advanced;
import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Modules",
      subpages: [
        {
          name: "Module System",
          path: "/apache/advanced/modules/module-system"
        },
        {
          name: "Common Modules",
          path: "/apache/advanced/modules/common-modules"
        },
        {
          name: "Enable & Disable Modules",
          path: "/apache/advanced/modules/enable-disable-modules"
        },
        {
          name: "Custom Modules",
          path: "/apache/advanced/modules/custom-modules"
        }
      ]
    },
    {
      name: "Security & Hardening",
      subpages: [
        {
          name: "Security Best Practices",
          path: "/apache/advanced/security-hardening/security-best-practices"
        },
        {
          name: "TLS/SSL Certificates",
          path: "/apache/advanced/security-hardening/tls-ssl-certificates"
        },
        {
          name: "Rate Limiting & Filtering",
          path: "/apache/advanced/security-hardening/rate-limiting-filtering"
        },
        {
          name: "ModSecurity (WAF)",
          path: "/apache/advanced/security-hardening/modsecurity-waf"
        }
      ]
    },
    {
      name: "Performance & Tuning",
      subpages: [
        {
          name: "MPMs & Concurrency",
          path: "/apache/advanced/performance-tuning/mpms-concurrency"
        },
        {
          name: "Caching & Compression",
          path: "/apache/advanced/performance-tuning/caching-compression"
        },
        {
          name: "Keep-Alive & Timeouts",
          path: "/apache/advanced/performance-tuning/keep-alive-timeouts"
        },
        {
          name: "Optimization Techniques",
          path: "/apache/advanced/performance-tuning/optimization-techniques"
        }
      ]
    }
  ]
};

export default Advanced;
import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Multi-Region",
      subpages: [
        {
          name: "Machines & Scale",
          path: "/fly/advanced/multi-region/machines-scale"
        },
        {
          name: "Placement & Spread",
          path: "/fly/advanced/multi-region/placement-spread"
        }
      ]
    },
    {
      name: "Private Networking",
      subpages: [
        {
          name: "Org & WireGuard",
          path: "/fly/advanced/private-networking/org-wireguard"
        },
        {
          name: "Service Mesh",
          path: "/fly/advanced/private-networking/service-mesh"
        }
      ]
    },
    {
      name: "Databases",
      subpages: [
        {
          name: "Postgres on Fly",
          path: "/fly/advanced/databases/postgres-on-fly"
        },
        {
          name: "HA & Backups",
          path: "/fly/advanced/databases/ha-backups"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "Blue-Green Deploys",
          path: "/fly/advanced/workflows/blue-green-deploys"
        },
        {
          name: "Monorepos",
          path: "/fly/advanced/workflows/monorepos"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Secrets & Policies",
          path: "/fly/advanced/security/secrets-policies"
        },
        {
          name: "SSO & Teams",
          path: "/fly/advanced/security/sso-teams"
        }
      ]
    }
  ]
};

export default Advanced;
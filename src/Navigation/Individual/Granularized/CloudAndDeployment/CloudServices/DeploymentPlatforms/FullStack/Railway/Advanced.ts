import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Networking",
      subpages: [
        {
          name: "Domains & SSL",
          path: "/railway/advanced/networking/domains-ssl"
        },
        {
          name: "Static vs Services",
          path: "/railway/advanced/networking/static-vs-services"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "Deploy Triggers",
          path: "/railway/advanced/workflows/deploy-triggers"
        },
        {
          name: "Monorepos",
          path: "/railway/advanced/workflows/monorepos"
        }
      ]
    },
    {
      name: "Persistence",
      subpages: [
        {
          name: "Volumes",
          path: "/railway/advanced/persistence/volumes"
        },
        {
          name: "Backups & Restores",
          path: "/railway/advanced/persistence/backups-restores"
        }
      ]
    },
    {
      name: "Scaling",
      subpages: [
        {
          name: "Autoscale Basics",
          path: "/railway/advanced/scaling/autoscale-basics"
        },
        {
          name: "Health Checks",
          path: "/railway/advanced/scaling/health-checks"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Teams & Roles",
          path: "/railway/advanced/security/teams-roles"
        },
        {
          name: "Secrets & Access",
          path: "/railway/advanced/security/secrets-access"
        }
      ]
    },
    {
      name: "Cost Controls",
      subpages: [
        {
          name: "Usage Caps",
          path: "/railway/advanced/cost-controls/usage-caps"
        },
        {
          name: "Projects & Teams",
          path: "/railway/advanced/cost-controls/projects-teams"
        }
      ]
    }
  ]
};

export default Advanced;
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Kubernetes & Containers",
      subpages: [
        {
          name: "Kapsule (Kubernetes)",
          path: "/cloud-providers/vps/scaleway/advanced/kubernetes/kapsule"
        },
        {
          name: "Container Registry",
          path: "/cloud-providers/vps/scaleway/advanced/kubernetes/container-registry"
        }
      ]
    },
    {
      name: "Serverless & Functions",
      subpages: [
        {
          name: "Serverless Functions",
          path: "/cloud-providers/vps/scaleway/advanced/serverless/serverless-functions"
        },
        {
          name: "Serverless Containers",
          path: "/cloud-providers/vps/scaleway/advanced/serverless/serverless-containers"
        }
      ]
    },
    {
      name: "Automation",
      subpages: [
        {
          name: "Scaleway CLI",
          path: "/cloud-providers/vps/scaleway/advanced/automation/scaleway-cli"
        },
        {
          name: "Terraform on Scaleway",
          path: "/cloud-providers/vps/scaleway/advanced/automation/terraform"
        }
      ]
    }
  ]
};

export default Advanced;
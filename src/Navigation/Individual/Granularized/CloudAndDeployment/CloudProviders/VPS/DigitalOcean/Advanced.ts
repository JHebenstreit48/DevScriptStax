import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Kubernetes & Containers",
      subpages: [
        {
          name: "DOKS (Kubernetes)",
          path: "/cloud-providers/vps/digitalocean/advanced/kubernetes/doks"
        },
        {
          name: "Container Registry",
          path: "/cloud-providers/vps/digitalocean/advanced/kubernetes/container-registry"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "doctl CLI",
          path: "/cloud-providers/vps/digitalocean/advanced/automation/doctl-cli"
        },
        {
          name: "Terraform on DigitalOcean",
          path: "/cloud-providers/vps/digitalocean/advanced/automation/terraform"
        }
      ]
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "App Platform",
          path: "/cloud-providers/vps/digitalocean/advanced/deployment/app-platform"
        },
        {
          name: "Functions (Serverless)",
          path: "/cloud-providers/vps/digitalocean/advanced/deployment/functions-serverless"
        }
      ]
    }
  ]
};

export default Advanced;
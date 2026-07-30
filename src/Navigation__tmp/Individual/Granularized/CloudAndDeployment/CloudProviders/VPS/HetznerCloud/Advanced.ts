import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Kubernetes & Containers",
      subpages: [
        {
          name: "hcloud-k8s (Self-Managed K8s)",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/kubernetes/hcloud-k8s"
        },
        {
          name: "Docker on Hetzner",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/kubernetes/docker-on-hetzner"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "hcloud CLI",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/automation/hcloud-cli"
        },
        {
          name: "Terraform on Hetzner",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/automation/terraform"
        }
      ]
    },
    {
      name: "Deployment Patterns",
      subpages: [
        {
          name: "Cloud-Init & Server Automation",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/deployment/cloud-init"
        },
        {
          name: "Snapshots & Backups",
          path: "/cloud-providers/vps/hetzner-cloud/advanced/deployment/snapshots-and-backups"
        }
      ]
    }
  ]
};

export default Advanced;
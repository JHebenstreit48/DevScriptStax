import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Kubernetes & Containers",
      subpages: [
        {
          name: "LKE (Kubernetes Engine)",
          path: "/cloud-providers/vps/linode/advanced/kubernetes/lke"
        },
        {
          name: "Docker on Linode",
          path: "/cloud-providers/vps/linode/advanced/kubernetes/docker-on-linode"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "Linode CLI",
          path: "/cloud-providers/vps/linode/advanced/automation/linode-cli"
        },
        {
          name: "Terraform on Linode",
          path: "/cloud-providers/vps/linode/advanced/automation/terraform"
        }
      ]
    },
    {
      name: "Deployment",
      subpages: [
        {
          name: "StackScripts",
          path: "/cloud-providers/vps/linode/advanced/deployment/stackscripts"
        },
        {
          name: "Marketplace Apps",
          path: "/cloud-providers/vps/linode/advanced/deployment/marketplace-apps"
        }
      ]
    }
  ]
};

export default Advanced;
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "High Availability & Availability Zones",
          path: "/cloud-providers/hyperscalers/azure/advanced/architecture/high-availability"
        },
        {
          name: "Azure Functions & Serverless",
          path: "/cloud-providers/hyperscalers/azure/advanced/architecture/functions-and-serverless"
        },
        {
          name: "AKS (Kubernetes Service)",
          path: "/cloud-providers/hyperscalers/azure/advanced/architecture/aks"
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      subpages: [
        {
          name: "ARM Templates & Bicep",
          path: "/cloud-providers/hyperscalers/azure/advanced/iac/arm-and-bicep"
        },
        {
          name: "Terraform on Azure",
          path: "/cloud-providers/hyperscalers/azure/advanced/iac/terraform-on-azure"
        }
      ]
    },
    {
      name: "Security & Compliance",
      subpages: [
        {
          name: "Microsoft Defender for Cloud",
          path: "/cloud-providers/hyperscalers/azure/advanced/security/defender-for-cloud"
        },
        {
          name: "Key Vault",
          path: "/cloud-providers/hyperscalers/azure/advanced/security/key-vault"
        }
      ]
    },
    {
      name: "Deployment & CI/CD",
      subpages: [
        {
          name: "Azure DevOps Pipelines",
          path: "/cloud-providers/hyperscalers/azure/advanced/deployment/devops-pipelines"
        },
        {
          name: "Azure Container Registry",
          path: "/cloud-providers/hyperscalers/azure/advanced/deployment/container-registry"
        }
      ]
    }
  ]
};

export default Advanced;
import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "AI & Data Services",
      subpages: [
        {
          name: "Watson APIs",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/ai-data/watson-apis"
        },
        {
          name: "Watson Studio",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/ai-data/watson-studio"
        }
      ]
    },
    {
      name: "Kubernetes & Containers",
      subpages: [
        {
          name: "IKS (Kubernetes Service)",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/kubernetes/iks"
        },
        {
          name: "OpenShift on IBM Cloud",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/kubernetes/openshift"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "IBM Cloud CLI",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/automation/ibm-cloud-cli"
        },
        {
          name: "Terraform on IBM Cloud",
          path: "/cloud-providers/enterprise/ibm-cloud/advanced/automation/terraform"
        }
      ]
    }
  ]
};

export default Advanced;
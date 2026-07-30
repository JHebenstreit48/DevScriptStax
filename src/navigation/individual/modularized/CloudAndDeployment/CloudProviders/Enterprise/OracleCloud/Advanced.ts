import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "High Availability & Fault Domains",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/architecture/high-availability"
        },
        {
          name: "OKE (Kubernetes Engine)",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/architecture/oke"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "OCI CLI",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/automation/oci-cli"
        },
        {
          name: "Terraform on OCI",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/automation/terraform"
        }
      ]
    },
    {
      name: "Security & Compliance",
      subpages: [
        {
          name: "Cloud Guard",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/security/cloud-guard"
        },
        {
          name: "Vault & Key Management",
          path: "/cloud-providers/enterprise/oracle-cloud/advanced/security/vault-and-key-management"
        }
      ]
    }
  ]
};

export default Advanced;
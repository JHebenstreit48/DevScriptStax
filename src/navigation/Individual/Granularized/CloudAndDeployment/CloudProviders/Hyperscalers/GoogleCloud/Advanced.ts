import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "High Availability & Load Balancing",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/architecture/high-availability"
        },
        {
          name: "Cloud Run & Serverless",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/architecture/cloud-run-and-serverless"
        },
        {
          name: "GKE (Kubernetes Engine)",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/architecture/gke"
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      subpages: [
        {
          name: "Deployment Manager",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/iac/deployment-manager"
        },
        {
          name: "Terraform on GCP",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/iac/terraform-on-gcp"
        }
      ]
    },
    {
      name: "Data & AI Services",
      subpages: [
        {
          name: "BigQuery",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/data-ai/bigquery"
        },
        {
          name: "Vertex AI",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/data-ai/vertex-ai"
        }
      ]
    },
    {
      name: "Security & Compliance",
      subpages: [
        {
          name: "Security Command Center",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/security/security-command-center"
        },
        {
          name: "Secret Manager & KMS",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/security/secret-manager-and-kms"
        }
      ]
    },
    {
      name: "Deployment & CI/CD",
      subpages: [
        {
          name: "Cloud Build",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/deployment/cloud-build"
        },
        {
          name: "Artifact Registry",
          path: "/cloud-providers/hyperscalers/google-cloud/advanced/deployment/artifact-registry"
        }
      ]
    }
  ]
};

export default Advanced;
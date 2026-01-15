import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Cold Starts & CPU/Memory",
          path: "/google-cloud-functions/advanced/performance/cold-starts-cpu-memory"
        },
        {
          name: "Min Instances",
          path: "/google-cloud-functions/advanced/performance/min-instances"
        }
      ]
    },
    {
      name: "Networking & Security",
      subpages: [
        {
          name: "VPC Connector",
          path: "/google-cloud-functions/advanced/networking-security/vpc-connector"
        },
        {
          name: "IAM & Service Accounts",
          path: "/google-cloud-functions/advanced/networking-security/iam-service-accounts"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "Eventarc Routes",
          path: "/google-cloud-functions/advanced/integrations/eventarc-routes"
        },
        {
          name: "Cloud Run Interop",
          path: "/google-cloud-functions/advanced/integrations/cloud-run-interop"
        }
      ]
    },
    {
      name: "Architecture",
      subpages: [
        {
          name: "Retries & DLQs",
          path: "/google-cloud-functions/advanced/architecture/retries-dlqs"
        },
        {
          name: "Idempotency",
          path: "/google-cloud-functions/advanced/architecture/idempotency"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Cost Controls",
          path: "/google-cloud-functions/advanced/cost-scaling/cost-controls"
        },
        {
          name: "Concurrency & Throughput",
          path: "/google-cloud-functions/advanced/cost-scaling/concurrency-throughput"
        }
      ]
    }
  ]
};

export default Advanced;
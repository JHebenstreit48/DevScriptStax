import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "High Availability & Multi-Region",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/architecture/high-availability"
        },
        {
          name: "ACK (Kubernetes)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/architecture/ack-kubernetes"
        }
      ]
    },
    {
      name: "Automation & IaC",
      subpages: [
        {
          name: "Alibaba Cloud CLI",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/automation/alibaba-cloud-cli"
        },
        {
          name: "ROS (Resource Orchestration)",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/automation/ros"
        }
      ]
    },
    {
      name: "Security & CDN",
      subpages: [
        {
          name: "Security Center",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/security-cdn/security-center"
        },
        {
          name: "Alibaba Cloud CDN",
          path: "/cloud-providers/hyperscalers/alibaba-cloud/advanced/security-cdn/cdn"
        }
      ]
    }
  ]
};

export default Advanced;
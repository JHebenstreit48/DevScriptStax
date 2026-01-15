import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Cold Starts",
          path: "/aws-lambda/advanced/performance/cold-starts"
        },
        {
          name: "Concurrency",
          path: "/aws-lambda/advanced/performance/concurrency"
        }
      ]
    },
    {
      name: "Networking & Security",
      subpages: [
        {
          name: "VPC Access",
          path: "/aws-lambda/advanced/networking-security/vpc-access"
        },
        {
          name: "IAM Roles & Policies",
          path: "/aws-lambda/advanced/networking-security/iam-roles-policies"
        }
      ]
    },
    {
      name: "Integrations",
      subpages: [
        {
          name: "API Gateway",
          path: "/aws-lambda/advanced/integrations/api-gateway"
        },
        {
          name: "EventBridge / SQS / SNS",
          path: "/aws-lambda/advanced/integrations/eventbridge-sqs-sns"
        }
      ]
    },
    {
      name: "Architecture",
      subpages: [
        {
          name: "Retries & DLQs",
          path: "/aws-lambda/advanced/architecture/retries-dlqs"
        },
        {
          name: "Idempotency",
          path: "/aws-lambda/advanced/architecture/idempotency"
        }
      ]
    },
    {
      name: "Cost & Scaling",
      subpages: [
        {
          name: "Cost Optimization",
          path: "/aws-lambda/advanced/cost-scaling/cost-optimization"
        },
        {
          name: "Scaling Controls",
          path: "/aws-lambda/advanced/cost-scaling/scaling-controls"
        }
      ]
    }
  ]
};

export default Advanced;
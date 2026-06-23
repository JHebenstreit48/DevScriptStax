import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "High Availability & Fault Tolerance",
          path: "/cloud-providers/hyperscalers/aws/advanced/architecture/high-availability"
        },
        {
          name: "Serverless with Lambda",
          path: "/cloud-providers/hyperscalers/aws/advanced/architecture/serverless-lambda"
        },
        {
          name: "Microservices & ECS/EKS",
          path: "/cloud-providers/hyperscalers/aws/advanced/architecture/microservices-ecs-eks"
        }
      ]
    },
    {
      name: "Infrastructure as Code",
      subpages: [
        {
          name: "CloudFormation",
          path: "/cloud-providers/hyperscalers/aws/advanced/iac/cloudformation"
        },
        {
          name: "CDK",
          path: "/cloud-providers/hyperscalers/aws/advanced/iac/cdk"
        }
      ]
    },
    {
      name: "Security & Compliance",
      subpages: [
        {
          name: "Security Hub & GuardDuty",
          path: "/cloud-providers/hyperscalers/aws/advanced/security/security-hub-and-guardduty"
        },
        {
          name: "KMS & Secrets Manager",
          path: "/cloud-providers/hyperscalers/aws/advanced/security/kms-and-secrets-manager"
        }
      ]
    },
    {
      name: "Cost Optimization",
      subpages: [
        {
          name: "Reserved Instances & Savings Plans",
          path: "/cloud-providers/hyperscalers/aws/advanced/cost/reserved-instances-and-savings-plans"
        },
        {
          name: "Spot Instances",
          path: "/cloud-providers/hyperscalers/aws/advanced/cost/spot-instances"
        }
      ]
    },
    {
      name: "Deployment & CI/CD",
      subpages: [
        {
          name: "CodePipeline & CodeDeploy",
          path: "/cloud-providers/hyperscalers/aws/advanced/deployment/codepipeline-and-codedeploy"
        },
        {
          name: "Elastic Beanstalk",
          path: "/cloud-providers/hyperscalers/aws/advanced/deployment/elastic-beanstalk"
        }
      ]
    }
  ]
};

export default Advanced;
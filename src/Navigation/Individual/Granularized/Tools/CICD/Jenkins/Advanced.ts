import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Plugins & Reuse",
      subpages: [
        {
          name: "Using Plugins",
          path: "/tools/cicd/jenkins/advanced/plugins-reuse/plugins"
        },
        {
          name: "Shared Libraries",
          path: "/tools/cicd/jenkins/advanced/plugins-reuse/shared-libraries"
        }
      ]
    },
    {
      name: "Agents & Distributed",
      subpages: [
        {
          name: "Distributed Builds",
          path: "/tools/cicd/jenkins/advanced/agents-distributed/distributed-builds"
        },
        {
          name: "Agents, Nodes & Labels",
          path: "/tools/cicd/jenkins/advanced/agents-distributed/agents-nodes"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Security & Authentication",
          path: "/tools/cicd/jenkins/advanced/security/security"
        },
        {
          name: "Credentials & Secrets",
          path: "/tools/cicd/jenkins/advanced/security/credentials-secrets"
        }
      ]
    },
    {
      name: "Performance & Scale",
      subpages: [
        {
          name: "Performance Optimization",
          path: "/tools/cicd/jenkins/advanced/perf-scale/performance"
        },
        {
          name: "Caching & Artifacts",
          path: "/tools/cicd/jenkins/advanced/perf-scale/caching-artifacts"
        }
      ]
    },
    {
      name: "Debug & Troubleshoot",
      subpages: [
        {
          name: "Build Logs & Replay",
          path: "/tools/cicd/jenkins/advanced/debug-troubleshoot/logs-replay"
        },
        {
          name: "Common Failures",
          path: "/tools/cicd/jenkins/advanced/debug-troubleshoot/common-failures"
        }
      ]
    }
  ]
};

export default Advanced;
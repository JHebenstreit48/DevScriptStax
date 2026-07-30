import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Plugins & Reuse",
      subpages: [
        {
          name: "Using Plugins",
          path: "/ci-cd/jenkins/advanced/plugins-reuse/plugins"
        },
        {
          name: "Shared Libraries",
          path: "/ci-cd/jenkins/advanced/plugins-reuse/shared-libraries"
        }
      ]
    },
    {
      name: "Agents & Distributed",
      subpages: [
        {
          name: "Distributed Builds",
          path: "/ci-cd/jenkins/advanced/agents-distributed/distributed-builds"
        },
        {
          name: "Agents, Nodes & Labels",
          path: "/ci-cd/jenkins/advanced/agents-distributed/agents-nodes"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Security & Authentication",
          path: "/ci-cd/jenkins/advanced/security/security"
        },
        {
          name: "Credentials & Secrets",
          path: "/ci-cd/jenkins/advanced/security/credentials-secrets"
        }
      ]
    },
    {
      name: "Performance & Scale",
      subpages: [
        {
          name: "Performance Optimization",
          path: "/ci-cd/jenkins/advanced/perf-scale/performance"
        },
        {
          name: "Caching & Artifacts",
          path: "/ci-cd/jenkins/advanced/perf-scale/caching-artifacts"
        }
      ]
    },
    {
      name: "Debug & Troubleshoot",
      subpages: [
        {
          name: "Build Logs & Replay",
          path: "/ci-cd/jenkins/advanced/debug-troubleshoot/logs-replay"
        },
        {
          name: "Common Failures",
          path: "/ci-cd/jenkins/advanced/debug-troubleshoot/common-failures"
        }
      ]
    }
  ]
};

export default Advanced;
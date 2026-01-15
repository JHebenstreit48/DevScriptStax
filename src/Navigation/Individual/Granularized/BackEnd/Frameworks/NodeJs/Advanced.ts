import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Concurrency & Processes",
      subpages: [
        {
          name: "Worker Threads",
          path: "/backend/frameworks/nodejs/advanced/concurrency-processes/worker-threads"
        },
        {
          name: "child_process & spawn",
          path: "/backend/frameworks/nodejs/advanced/concurrency-processes/child-process-spawn"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "perf_hooks & Benchmarks",
          path: "/backend/frameworks/nodejs/advanced/performance/perf-hooks-benchmarks"
        },
        {
          name: "CPU & Heap Profiling",
          path: "/backend/frameworks/nodejs/advanced/performance/cpu-heap-profiling"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging (Node)",
          path: "/backend/frameworks/nodejs/advanced/observability/logging-node"
        },
        {
          name: "Diagnostics & async_hooks",
          path: "/backend/frameworks/nodejs/advanced/observability/diagnostics-async-hooks"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Graceful Shutdown & Signals",
          path: "/backend/frameworks/nodejs/advanced/production/graceful-shutdown-signals"
        },
        {
          name: "Process Managers & Cluster",
          path: "/backend/frameworks/nodejs/advanced/production/process-managers-cluster"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Crypto Basics",
          path: "/backend/frameworks/nodejs/advanced/security/crypto-basics"
        },
        {
          name: "HTTPS/TLS Server",
          path: "/backend/frameworks/nodejs/advanced/security/https-tls-server"
        }
      ]
    }
  ]
};

export default Advanced;
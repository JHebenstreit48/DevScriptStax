import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Concurrency & Processes",
      subpages: [
        {
          name: "Worker Threads",
          path: '/frameworks/nodejs/advanced/concurrency-processes/worker-threads'
        },
        {
          name: "child_process & spawn",
          path: '/frameworks/nodejs/advanced/concurrency-processes/child-process-spawn'
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "perf_hooks & Benchmarks",
          path: '/frameworks/nodejs/advanced/performance/perf-hooks-benchmarks'
        },
        {
          name: "CPU & Heap Profiling",
          path: '/frameworks/nodejs/advanced/performance/cpu-heap-profiling'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging (Node)",
          path: '/frameworks/nodejs/advanced/observability/logging-node'
        },
        {
          name: "Diagnostics & async_hooks",
          path: '/frameworks/nodejs/advanced/observability/diagnostics-async-hooks'
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Graceful Shutdown & Signals",
          path: '/frameworks/nodejs/advanced/production/graceful-shutdown-signals'
        },
        {
          name: "Process Managers & Cluster",
          path: '/frameworks/nodejs/advanced/production/process-managers-cluster'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Crypto Basics",
          path: '/frameworks/nodejs/advanced/security/crypto-basics'
        },
        {
          name: "HTTPS/TLS Server",
          path: '/frameworks/nodejs/advanced/security/https-tls-server'
        }
      ]
    }
  ]
};

export default Advanced;
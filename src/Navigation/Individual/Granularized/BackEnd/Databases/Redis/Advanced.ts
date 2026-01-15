import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Persistence",
      subpages: [
        {
          name: "RDB Snapshotting",
          path: "/redis/advanced/persistence/rdb-snapshotting"
        },
        {
          name: "AOF",
          path: "/redis/advanced/persistence/aof"
        },
        {
          name: "Hybrid & Tuning",
          path: "/redis/advanced/persistence/hybrid-and-tuning"
        }
      ]
    },
    {
      name: "Performance & Memory",
      subpages: [
        {
          name: "Memory Optimization",
          path: "/redis/advanced/performance-and-memory/memory-optimization"
        },
        {
          name: "Eviction Policies",
          path: "/redis/advanced/performance-and-memory/eviction-policies"
        },
        {
          name: "Latency & Pipelining",
          path: "/redis/advanced/performance-and-memory/latency-and-pipelining"
        }
      ]
    },
    {
      name: "Clustering & HA",
      subpages: [
        {
          name: "Replication",
          path: "/redis/advanced/clustering-and-ha/replication"
        },
        {
          name: "Sentinel",
          path: "/redis/advanced/clustering-and-ha/sentinel"
        },
        {
          name: "Redis Cluster & Sharding",
          path: "/redis/advanced/clustering-and-ha/redis-cluster-and-sharding"
        }
      ]
    },
    {
      name: "Messaging & Streams",
      subpages: [
        {
          name: "Pub/Sub Patterns",
          path: "/redis/advanced/messaging-and-streams/pubsub-patterns"
        },
        {
          name: "Streams & Consumers",
          path: "/redis/advanced/messaging-and-streams/streams-and-consumers"
        }
      ]
    },
    {
      name: "Security & Ops",
      subpages: [
        {
          name: "Users & ACLs",
          path: "/redis/advanced/security-and-ops/users-and-acls"
        },
        {
          name: "TLS & Auth",
          path: "/redis/advanced/security-and-ops/tls-and-auth"
        },
        {
          name: "Backup & Restore",
          path: "/redis/advanced/security-and-ops/backup-and-restore"
        }
      ]
    }
  ]
};

export default Advanced;
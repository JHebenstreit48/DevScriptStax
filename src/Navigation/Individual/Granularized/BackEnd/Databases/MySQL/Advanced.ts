import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Indexes & Optimization",
      subpages: [
        {
          name: "Index Basics",
          path: "/mysql/advanced/indexes-optimization/index-basics"
        },
        {
          name: "Managing Indexes",
          path: "/mysql/advanced/indexes-optimization/managing-indexes"
        },
        {
          name: "EXPLAIN & Plans",
          path: "/mysql/advanced/indexes-optimization/explain-plans"
        },
        {
          name: "Query Tuning",
          path: "/mysql/advanced/indexes-optimization/query-tuning"
        }
      ]
    },
    {
      name: "Transactions & Concurrency",
      subpages: [
        {
          name: "Transactions",
          path: "/mysql/advanced/transactions-concurrency/transactions"
        },
        {
          name: "Isolation Levels",
          path: "/mysql/advanced/transactions-concurrency/isolation-levels"
        },
        {
          name: "Locking & Deadlocks",
          path: "/mysql/advanced/transactions-concurrency/locking-deadlocks"
        }
      ]
    },
    {
      name: "Stored Programs",
      subpages: [
        {
          name: "Stored Procedures",
          path: "/mysql/advanced/stored-programs/stored-procedures"
        },
        {
          name: "Functions",
          path: "/mysql/advanced/stored-programs/functions"
        },
        {
          name: "Triggers",
          path: "/mysql/advanced/stored-programs/triggers"
        },
        {
          name: "Events",
          path: "/mysql/advanced/stored-programs/events"
        }
      ]
    },
    {
      name: "Replication & HA",
      subpages: [
        {
          name: "Replication Basics",
          path: "/mysql/advanced/replication-ha/replication-basics"
        },
        {
          name: "Topologies",
          path: "/mysql/advanced/replication-ha/topologies"
        },
        {
          name: "Backup & Restore",
          path: "/mysql/advanced/replication-ha/backup-restore"
        }
      ]
    },
    {
      name: "Security & Admin",
      subpages: [
        {
          name: "Users & Privileges",
          path: "/mysql/advanced/security-admin/users-privileges"
        },
        {
          name: "SSL/TLS",
          path: "/mysql/advanced/security-admin/ssl-tls"
        },
        {
          name: "Audit & Logging",
          path: "/mysql/advanced/security-admin/audit-logging"
        }
      ]
    }
  ]
};

export default Advanced;
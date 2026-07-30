import type { Subpage } from '@/types/navigation';

const ServerAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Persisted Queries",
      subpages: [
        {
          name: "APQ Setup",
          path: "/apollo/server/advanced/persisted-queries/apq-setup"
        },
        {
          name: "CDN Strategy",
          path: "/apollo/server/advanced/persisted-queries/cdn-strategy"
        }
      ]
    },
    {
      name: "Subscriptions Transport",
      subpages: [
        {
          name: "WebSocket (graphql-ws)",
          path: "/apollo/server/advanced/subscriptions-transport/websocket"
        },
        {
          name: "SSE (graphql-sse)",
          path: "/apollo/server/advanced/subscriptions-transport/sse"
        }
      ]
    },
    {
      name: "DataSource Integrations",
      subpages: [
        {
          name: "RESTDataSource",
          path: "/apollo/server/advanced/datasource-integrations/rest-datasource"
        },
        {
          name: "Custom DataSource",
          path: "/apollo/server/advanced/datasource-integrations/custom"
        }
      ]
    },
    {
      name: "Plugins & Lifecycle",
      subpages: [
        {
          name: "Plugin API",
          path: "/apollo/server/advanced/plugins-lifecycle/plugin-api"
        },
        {
          name: "Error Masks",
          path: "/apollo/server/advanced/plugins-lifecycle/error-masks"
        }
      ]
    },
    {
      name: "Cache & Hints",
      subpages: [
        {
          name: "Cache Hints",
          path: "/apollo/server/advanced/cache-hints/cache-hints"
        },
        {
          name: "Response Cache",
          path: "/apollo/server/advanced/cache-hints/response-cache"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Studio Metrics",
          path: "/apollo/server/advanced/observability/studio-metrics"
        },
        {
          name: "Tracing",
          path: "/apollo/server/advanced/observability/tracing"
        }
      ]
    },
    {
      name: "Schema Governance",
      subpages: [
        {
          name: "Checks & Contracts",
          path: "/apollo/server/advanced/schema-governance/checks-contracts"
        },
        {
          name: "Operation Registry",
          path: "/apollo/server/advanced/schema-governance/operation-registry"
        }
      ]
    }
  ]
};

export default ServerAdvanced;
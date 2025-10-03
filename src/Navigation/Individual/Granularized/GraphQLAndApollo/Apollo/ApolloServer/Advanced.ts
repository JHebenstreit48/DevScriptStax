import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const ServerAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Persisted Queries",
      subpages: [
        {
          name: "APQ Setup",
          path: "/graphqlandapollo/apollo/server/advanced/persisted-queries/apq-setup"
        },
        {
          name: "CDN Strategy",
          path: "/graphqlandapollo/apollo/server/advanced/persisted-queries/cdn-strategy"
        }
      ]
    },
    {
      name: "Subscriptions Transport",
      subpages: [
        {
          name: "WebSocket (graphql-ws)",
          path: "/graphqlandapollo/apollo/server/advanced/subscriptions-transport/websocket"
        },
        {
          name: "SSE (graphql-sse)",
          path: "/graphqlandapollo/apollo/server/advanced/subscriptions-transport/sse"
        }
      ]
    },
    {
      name: "DataSource Integrations",
      subpages: [
        {
          name: "RESTDataSource",
          path: "/graphqlandapollo/apollo/server/advanced/datasource-integrations/rest-datasource"
        },
        {
          name: "Custom DataSource",
          path: "/graphqlandapollo/apollo/server/advanced/datasource-integrations/custom"
        }
      ]
    },
    {
      name: "Plugins & Lifecycle",
      subpages: [
        {
          name: "Plugin API",
          path: "/graphqlandapollo/apollo/server/advanced/plugins-lifecycle/plugin-api"
        },
        {
          name: "Error Masks",
          path: "/graphqlandapollo/apollo/server/advanced/plugins-lifecycle/error-masks"
        }
      ]
    },
    {
      name: "Cache & Hints",
      subpages: [
        {
          name: "Cache Hints",
          path: "/graphqlandapollo/apollo/server/advanced/cache-hints/cache-hints"
        },
        {
          name: "Response Cache",
          path: "/graphqlandapollo/apollo/server/advanced/cache-hints/response-cache"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Studio Metrics",
          path: "/graphqlandapollo/apollo/server/advanced/observability/studio-metrics"
        },
        {
          name: "Tracing",
          path: "/graphqlandapollo/apollo/server/advanced/observability/tracing"
        }
      ]
    },
    {
      name: "Schema Governance",
      subpages: [
        {
          name: "Checks & Contracts",
          path: "/graphqlandapollo/apollo/server/advanced/schema-governance/checks-contracts"
        },
        {
          name: "Operation Registry",
          path: "/graphqlandapollo/apollo/server/advanced/schema-governance/operation-registry"
        }
      ]
    }
  ]
};

export default ServerAdvanced;
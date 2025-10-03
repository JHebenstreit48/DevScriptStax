import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const ClientAdvanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Link Stack",
      subpages: [
        {
          name: "HttpLink & Split",
          path: "/graphqlandapollo/apollo/client/advanced/link-stack/http-split"
        },
        {
          name: "AuthLink & Context",
          path: "/graphqlandapollo/apollo/client/advanced/link-stack/auth-context"
        }
      ]
    },
    {
      name: "Cache & Policies",
      subpages: [
        {
          name: "Fetch Policies",
          path: "/graphqlandapollo/apollo/client/advanced/cache-policies/fetch-policies"
        },
        {
          name: "Field Policies",
          path: "/graphqlandapollo/apollo/client/advanced/cache-policies/field-policies"
        }
      ]
    },
    {
      name: "Pagination",
      subpages: [
        {
          name: "Offset",
          path: "/graphqlandapollo/apollo/client/advanced/pagination/offset"
        },
        {
          name: "Cursor/Relay",
          path: "/graphqlandapollo/apollo/client/advanced/pagination/cursor-relay"
        }
      ]
    },
    {
      name: "Errors & Retry",
      subpages: [
        {
          name: "Error Handling",
          path: "/graphqlandapollo/apollo/client/advanced/errors-retry/error-handling"
        },
        {
          name: "Retry Link",
          path: "/graphqlandapollo/apollo/client/advanced/errors-retry/retry-link"
        }
      ]
    },
    {
      name: "Subscriptions Transport",
      subpages: [
        {
          name: "WebSocket Link",
          path: "/graphqlandapollo/apollo/client/advanced/subscriptions-transport/websocket-link"
        },
        {
          name: "SSE Link",
          path: "/graphqlandapollo/apollo/client/advanced/subscriptions-transport/sse-link"
        }
      ]
    },
    {
      name: "Tooling",
      subpages: [
        {
          name: "Codegen",
          path: "/graphqlandapollo/apollo/client/advanced/tooling/codegen"
        },
        {
          name: "DevTools",
          path: "/graphqlandapollo/apollo/client/advanced/tooling/devtools"
        }
      ]
    }
  ]
};

export default ClientAdvanced;
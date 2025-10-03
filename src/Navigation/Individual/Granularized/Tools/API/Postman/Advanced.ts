import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Automation",
      subpages: [
        {
          name: "Scripts",
          path: "/tools/api/postman/advanced/automation/scripts"
        },
        {
          name: "Pre & Tests",
          path: "/tools/api/postman/advanced/automation/pre-tests"
        }
      ]
    },
    {
      name: "Mocking",
      subpages: [
        {
          name: "Mock Servers",
          path: "/tools/api/postman/advanced/mocking/mock-servers"
        },
        {
          name: "Simulated APIs",
          path: "/tools/api/postman/advanced/mocking/simulated-apis"
        }
      ]
    },
    {
      name: "Portability",
      subpages: [
        {
          name: "Export & Import",
          path: "/tools/api/postman/advanced/portability/export-import"
        },
        {
          name: "Backup & Sync",
          path: "/tools/api/postman/advanced/portability/backup-sync"
        }
      ]
    },
    {
      name: "Protocols",
      subpages: [
        {
          name: "GraphQL in Postman",
          path: "/tools/api/postman/advanced/protocols/graphql-in-postman"
        },
        {
          name: "gRPC & WS",
          path: "/tools/api/postman/advanced/protocols/grpc-ws"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "OAuth Flows",
          path: "/tools/api/postman/advanced/security/oauth-flows"
        },
        {
          name: "Certificates",
          path: "/tools/api/postman/advanced/security/certificates"
        }
      ]
    }
  ]
};

export default Advanced;
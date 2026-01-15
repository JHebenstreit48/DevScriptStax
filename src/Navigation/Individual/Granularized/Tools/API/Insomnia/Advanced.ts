import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Inso & CI",
      subpages: [
        {
          name: "Inso CLI",
          path: "/tools/api/insomnia/advanced/inso-ci/inso-cli"
        },
        {
          name: "CI Pipelines",
          path: "/tools/api/insomnia/advanced/inso-ci/pipelines"
        }
      ]
    },
    {
      name: "Portability",
      subpages: [
        {
          name: "Export & Import",
          path: "/tools/api/insomnia/advanced/portability/export-import"
        },
        {
          name: "Backup & Sync",
          path: "/tools/api/insomnia/advanced/portability/backup-sync"
        }
      ]
    },
    {
      name: "Extensibility",
      subpages: [
        {
          name: "Plugins",
          path: "/tools/api/insomnia/advanced/extensibility/plugins"
        },
        {
          name: "Template Tags",
          path: "/tools/api/insomnia/advanced/extensibility/template-tags"
        }
      ]
    },
    {
      name: "Protocols",
      subpages: [
        {
          name: "GraphQL in Insomnia",
          path: "/tools/api/insomnia/advanced/protocols/graphql-in-insomnia"
        },
        {
          name: "gRPC & WS",
          path: "/tools/api/insomnia/advanced/protocols/grpc-ws"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Client Certs",
          path: "/tools/api/insomnia/advanced/security/client-certs"
        },
        {
          name: "Cookie Jar & CSRF",
          path: "/tools/api/insomnia/advanced/security/cookie-jar-csrf"
        }
      ]
    },
    {
      name: "Mocking",
      subpages: [
        {
          name: "Mock Server",
          path: "/tools/api/insomnia/advanced/mocking/mock-server"
        },
        {
          name: "Route Variants",
          path: "/tools/api/insomnia/advanced/mocking/route-variants"
        }
      ]
    }
  ]
};

export default Advanced;
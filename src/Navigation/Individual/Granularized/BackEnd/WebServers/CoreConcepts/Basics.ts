import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/core-concepts/basics/fundamentals/introduction"
        },
        {
          name: "Types of Servers",
          path: "/core-concepts/basics/fundamentals/types-of-servers"
        },
        {
          name: "Web vs App Servers",
          path: "/core-concepts/basics/fundamentals/web-vs-app-servers"
        },
        {
          name: "Client–Server Model",
          path: "/core-concepts/basics/fundamentals/client-server-model"
        },
        {
          name: "Static vs Dynamic Content",
          path: "/core-concepts/basics/fundamentals/static-vs-dynamic-content"
        }
      ]
    },
    {
      name: "Setup & Ops",
      subpages: [
        {
          name: "Server OS Choices",
          path: "/core-concepts/basics/setup-ops/server-os-choices"
        },
        {
          name: "Package Managers & Updates",
          path: "/core-concepts/basics/setup-ops/package-managers-updates"
        },
        {
          name: "Directory Layout & Doc Roots",
          path: "/core-concepts/basics/setup-ops/directory-layout-doc-roots"
        },
        {
          name: "Service Management (systemd)",
          path: "/core-concepts/basics/setup-ops/service-management-systemd"
        },
        {
          name: "Configuration Files & Includes",
          path: "/core-concepts/basics/setup-ops/config-files-and-includes"
        }
      ]
    }
  ]
};

export default Basics;
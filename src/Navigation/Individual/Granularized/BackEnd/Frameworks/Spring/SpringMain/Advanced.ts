import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Context & Profiles",
      subpages: [
        {
          name: "ApplicationContext",
          path: "/backend/frameworks/spring/spring-main/advanced/context-profiles/application-context"
        },
        {
          name: "Profiles & Properties",
          path: "/backend/frameworks/spring/spring-main/advanced/context-profiles/profiles-properties"
        }
      ]
    },
    {
      name: "AOP Advanced",
      subpages: [
        {
          name: "Pointcuts & Proxies",
          path: "/backend/frameworks/spring/spring-main/advanced/aop-advanced/pointcuts-proxies"
        },
        {
          name: "Tx AOP",
          path: "/backend/frameworks/spring/spring-main/advanced/aop-advanced/transaction-aop"
        }
      ]
    },
    {
      name: "Resources & SpEL",
      subpages: [
        {
          name: "Resource Loading",
          path: "/backend/frameworks/spring/spring-main/advanced/resources-spel/resource-loading"
        },
        {
          name: "SpEL",
          path: "/backend/frameworks/spring/spring-main/advanced/resources-spel/spel"
        }
      ]
    },
    {
      name: "Events",
      subpages: [
        {
          name: "Application Events",
          path: "/backend/frameworks/spring/spring-main/advanced/events/application-events"
        },
        {
          name: "Listeners",
          path: "/backend/frameworks/spring/spring-main/advanced/events/listeners"
        }
      ]
    }
  ]
};

export default Advanced;
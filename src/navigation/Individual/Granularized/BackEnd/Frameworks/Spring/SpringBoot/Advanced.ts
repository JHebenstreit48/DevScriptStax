import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API (Spring)",
      subpages: [
        {
          name: "REST in Spring",
          path: '/frameworks/spring/spring-boot/advanced/api-spring/rest-in-spring'
        },
        {
          name: "Exception Handling",
          path: '/frameworks/spring/spring-boot/advanced/api-spring/exception-handling'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Spring Security",
          path: '/frameworks/spring/spring-boot/advanced/security/spring-security'
        },
        {
          name: "JWT (Spring)",
          path: '/frameworks/spring/spring-boot/advanced/security/jwt-spring'
        },
        {
          name: "OAuth2 / OIDC",
          path: '/frameworks/spring/spring-boot/advanced/security/oauth2-oidc'
        }
      ]
    },
    {
      name: "Data (Advanced)",
      subpages: [
        {
          name: "Transactions",
          path: '/frameworks/spring/spring-boot/advanced/data-advanced/transactions'
        },
        {
          name: "Paging & Specs",
          path: '/frameworks/spring/spring-boot/advanced/data-advanced/paging-specifications'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Actuator",
          path: '/frameworks/spring/spring-boot/advanced/observability/actuator'
        },
        {
          name: "Metrics & Tracing",
          path: '/frameworks/spring/spring-boot/advanced/observability/metrics-tracing'
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Packaging (Jar/War)",
          path: '/frameworks/spring/spring-boot/advanced/production/packaging-jar-war'
        },
        {
          name: "Graceful Shutdown",
          path: '/frameworks/spring/spring-boot/advanced/production/graceful-shutdown'
        }
      ]
    },
    {
      name: "Async & Scheduling",
      subpages: [
        {
          name: "Async & Executors",
          path: '/frameworks/spring/spring-boot/advanced/async-scheduling/async-executors'
        },
        {
          name: "Scheduling",
          path: '/frameworks/spring/spring-boot/advanced/async-scheduling/scheduling'
        }
      ]
    }
  ]
};

export default Advanced;
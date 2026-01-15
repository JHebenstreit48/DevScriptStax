import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/backend/frameworks/spring/spring-main/basics/fundamentals/introduction"
        },
        {
          name: "IoC Container & Beans",
          path: "/backend/frameworks/spring/spring-main/basics/fundamentals/ioc-beans"
        },
        {
          name: "Config (JavaConfig/XML)",
          path: "/backend/frameworks/spring/spring-main/basics/fundamentals/config-javaconfig-xml"
        },
        {
          name: "Component Scan",
          path: "/backend/frameworks/spring/spring-main/basics/fundamentals/component-scan"
        }
      ]
    },
    {
      name: "DI & AOP",
      subpages: [
        {
          name: "Dependency Injection",
          path: "/backend/frameworks/spring/spring-main/basics/di-aop/dependency-injection"
        },
        {
          name: "AOP Basics",
          path: "/backend/frameworks/spring/spring-main/basics/di-aop/aop-basics"
        }
      ]
    },
    {
      name: "Data (Core)",
      subpages: [
        {
          name: "JDBC Template",
          path: "/backend/frameworks/spring/spring-main/basics/data-core/jdbc-template"
        },
        {
          name: "Transactions",
          path: "/backend/frameworks/spring/spring-main/basics/data-core/transactions"
        }
      ]
    }
  ]
};

export default Basics;
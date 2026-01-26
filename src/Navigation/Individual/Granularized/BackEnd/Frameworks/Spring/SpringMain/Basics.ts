import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: '/frameworks/spring/spring-main/basics/fundamentals/introduction'
        },
        {
          name: "IoC Container & Beans",
          path: '/frameworks/spring/spring-main/basics/fundamentals/ioc-beans'
        },
        {
          name: "Config (JavaConfig/XML)",
          path: '/frameworks/spring/spring-main/basics/fundamentals/config-javaconfig-xml'
        },
        {
          name: "Component Scan",
          path: '/frameworks/spring/spring-main/basics/fundamentals/component-scan'
        }
      ]
    },
    {
      name: "DI & AOP",
      subpages: [
        {
          name: "Dependency Injection",
          path: '/frameworks/spring/spring-main/basics/di-aop/dependency-injection'
        },
        {
          name: "AOP Basics",
          path: '/frameworks/spring/spring-main/basics/di-aop/aop-basics'
        }
      ]
    },
    {
      name: "Data (Core)",
      subpages: [
        {
          name: "JDBC Template",
          path: '/frameworks/spring/spring-main/basics/data-core/jdbc-template'
        },
        {
          name: "Transactions",
          path: '/frameworks/spring/spring-main/basics/data-core/transactions'
        }
      ]
    }
  ]
};

export default Basics;
import { Subpage } from "@/Navigation/NavigationTypes";

const SpringBootNavigation: Subpage = {
  name: "Spring Boot",
  subpages: [
    // ---------- Spring Boot Core Navigation Start ----------
    {
      name: "Spring Boot Fundamentals",
      subpages: [
        { name: "Introduction to Spring Boot", path: "/frameworks/springboot/intro" },
        { name: "Spring Boot vs Spring Framework", path: "/frameworks/springboot/spring-vs-springboot" },
        { name: "Project Structure & Setup", path: "/frameworks/springboot/setup" },
        { name: "Spring Boot Annotations", path: "/frameworks/springboot/annotations" },
      ],
    },
    // ---------- Spring Boot Core Navigation End ----------

    // ---------- Spring Boot Web Development Navigation Start ----------
    {
      name: "Spring Boot Web",
      subpages: [
        { name: "Spring MVC & REST API", path: "/frameworks/springboot/web/mvc-rest-api" },
        { name: "Spring Boot Controllers", path: "/frameworks/springboot/web/controllers" },
        { name: "Request Handling & Validation", path: "/frameworks/springboot/web/requests-validation" },
        { name: "Spring Boot with Thymeleaf", path: "/frameworks/springboot/web/thymeleaf" },
      ],
    },
    // ---------- Spring Boot Web Development Navigation End ----------

    // ---------- Spring Boot Data Navigation Start ----------
    {
      name: "Spring Boot Data",
      subpages: [
        { name: "Spring Boot with JPA & Hibernate", path: "/frameworks/springboot/data/jpa-hibernate" },
        { name: "Spring Boot with PostgreSQL & MySQL", path: "/frameworks/springboot/data/databases" },
        { name: "Spring Data Repositories", path: "/frameworks/springboot/data/repositories" },
        { name: "Transaction Management", path: "/frameworks/springboot/data/transactions" },
      ],
    },
    // ---------- Spring Boot Data Navigation End ----------

    // ---------- Spring Boot Security Navigation Start ----------
    {
      name: "Spring Boot Security",
      subpages: [
        { name: "Spring Security Basics", path: "/frameworks/springboot/security/basics" },
        { name: "JWT Authentication in Spring Boot", path: "/frameworks/springboot/security/jwt" },
        { name: "OAuth2 & OpenID Connect", path: "/frameworks/springboot/security/oauth" },
        { name: "Role-Based Access Control (RBAC)", path: "/frameworks/springboot/security/rbac" },
      ],
    },
    // ---------- Spring Boot Security Navigation End ----------

    // ---------- Advanced Spring Boot Navigation Start ----------
    {
      name: "Advanced Spring Boot",
      subpages: [
        { name: "Spring Boot Actuator", path: "/frameworks/springboot/advanced/actuator" },
        { name: "Microservices with Spring Boot", path: "/frameworks/springboot/advanced/microservices" },
        { name: "Spring Boot & Cloud Deployment", path: "/frameworks/springboot/advanced/cloud-deployment" },
        { name: "Performance Optimization", path: "/frameworks/springboot/advanced/performance" },
      ],
    },
    // ---------- Advanced Spring Boot Navigation End ----------
  ],
};

export default SpringBootNavigation;

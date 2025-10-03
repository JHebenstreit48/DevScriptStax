import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/backend/frameworks/spring/spring-boot/basics/fundamentals/intro"
        },
        {
          name: "Install & Setup",
          path: "/backend/frameworks/spring/spring-boot/basics/fundamentals/install-setup"
        },
        {
          name: "Project Structure",
          path: "/backend/frameworks/spring/spring-boot/basics/fundamentals/project-structure"
        },
        {
          name: "Starters & Auto-Config",
          path: "/backend/frameworks/spring/spring-boot/basics/fundamentals/starters-auto-config"
        }
      ]
    },
    {
      name: "Config",
      subpages: [
        {
          name: "Properties & YAML",
          path: "/backend/frameworks/spring/spring-boot/basics/config/properties-yaml"
        },
        {
          name: "Profiles",
          path: "/backend/frameworks/spring/spring-boot/basics/config/profiles"
        },
        {
          name: "External Config & Env",
          path: "/backend/frameworks/spring/spring-boot/basics/config/external-config-env"
        }
      ]
    },
    {
      name: "Web MVC",
      subpages: [
        {
          name: "Controllers",
          path: "/backend/frameworks/spring/spring-boot/basics/web-mvc/controllers"
        },
        {
          name: "Routing & Params",
          path: "/backend/frameworks/spring/spring-boot/basics/web-mvc/routing-params"
        },
        {
          name: "Validation & Binding",
          path: "/backend/frameworks/spring/spring-boot/basics/web-mvc/validation-binding"
        }
      ]
    },
    {
      name: "Data (Spring)",
      subpages: [
        {
          name: "JPA & Entities",
          path: "/backend/frameworks/spring/spring-boot/basics/data-spring/jpa-entities"
        },
        {
          name: "Repositories",
          path: "/backend/frameworks/spring/spring-boot/basics/data-spring/repositories"
        }
      ]
    },
    {
      name: "Views & Static",
      subpages: [
        {
          name: "Thymeleaf",
          path: "/backend/frameworks/spring/spring-boot/basics/views-static/thymeleaf"
        },
        {
          name: "Static Files",
          path: "/backend/frameworks/spring/spring-boot/basics/views-static/static-files"
        }
      ]
    }
  ]
};

export default Basics;
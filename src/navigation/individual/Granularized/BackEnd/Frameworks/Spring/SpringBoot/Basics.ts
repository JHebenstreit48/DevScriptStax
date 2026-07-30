import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: '/frameworks/spring/spring-boot/basics/fundamentals/intro'
        },
        {
          name: "Install & Setup",
          path: '/frameworks/spring/spring-boot/basics/fundamentals/install-setup'
        },
        {
          name: "Project Structure",
          path: '/frameworks/spring/spring-boot/basics/fundamentals/project-structure'
        },
        {
          name: "Starters & Auto-Config",
          path: '/frameworks/spring/spring-boot/basics/fundamentals/starters-auto-config'
        }
      ]
    },
    {
      name: "Config",
      subpages: [
        {
          name: "Properties & YAML",
          path: '/frameworks/spring/spring-boot/basics/config/properties-yaml'
        },
        {
          name: "Profiles",
          path: '/frameworks/spring/spring-boot/basics/config/profiles'
        },
        {
          name: "External Config & Env",
          path: '/frameworks/spring/spring-boot/basics/config/external-config-env'
        }
      ]
    },
    {
      name: "Web MVC",
      subpages: [
        {
          name: "Controllers",
          path: '/frameworks/spring/spring-boot/basics/web-mvc/controllers'
        },
        {
          name: "Routing & Params",
          path: '/frameworks/spring/spring-boot/basics/web-mvc/routing-params'
        },
        {
          name: "Validation & Binding",
          path: '/frameworks/spring/spring-boot/basics/web-mvc/validation-binding'
        }
      ]
    },
    {
      name: "Data (Spring)",
      subpages: [
        {
          name: "JPA & Entities",
          path: '/frameworks/spring/spring-boot/basics/data-spring/jpa-entities'
        },
        {
          name: "Repositories",
          path: '/frameworks/spring/spring-boot/basics/data-spring/repositories'
        }
      ]
    },
    {
      name: "Views & Static",
      subpages: [
        {
          name: "Thymeleaf",
          path: '/frameworks/spring/spring-boot/basics/views-static/thymeleaf'
        },
        {
          name: "Static Files",
          path: '/frameworks/spring/spring-boot/basics/views-static/static-files'
        }
      ]
    }
  ]
};

export default Basics;
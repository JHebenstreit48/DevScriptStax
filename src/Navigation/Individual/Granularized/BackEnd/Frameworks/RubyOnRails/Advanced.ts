import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API (Rails)",
      subpages: [
        {
          name: "API Mode",
          path: "/backend/frameworks/ruby-on-rails/advanced/api/api-mode"
        },
        {
          name: "JSON Rendering",
          path: "/backend/frameworks/ruby-on-rails/advanced/api/json-rendering"
        }
      ]
    },
    {
      name: "Background & Realtime",
      subpages: [
        {
          name: "Active Job & Sidekiq",
          path: "/backend/frameworks/ruby-on-rails/advanced/background-realtime/active-job-sidekiq"
        },
        {
          name: "Action Cable",
          path: "/backend/frameworks/ruby-on-rails/advanced/background-realtime/action-cable"
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Devise (Auth)",
          path: "/backend/frameworks/ruby-on-rails/advanced/security/devise-auth"
        },
        {
          name: "Authorization",
          path: "/backend/frameworks/ruby-on-rails/advanced/security/authorization"
        }
      ]
    },
    {
      name: "Performance & Caching",
      subpages: [
        {
          name: "Caching",
          path: "/backend/frameworks/ruby-on-rails/advanced/performance-caching/caching"
        },
        {
          name: "ETags & Conditional GET",
          path: "/backend/frameworks/ruby-on-rails/advanced/performance-caching/etags-conditional"
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging",
          path: "/backend/frameworks/ruby-on-rails/advanced/observability/logging"
        },
        {
          name: "Instrumentation",
          path: "/backend/frameworks/ruby-on-rails/advanced/observability/instrumentation"
        }
      ]
    }
  ]
};

export default Advanced;
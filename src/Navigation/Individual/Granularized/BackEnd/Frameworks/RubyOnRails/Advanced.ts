import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "API (Rails)",
      subpages: [
        {
          name: "API Mode",
          path: '/frameworks/ruby-on-rails/advanced/api/api-mode'
        },
        {
          name: "JSON Rendering",
          path: '/frameworks/ruby-on-rails/advanced/api/json-rendering'
        }
      ]
    },
    {
      name: "Background & Realtime",
      subpages: [
        {
          name: "Active Job & Sidekiq",
          path: '/frameworks/ruby-on-rails/advanced/background-realtime/active-job-sidekiq'
        },
        {
          name: "Action Cable",
          path: '/frameworks/ruby-on-rails/advanced/background-realtime/action-cable'
        }
      ]
    },
    {
      name: "Security",
      subpages: [
        {
          name: "Devise (Auth)",
          path: '/frameworks/ruby-on-rails/advanced/security/devise-auth'
        },
        {
          name: "Authorization",
          path: '/frameworks/ruby-on-rails/advanced/security/authorization'
        }
      ]
    },
    {
      name: "Performance & Caching",
      subpages: [
        {
          name: "Caching",
          path: '/frameworks/ruby-on-rails/advanced/performance-caching/caching'
        },
        {
          name: "ETags & Conditional GET",
          path: '/frameworks/ruby-on-rails/advanced/performance-caching/etags-conditional'
        }
      ]
    },
    {
      name: "Observability",
      subpages: [
        {
          name: "Logging",
          path: '/frameworks/ruby-on-rails/advanced/observability/logging'
        },
        {
          name: "Instrumentation",
          path: '/frameworks/ruby-on-rails/advanced/observability/instrumentation'
        }
      ]
    }
  ]
};

export default Advanced;
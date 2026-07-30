import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Shared Behaviour",
      subpages: [
        {
          name: "Shared Examples",
          path: "/testing/unit/rspec/advanced/shared-behaviour/shared-examples"
        },
        {
          name: "Shared Contexts",
          path: "/testing/unit/rspec/advanced/shared-behaviour/shared-contexts"
        }
      ]
    },
    {
      name: "Configuration",
      subpages: [
        {
          name: "RSpec.configure",
          path: "/testing/unit/rspec/advanced/configuration/rspec-configure"
        },
        {
          name: "Custom Formatters",
          path: "/testing/unit/rspec/advanced/configuration/custom-formatters"
        }
      ]
    },
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Rails Integration",
          path: "/testing/unit/rspec/advanced/frameworks/rails"
        },
        {
          name: "rspec-rails Helpers",
          path: "/testing/unit/rspec/advanced/frameworks/rspec-rails-helpers"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimization",
          path: "/testing/unit/rspec/advanced/performance/optimization"
        },
        {
          name: "Parallel Testing",
          path: "/testing/unit/rspec/advanced/performance/parallel-testing"
        }
      ]
    }
  ]
};

export default Advanced;
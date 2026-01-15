import type { Subpage } from '@/types/navigation';

const RSpecNav: Subpage = {
  name: "RSpec",
  subpages: [
    // ---------- RSpec Fundamentals Navigation Start ----------
    {
      name: "RSpec Fundamentals",
      subpages: [
        { name: "Introduction to RSpec", path: "/testing/unit/rspec/intro" },
        { name: "Setting Up RSpec", path: "/testing/unit/rspec/setup" },
        { name: "Writing Basic Tests", path: "/testing/unit/rspec/basic-tests" },
        { name: "RSpec Matchers", path: "/testing/unit/rspec/matchers" },
      ],
    },
    // ---------- RSpec Fundamentals Navigation End ----------

    // ---------- Advanced RSpec Features Navigation Start ----------
    {
      name: "Advanced RSpec Features",
      subpages: [
        { name: "Mocking & Stubbing", path: "/testing/unit/rspec/mocking" },
        { name: "Shared Examples & Contexts", path: "/testing/unit/rspec/shared-examples" },
        { name: "Testing Rails with RSpec", path: "/testing/unit/rspec/rails" },
        { name: "RSpec Performance & Optimization", path: "/testing/unit/rspec/performance" },
      ],
    },
    // ---------- Advanced RSpec Features Navigation End ----------
  ],
};

export default RSpecNav;
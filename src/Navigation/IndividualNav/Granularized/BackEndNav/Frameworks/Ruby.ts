import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Ruby: Subpage = {
  name: "Ruby",
  subpages: [
    // ---------- Ruby Core Navigation Start ----------
    {
      name: "Ruby Programming",
      subpages: [
        { name: "Introduction to Ruby", path: "/ruby/intro" },
        {
          name: "Ruby Fundamentals",
          subpages: [
            { name: "Variables & Data Types", path: "/ruby/fundamentals/variables" },
            { name: "Control Flow & Loops", path: "/ruby/fundamentals/control-flow" },
            { name: "Methods & Blocks", path: "/ruby/fundamentals/methods" },
            { name: "Object-Oriented Ruby", path: "/ruby/fundamentals/oop" },
          ],
        },
        {
          name: "Advanced Ruby",
          subpages: [
            { name: "Modules & Mixins", path: "/ruby/advanced/modules-mixins" },
            { name: "Metaprogramming in Ruby", path: "/ruby/advanced/metaprogramming" },
            { name: "Error Handling", path: "/ruby/advanced/error-handling" },
            { name: "Concurrency & Multithreading", path: "/ruby/advanced/concurrency" },
          ],
        },
      ],
    },
    // ---------- Ruby Core Navigation End ----------

    // ---------- Ruby on Rails Navigation Start ----------
    {
      name: "Ruby on Rails",
      subpages: [
        { name: "Introduction to Rails", path: "/ruby/rails/intro" },
        {
          name: "Rails Fundamentals",
          subpages: [
            { name: "MVC Architecture", path: "/ruby/rails/fundamentals/mvc" },
            { name: "Routing in Rails", path: "/ruby/rails/fundamentals/routing" },
            { name: "Active Record & ORM", path: "/ruby/rails/fundamentals/active-record" },
            { name: "Rails Controllers", path: "/ruby/rails/fundamentals/controllers" },
            { name: "Views & ERB Templates", path: "/ruby/rails/fundamentals/views" },
          ],
        },
        {
          name: "Advanced Rails",
          subpages: [
            { name: "Middleware in Rails", path: "/ruby/rails/advanced/middleware" },
            { name: "Background Jobs & Sidekiq", path: "/ruby/rails/advanced/background-jobs" },
            { name: "Security in Rails", path: "/ruby/rails/advanced/security" },
            { name: "Performance Optimization", path: "/ruby/rails/advanced/performance" },
          ],
        },
      ],
    },
    // ---------- Ruby on Rails Navigation End ----------
  ],
};

export default Ruby;
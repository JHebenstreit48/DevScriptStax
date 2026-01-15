import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro",
          path: "/languages/ruby/basics/fundamentals/intro"
        },
        {
          name: "Syntax & Types",
          path: "/languages/ruby/basics/fundamentals/syntax-types"
        },
        {
          name: "Control Flow",
          path: "/languages/ruby/basics/fundamentals/control-flow"
        },
        {
          name: "OOP & Modules",
          path: "/languages/ruby/basics/fundamentals/oop-modules"
        }
      ]
    },
    {
      name: "Data & Errors",
      subpages: [
        {
          name: "Collections & Blocks",
          path: "/languages/ruby/basics/data-errors/collections-blocks"
        },
        {
          name: "Error Handling",
          path: "/languages/ruby/basics/data-errors/error-handling"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "rbenv/RVM & Gems",
          path: "/languages/ruby/basics/project-setup/rbenv-rvm-gems"
        },
        {
          name: "Bundler & Gemfile",
          path: "/languages/ruby/basics/project-setup/bundler-gemfile"
        }
      ]
    },
    {
      name: "I/O & Utils",
      subpages: [
        {
          name: "File & CLI",
          path: "/languages/ruby/basics/io-utils/file-cli"
        },
        {
          name: "Strings & Regex",
          path: "/languages/ruby/basics/io-utils/strings-regex"
        }
      ]
    }
  ]
};

export default Basics;
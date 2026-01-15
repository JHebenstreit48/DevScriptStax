import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Intro & Syntax",
          path: "/languages/rust/basics/fundamentals/intro-syntax"
        },
        {
          name: "Ownership & Borrowing",
          path: "/languages/rust/basics/fundamentals/ownership-borrowing"
        },
        {
          name: "Types & Enums",
          path: "/languages/rust/basics/fundamentals/types-enums"
        },
        {
          name: "Traits & Generics",
          path: "/languages/rust/basics/fundamentals/traits-generics"
        }
      ]
    },
    {
      name: "Memory & Errors",
      subpages: [
        {
          name: "Lifetimes",
          path: "/languages/rust/basics/memory-errors/lifetimes"
        },
        {
          name: "Result & Option",
          path: "/languages/rust/basics/memory-errors/result-option"
        },
        {
          name: "Error Patterns",
          path: "/languages/rust/basics/memory-errors/error-patterns"
        }
      ]
    },
    {
      name: "Project Setup",
      subpages: [
        {
          name: "Cargo & Crates",
          path: "/languages/rust/basics/project-setup/cargo-crates"
        },
        {
          name: "Modules & Workspaces",
          path: "/languages/rust/basics/project-setup/modules-workspaces"
        }
      ]
    },
    {
      name: "I/O & Data",
      subpages: [
        {
          name: "File & CLI",
          path: "/languages/rust/basics/io-data/file-cli"
        },
        {
          name: "Serde JSON (Rust)",
          path: "/languages/rust/basics/io-data/serde-json"
        }
      ]
    }
  ]
};

export default Basics;
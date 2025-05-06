import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const SvelteNavigation: Subpage = {
  name: "Svelte",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/svelte/basics/overview" }, // What is Svelte, introduction
        { name: "Setup", path: "/svelte/basics/setup" }, // Installing and initializing a Svelte project
        { name: "Reactivity", path: "/svelte/basics/reactivity" }, // Reactivity in Svelte
        { name: "Components", path: "/svelte/basics/components" }, // Creating and using components
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Props", path: "/svelte/coreconcepts/props" }, // Passing data via props
        { name: "Stores", path: "/svelte/coreconcepts/stores" }, // Writable, readable, and derived stores
        { name: "Bindings", path: "/svelte/coreconcepts/bindings" }, // Binding to inputs and elements
        { name: "Events", path: "/svelte/coreconcepts/events" }, // Custom events and DOM events
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Transitions", path: "/svelte/advanced/transitions" }, // Animations and transitions
        { name: "Animations", path: "/svelte/advanced/animations" },
        { name: "Server-Side Rendering", path: "/svelte/advanced/ssr" }, // SSR with SvelteKit
        { name: "Context API", path: "/svelte/advanced/contextapi" }, // Using context to share data
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Code Organization", path: "/svelte/bestpractices/codeorganization" }, // Structuring projects
        { name: "Performance Optimization", path: "/svelte/bestpractices/performance" },
      ],
    },
  ],
};

export default SvelteNavigation;

import { Subpage } from "@/Navigation/NavigationTypes";

const VueNavigation: Subpage = {
  name: "Vue",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/vue/basics/intro" }, // Overview and getting started
        { name: "Vue CLI", path: "/vue/basics/cli" }, // Setting up Vue projects
        { name: "Syntax", path: "/vue/basics/syntax" }, // Vue templates, directives
        { name: "Components", path: "/vue/basics/components" }, // Basics of components
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Reactivity", path: "/vue/core/reactivity" }, // Reactive properties, ref
        { name: "Directives", path: "/vue/core/directives" }, // v-bind, v-model, etc.
        { name: "Routing", path: "/vue/core/routing" }, // Vue Router
        { name: "State Management", path: "/vue/core/state-management" }, // Vuex or Pinia
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Composition API", path: "/vue/advanced/composition-api" }, // Advanced API
        { name: "Mixins", path: "/vue/advanced/mixins" }, // Merging component options
        { name: "Transitions", path: "/vue/advanced/transitions" }, // Animations and transitions
        { name: "Server-Side Rendering", path: "/vue/advanced/ssr" }, // Nuxt.js and SSR
      ],
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Performance Optimization", path: "/vue/best-practices/performance" }, // Tips for faster apps
        { name: "Folder Structure", path: "/vue/best-practices/structure" }, // Organizing projects
        { name: "Scalability", path: "/vue/best-practices/scalability" }, // Best practices for larger apps
      ],
    },
  ],
};

export default VueNavigation;

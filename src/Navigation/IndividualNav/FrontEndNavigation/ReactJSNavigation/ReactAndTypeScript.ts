import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const ReactAndTypeScriptNavigation: Subpage = {
  name: 'React and TypeScript',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        { name: 'Introduction', path: '/react/typescript/fundamentals/introduction' },
        { name: 'Setup & Configuration', path: '/react/typescript/fundamentals/setup' },
        { name: 'Basic Types', path: '/react/typescript/fundamentals/types' }
      ]
    },
    {
      name: 'Props & State',
      subpages: [
        { name: 'Props', path: '/react/typescript/propsstate/props' },
        { name: 'State', path: '/react/typescript/propsstate/state' },
      ]
    },
    {
      name: 'Advanced',
      subpages: [
        { name: 'Generics', path: '/react/typescript/advanced/generics' },
        { name: 'Intersections & Unions', path: '/react/typescript/advanced/intersectionunion' },
        { name: 'Guards & Assertions', path: '/react/typescript/advanced/guardsassertions' },
        { name: 'Enums', path: '/react/typescript/advanced/enums' }
      ]
    },
    {
      name: 'Best Practices',
      subpages: [
        { name: 'Code Organization', path: '/react/typescript/bestpractices/code-organization' },
        { name: 'Strict Mode & Linting', path: '/react/typescript/bestpractices/strict' },
        { name: 'Pitfalls', path: '/react/typescript/bestpractices/pitfalls' }
      ]
    }
  ]
};

export default ReactAndTypeScriptNavigation;
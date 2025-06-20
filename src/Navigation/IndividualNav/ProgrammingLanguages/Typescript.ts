import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const TSNav: Subpage = {
  name: 'TypeScript',
  subpages: [
    {
      name: 'Introduction & Basics',
      subpages: [
        {
          name: 'Overview & Setup',
          path: '/typescript/basics/introduction'
        }, // Combines overview, benefits, and setup
        {
          name: 'Basic Types',
          path: '/typescript/basics/types'
        }, // Combines primitive types, arrays, tuples, and enums
        {
          name: 'Variable Declarations & Type Inference',
          path: '/typescript/basics/variables'
        } // Combines let/const and type inference
      ]
    },
    {
      name: 'Intermediate Concepts',
      subpages: [
        {
          name: 'Functions & Interfaces',
          path: '/typescript/intermediate/functions-and-interfaces'
        }, // Combines function typing and interfaces
        {
          name: 'Classes & Inheritance',
          path: '/typescript/intermediate/classes'
        }, // Combines class members, inheritance, and access modifiers
        {
          name: 'Generics & Utility Types',
          path: '/typescript/intermediate/generics-and-utilities'
        } // Combines generics and utility types (Partial, Pick, etc.)
      ]
    },
    {
      name: 'Advanced Features',
      subpages: [
        {
          name: 'Advanced Types & Type Guards',
          path: '/typescript/advanced/types-and-guards'
        }, // Combines union/intersection types with type guards
        {
          name: 'Modules & Decorators',
          path: '/typescript/advanced/modules-and-decorators'
        } // Combines exporting, importing, and decorators
      ]
    },
    {
      name: 'Best Practices & Tooling',
      subpages: [
        {
          name: 'Error Handling & Coding Standards',
          path: '/typescript/best-practices/standards-and-errors'
        }, // Combines error handling and coding practices
        {
          name: 'Tooling & Integrations',
          path: '/typescript/best-practices/tooling-and-integrations'
        } // Combines tsconfig.json, React, Node.js, and other tools
      ]
    }
  ]
};

export default TSNav;

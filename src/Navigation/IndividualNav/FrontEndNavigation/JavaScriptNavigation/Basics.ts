import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const JavaScriptBasicsNavigation: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/javascript/basics/fundamentals/introduction'
        },
        {
          name: 'History',
          path: '/javascript/basics/fundamentals/history'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Syntax and Structure',
          path: '/javascript/basics/core/syntax'
        },
        {
          name: 'Variables',
          path: '/javascript/basics/core/variables'
        },
        {
          name: 'Operators',
          path: '/javascript/basics/core/operators'
        },
        {
          name: 'Built-in Methods',
          path: '/javascript/basics/core/methods'
        },
        {
          name: 'Conditionals',
          path: '/javascript/basics/core/conditionals'
        },
        {
          name: 'Loops',
          path: '/javascript/basics/core/loops'
        },
        {
          name: 'Scope / Context',
          path: '/javascript/basics/core/scopeandcontext'
        }
      ]
    },
    {
      name: 'Data Types',
      subpages: [
        {
          name: 'Primitive Data Types',
          path: '/javascript/basics/datatypes/primitive'
        },
        {
          name: "Complex Types & Type Checking",
          path: "/javascript/basics/datatypes/complex"
        },
        {
          name: "Template Literals",
          path: "/javascript/basics/datatypes/templateliterals"
        }
      ]
    },
    {
      name: 'Arrays',
      subpages: [
        {
          name: 'Introduction to Arrays',
          path: '/javascript/basics/arrays/intro'
        },
        {
          name: 'Common Array Methods',
          path: '/javascript/basics/arrays/methods'
        },
        {
          name: 'Advanced Array Techniques', // reduce, sort, slice, etc.
          path: '/javascript/basics/arrays/advanced'
        }
      ]
    },
    {
      name: 'Objects / JSON',
      subpages: [
        {
          name: 'Objects Basics',
          path: '/javascript/basics/objects/basics'
        },
        {
          name: 'Properties and Methods',
          path: '/javascript/basics/objects/propsandmethods'
        },
        {
          name: 'Utilities and Patterns', // ← NEW
          path: '/javascript/basics/objects/utilsandpatterns'
        },
        {
          name: 'Working with JSON',
          path: '/javascript/basics/objects/json'
        }
      ]
    },
    {
      name: 'Functions',
      subpages: [
        {
          name: 'Basics & Declarations',
          path: '/javascript/basics/functions/basicsanddeclare'
        },
        {
          name: 'Expressions & IIFE',
          path: '/javascript/basics/functions/expressionsandiife'
        },
        {
          name: 'Arrow Functions',
          path: '/javascript/basics/functions/arrow'
        },
        {
          name: 'Parameters and Arguments',
          path: '/javascript/basics/functions/paramsandargs'
        },
        {
          name: 'Higher-Order Functions',
          path: '/javascript/basics/functions/higherorder'
        },
        {
          name: 'This Keyword',
          path: '/javascript/basics/functions/thiskeyword'
        }
      ]
    }
  ]
};

export default JavaScriptBasicsNavigation;

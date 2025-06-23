import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const GoBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics/Syntax',
          path: '/go/basics/fundamentals/basicssyntax'
        },
        {
          name: 'Control Flow',
          path: '/go/basics/fundamentals/controlflow'
        },
        {
          name: 'Functions/Packages',
          path: '/go/basics/fundamentals/functionspackages'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Variables/Types',
          path: '/go/basics/coreconcepts/variablestypes'
        },
        {
          name: 'Structs/Interfaces',
          path: '/go/basics/coreconcepts/structsinterfaces'
        },
        {
          name: 'Concurrency',
          path: '/go/basics/coreconcepts/concurrency'
        }
      ]
    }
  ]
};

export default GoBasics;

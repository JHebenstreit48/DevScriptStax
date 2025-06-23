import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const PythonBasics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics/Syntax',
          path: '/python/basics/fundamentals/basicssyntax'
        },
        {
          name: 'Control Flow',
          path: '/python/basics/fundamentals/controlflow'
        }
      ]
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'Variables/Types',
          path: '/python/basics/coreconcepts/variablestypes'
        },
        {
          name: 'Functions/Modules',
          path: '/python/basics/coreconcepts/functionsmodules'
        },
        {
          name: 'OOP',
          path: '/python/basics/coreconcepts/oop'
        }
      ]
    }
  ]
};

export default PythonBasics;

import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const PythonNav: Subpage = {
  name: 'Python',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Basics & Syntax',
          path: '/python/fundamentals/basics'
        },
        {
          name: 'Data Types, Variables & Operators',
          path: '/python/fundamentals/data-types'
        },
        {
          name: 'Control Flow (If, Loops, Exceptions)',
          path: '/python/fundamentals/control-flow'
        },
        {
          name: 'Functions, Scope & Modules',
          path: '/python/fundamentals/functions-modules'
        },
        {
          name: 'Object-Oriented Programming (OOP)',
          path: '/python/fundamentals/oop'
        }
      ]
    },
    {
      name: 'Backend',
      subpages: [
        {
          name: 'Working with APIs in Python',
          path: '/python/backend/apis'
        },
        {
          name: 'Building & Consuming REST APIs',
          path: '/python/backend/rest-apis'
        },
        {
          name: 'Authentication & Security in APIs',
          path: '/python/backend/auth-security'
        }
      ]
    },
    {
      name: 'File Handling & Data Processing',
      subpages: [
        {
          name: 'Reading & Writing Files',
          path: '/python/data/files'
        },
        {
          name: 'Working with CSV & JSON',
          path: '/python/data/csv-json'
        },
        {
          name: 'Web Scraping with Python',
          path: '/python/data/web-scraping'
        },
        {
          name: 'Working with APIs & Requests',
          path: '/python/data/api-requests'
        }
      ]
    },
    {
      name: 'Asynchronous Programming',
      subpages: [
        {
          name: 'Async & Await',
          path: '/python/async/async-await'
        },
        { name: 'Using Asyncio', path: '/python/async/asyncio' }
      ]
    },
    {
      name: 'Performance & Optimization',
      subpages: [
        {
          name: 'Python Performance Optimization',
          path: '/python/performance/optimization'
        },
        {
          name: 'Working with Multithreading',
          path: '/python/performance/multithreading'
        },
        {
          name: 'Memory Management & Profiling',
          path: '/python/performance/memory'
        }
      ]
    }
  ]
};

export default PythonNav;

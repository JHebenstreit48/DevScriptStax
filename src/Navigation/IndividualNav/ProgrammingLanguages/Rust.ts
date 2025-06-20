import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const RustNav: Subpage = {
  name: 'Rust',
  subpages: [
    {
      name: 'Rust Fundamentals',
      subpages: [
        {
          name: 'Rust Basics & Syntax',
          path: '/rust/fundamentals/basics'
        },
        {
          name: 'Ownership & Borrowing',
          path: '/rust/fundamentals/ownership-borrowing'
        },
        {
          name: 'Structs, Traits & Enums',
          path: '/rust/fundamentals/structs-traits-enums'
        },
        {
          name: 'Memory Safety & Lifetimes',
          path: '/rust/fundamentals/memory-lifetimes'
        },
        {
          name: 'Error Handling in Rust',
          path: '/rust/fundamentals/error-handling'
        }
      ]
    },
    {
      name: 'Rust for Web Development',
      subpages: [
        {
          name: 'Building APIs with Rust',
          path: '/rust/webdev/apis'
        },
        {
          name: 'Rust Web Frameworks',
          path: '/rust/webdev/frameworks'
        },
        {
          name: 'Handling JSON & Serialization',
          path: '/rust/webdev/json'
        },
        {
          name: 'Middleware & Request Handling',
          path: '/rust/webdev/middleware'
        }
      ]
    },
    {
      name: 'Rust Concurrency & Performance',
      subpages: [
        {
          name: 'Async & Await in Rust',
          path: '/rust/concurrency/async-await'
        },
        {
          name: 'Threads & Message Passing',
          path: '/rust/concurrency/threads-message'
        },
        {
          name: 'Performance Optimization',
          path: '/rust/concurrency/optimization'
        }
      ]
    },
    {
      name: 'Rust & Databases',
      subpages: [
        {
          name: 'Connecting to Databases',
          path: '/rust/databases/connecting'
        },
        {
          name: 'Using SQL in Rust',
          path: '/rust/databases/sql'
        },
        { name: 'NoSQL & Rust', path: '/rust/databases/nosql' }
      ]
    }
  ]
};

export default RustNav;

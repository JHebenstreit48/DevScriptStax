import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroAndSyntax = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/IntroAndSyntax'));
const OwnershipAndBorrowing = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/OwnershipAndBorrowing'));
const TypesAndEnums = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/TypesAndEnums'));
const TraitsAndGenerics = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/TraitsAndGenerics'));

const Fundamentals: RouteObject[] = [
  {
    path: '/languages/rust/basics/fundamentals/intro-syntax',
    element: <IntroAndSyntax />,
  },
  {
    path: '/languages/rust/basics/fundamentals/ownership-borrowing',
    element: <OwnershipAndBorrowing />,
  },
  {
    path: '/languages/rust/basics/fundamentals/types-enums',
    element: <TypesAndEnums />,
  },
  {
    path: '/languages/rust/basics/fundamentals/traits-generics',
    element: <TraitsAndGenerics />,
  },
];

export default Fundamentals;

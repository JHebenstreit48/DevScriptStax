import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Lifetimes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/MemoryAndErrors/Lifetimes'));
const ResultAndOption = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/MemoryAndErrors/ResultAndOption'));
const ErrorPatterns = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/MemoryAndErrors/ErrorPatterns'));

const MemoryAndErrors: RouteObject[] = [
  {
    path: '/languages/rust/basics/memory-errors/lifetimes',
    element: <Lifetimes />,
  },
  {
    path: '/languages/rust/basics/memory-errors/result-option',
    element: <ResultAndOption />,
  },
  {
    path: '/languages/rust/basics/memory-errors/error-patterns',
    element: <ErrorPatterns />,
  },
];

export default MemoryAndErrors;

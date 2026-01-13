import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreConcepts = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/APIFundamentals/CoreConcepts'));
const UseCases = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/APIFundamentals/UseCases'));
const WebDevelopment = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/APIFundamentals/WebDevelopment'));
const CommonMisconceptions = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/APIFundamentals/CommonMisconceptions'));

const APIFundamentals: RouteObject[] = [
  {
    path: '/apis/basics/fundamentals/core-concepts',
    element: <CoreConcepts />,
  },
  {
    path: '/apis/basics/fundamentals/use-cases',
    element: <UseCases />,
  },
  {
    path: '/apis/basics/fundamentals/web-development',
    element: <WebDevelopment />,
  },
  {
    path: '/apis/basics/fundamentals/misconceptions',
    element: <CommonMisconceptions />,
  },
];

export default APIFundamentals;

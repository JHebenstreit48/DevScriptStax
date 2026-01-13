import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/Fundamentals/Introduction'));
const FeaturesAndUseCases = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/Fundamentals/FeaturesAndUseCases'));

const Fundamentals: RouteObject[] = [
  {
    path: '/postgresql/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/postgresql/basics/fundamentals/features-use-cases',
    element: <FeaturesAndUseCases />,
  },
];

export default Fundamentals;

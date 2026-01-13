import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Aggregation/Overview'));
const Pipelines = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Aggregation/Pipelines'));
const Operators = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Aggregation/Operators'));
const Optimization = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Intermediate/Aggregation/Optimization'));

const Aggregation: RouteObject[] = [
  {
    path: '/mongodb/intermediate/aggregation/overview',
    element: <Overview />,
  },
  {
    path: '/mongodb/intermediate/aggregation/pipelines',
    element: <Pipelines />,
  },
  {
    path: '/mongodb/intermediate/aggregation/operators',
    element: <Operators />,
  },
  {
    path: '/mongodb/intermediate/aggregation/performance',
    element: <Optimization />,
  },
];

export default Aggregation;

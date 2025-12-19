import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Mocktail = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/FakesAndMocks/Mocktail'));
const HandRolledFakes = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/FakesAndMocks/HandRolledFakes'));

const FakesAndMocks: RouteObject[] = [
  {
    path: '/dart/testing/mocking/mocktail',
    element: <Mocktail />,
  },
  {
    path: '/dart/testing/mocking/fakes',
    element: <HandRolledFakes />,
  },
];

export default FakesAndMocks;

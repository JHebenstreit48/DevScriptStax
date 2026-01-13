import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MockingAndStubbing = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/DoublesAndIsolation/MockingAndStubbing'));
const FakesAndSpies = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/DoublesAndIsolation/FakesAndSpies'));

const DoublesAndIsolation: RouteObject[] = [
  {
    path: '/javascript/testing/basics/doubles-and-isolation/mocking-and-stubbing',
    element: <MockingAndStubbing />,
  },
  {
    path: '/javascript/testing/basics/doubles-and-isolation/fakes-and-spies',
    element: <FakesAndSpies />,
  },
];

export default DoublesAndIsolation;

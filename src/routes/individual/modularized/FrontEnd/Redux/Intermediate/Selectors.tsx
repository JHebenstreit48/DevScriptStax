import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateSelector = lazy(() => import('@/pages/mainTabs/FrontEnd/Redux/Intermediate/Selectors/CreateSelector'));
const MemoizationAndPitfalls = lazy(() => import('@/pages/mainTabs/FrontEnd/Redux/Intermediate/Selectors/MemoizationAndPitfalls'));

const Selectors: RouteObject[] = [
  {
    path: '/redux/intermediate/selectors/create-selector',
    element: <CreateSelector />,
  },
  {
    path: '/redux/intermediate/selectors/memoization-and-pitfalls',
    element: <MemoizationAndPitfalls />,
  },
];

export default Selectors;

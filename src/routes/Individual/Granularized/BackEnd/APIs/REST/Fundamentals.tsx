import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CorePrincipleS = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/Fundamentals/CorePrincipleS'));
const StatelessnessAndClientServerModel = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/Fundamentals/StatelessnessAndClientServerModel'));
const RESTVsSOAPVsGraphQL = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/Fundamentals/RESTVsSOAPVsGraphQL'));
const CommonAPIMistakes = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/Fundamentals/CommonAPIMistakes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/apis/rest/core-principles',
    element: <CorePrincipleS />,
  },
  {
    path: '/apis/rest/stateless-client-server',
    element: <StatelessnessAndClientServerModel />,
  },
  {
    path: '/apis/rest/comparison',
    element: <RESTVsSOAPVsGraphQL />,
  },
  {
    path: '/apis/rest/mistakes',
    element: <CommonAPIMistakes />,
  },
];

export default Fundamentals;

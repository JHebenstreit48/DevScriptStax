import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OperationsAndColors = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts/OperationsAndColors'));
const ImportsAndScope = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/AdvancedConcepts/ImportsAndScope'));

const AdvancedConcepts: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/less/advanced/operations-colors',
    element: <OperationsAndColors />,
  },
  {
    path: '/css/tools/preprocessors/less/advanced/imports-scope',
    element: <ImportsAndScope />,
  },
];

export default AdvancedConcepts;

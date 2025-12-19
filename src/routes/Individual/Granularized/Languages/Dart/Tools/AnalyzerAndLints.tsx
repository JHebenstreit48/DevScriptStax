import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DartAnalyze = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/AnalyzerAndLints/DartAnalyze'));
const LintsAndRules = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/AnalyzerAndLints/LintsAndRules'));

const AnalyzerAndLints: RouteObject[] = [
  {
    path: '/dart/tools/analyze/dart-analyze',
    element: <DartAnalyze />,
  },
  {
    path: '/dart/tools/analyze/lints-rules',
    element: <LintsAndRules />,
  },
];

export default AnalyzerAndLints;

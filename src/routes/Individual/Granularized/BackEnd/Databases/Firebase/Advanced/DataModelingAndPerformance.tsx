import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModelingStrategies = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/DataModelingAndPerformance/ModelingStrategies'));
const IndexTuning = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/DataModelingAndPerformance/IndexTuning'));

const DataModelingAndPerformance: RouteObject[] = [
  {
    path: '/firebase/advanced/data-modeling-performance/modeling-strategies',
    element: <ModelingStrategies />,
  },
  {
    path: '/firebase/advanced/data-modeling-performance/index-tuning-firestore',
    element: <IndexTuning />,
  },
];

export default DataModelingAndPerformance;

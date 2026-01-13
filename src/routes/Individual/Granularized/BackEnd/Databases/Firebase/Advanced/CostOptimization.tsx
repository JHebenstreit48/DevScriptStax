import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReadsWritesAndPricing = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/CostOptimization/ReadsWritesAndPricing'));
const StorageAndBandwidth = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/Firebase/Advanced/CostOptimization/StorageAndBandwidth'));

const CostOptimization: RouteObject[] = [
  {
    path: '/firebase/advanced/cost-optimization/pricing-read-write',
    element: <ReadsWritesAndPricing />,
  },
  {
    path: '/firebase/advanced/cost-optimization/storage-bandwidth',
    element: <StorageAndBandwidth />,
  },
];

export default CostOptimization;

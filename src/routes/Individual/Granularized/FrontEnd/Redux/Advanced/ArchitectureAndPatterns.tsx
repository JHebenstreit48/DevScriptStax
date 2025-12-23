import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FeatureFoldersAndSlices = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/ArchitectureAndPatterns/FeatureFoldersAndSlices'));
const NormalizationAndEntityAdapter = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/ArchitectureAndPatterns/NormalizationAndEntityAdapter'));
const CodeSplitting = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/ArchitectureAndPatterns/CodeSplitting'));

const ArchitectureAndPatterns: RouteObject[] = [
  {
    path: '/redux/advanced/architecture-patterns/feature-folders-and-slices',
    element: <FeatureFoldersAndSlices />,
  },
  {
    path: '/redux/advanced/architecture-patterns/normalization-and-entity-adapter',
    element: <NormalizationAndEntityAdapter />,
  },
  {
    path: '/redux/advanced/architecture-patterns/code-splitting-lazy-reducers',
    element: <CodeSplitting />,
  },
];

export default ArchitectureAndPatterns;

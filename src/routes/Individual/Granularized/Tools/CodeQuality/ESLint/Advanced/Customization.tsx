import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomRules = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/Customization/CustomRules'));
const ShareableConfigs = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/Customization/ShareableConfigs'));

const Customization: RouteObject[] = [
  {
    path: '/eslint/advanced/customization/custom-rules',
    element: <CustomRules />,
  },
  {
    path: '/eslint/advanced/customization/shareable-configs',
    element: <ShareableConfigs />,
  },
];

export default Customization;

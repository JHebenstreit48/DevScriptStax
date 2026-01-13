import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomRules = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Advanced/Customization/CustomRules'));
const RuleSetsAndExtends = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Advanced/Customization/RuleSetsAndExtends'));

const Customization: RouteObject[] = [
  {
    path: '/tslint/advanced/customization/custom-rules',
    element: <CustomRules />,
  },
  {
    path: '/tslint/advanced/customization/rule-sets-extends',
    element: <RuleSetsAndExtends />,
  },
];

export default Customization;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DarkModeStrategies = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Theming/DarkModeStrategies'));
const DesignTokensAndCSSVars = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Theming/DesignTokensAndCSSVars'));

const Theming: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/advanced/theming/dark-mode-strategies',
    element: <DarkModeStrategies />,
  },
  {
    path: '/css/tools/frameworks/tailwind/advanced/theming/design-tokens-and-css-vars',
    element: <DesignTokensAndCSSVars />,
  },
];

export default Theming;

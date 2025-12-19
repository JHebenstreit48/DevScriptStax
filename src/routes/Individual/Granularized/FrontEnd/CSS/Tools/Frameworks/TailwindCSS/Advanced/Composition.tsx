import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ApplyAndLayer = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/ApplyAndLayer'));
const VariantsAndState = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/VariantsAndState'));

const Composition: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/advanced/composition/apply-and-layer',
    element: <ApplyAndLayer />,
  },
  {
    path: '/css/tools/frameworks/tailwind/advanced/composition/variants-and-state',
    element: <VariantsAndState />,
  },
];

export default Composition;

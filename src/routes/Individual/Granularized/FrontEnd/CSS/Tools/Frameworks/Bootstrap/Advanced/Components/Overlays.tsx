import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModalsAPIAndOptions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Overlays/ModalsAPIAndOptions'));
const DropdownsAndTooltipsAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Overlays/DropdownsAndTooltipsAPI'));

const Overlays: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/components/overlays-js/modals-api-and-options',
    element: <ModalsAPIAndOptions />,
  },
  {
    path: '/frameworks/bootstrap/advanced/components/overlays-js/dropdowns-and-tooltips-api',
    element: <DropdownsAndTooltipsAPI />,
  },
];

export default Overlays;

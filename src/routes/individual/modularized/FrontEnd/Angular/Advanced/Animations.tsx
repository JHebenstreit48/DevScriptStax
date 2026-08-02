import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Animations/Basics'));
const Triggers = lazy(() => import('@/pages/mainTabs/FrontEnd/Angular/Advanced/Animations/Triggers'));

const Animations: RouteObject[] = [
    {
        path: '/front-end/angular/advanced/animations/basics',
        element: <Basics />,
    },
    {
        path: '/front-end/angular/advanced/animations/triggers',
        element: <Triggers />,
    }
];

export default Animations;
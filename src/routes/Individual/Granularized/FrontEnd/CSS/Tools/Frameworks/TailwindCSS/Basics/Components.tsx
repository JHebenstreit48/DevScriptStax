import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ButtonsAndForms = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components/ButtonsAndForms'));
const CardsAndNav = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components/CardsAndNav'));

const Components: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/components/buttons-and-forms',
    element: <ButtonsAndForms />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/components/cards-and-nav',
    element: <CardsAndNav />,
  },
];

export default Components;

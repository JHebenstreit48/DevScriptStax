import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Forms = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/FormsAndSemantics/Forms'));
const Semantics = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/FormsAndSemantics/Semantics'));

const FormsSemantics: RouteObject[] = [
  {
    path: '/html/basics/forms-and-semantics/forms',
    element: <Forms />,
  },
  {
    path: '/html/basics/forms-and-semantics/semantics',
    element: <Semantics />,
  },
];

export default FormsSemantics;
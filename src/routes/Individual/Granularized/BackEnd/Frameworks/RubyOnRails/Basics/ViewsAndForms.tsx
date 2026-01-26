import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ERBAndLayouts = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/ERBAndLayouts'));
const PartialsAndHelpers = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/PartialsAndHelpers'));
const FormsAndCSRF = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ViewsAndForms/FormsAndCSRF'));

const ViewsAndForms: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/basics/views-forms/erb-layouts',
    element: <ERBAndLayouts />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/views-forms/partials-helpers',
    element: <PartialsAndHelpers />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/views-forms/forms-csrf',
    element: <FormsAndCSRF />,
  },
];

export default ViewsAndForms;

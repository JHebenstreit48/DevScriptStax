import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModelsAndMigrations = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/ModelsAndMigrations'));
const Associations = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Associations'));
const Validations = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/ModelsAndAR/Validations'));

const ModelsAndAR: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/basics/models-ar/models-migrations',
    element: <ModelsAndMigrations />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/models-ar/associations',
    element: <Associations />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/models-ar/validations',
    element: <Validations />,
  },
];

export default ModelsAndAR;

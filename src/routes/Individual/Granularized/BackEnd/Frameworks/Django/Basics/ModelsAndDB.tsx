import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DefiningModels = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ModelsAndDB/DefiningModels'));
const ModelRelationships = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ModelsAndDB/ModelRelationships'));
const Migrations = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ModelsAndDB/Migrations'));
const ORMAndQuerySets = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/ModelsAndDB/ORMAndQuerySets'));

const ModelsAndDB: RouteObject[] = [
  {
    path: '/backend/frameworks/django/basics/models-db/defining-models',
    element: <DefiningModels />,
  },
  {
    path: '/backend/frameworks/django/basics/models-db/relationships',
    element: <ModelRelationships />,
  },
  {
    path: '/backend/frameworks/django/basics/models-db/migrations',
    element: <Migrations />,
  },
  {
    path: '/backend/frameworks/django/basics/models-db/orm-querysets',
    element: <ORMAndQuerySets />,
  },
];

export default ModelsAndDB;

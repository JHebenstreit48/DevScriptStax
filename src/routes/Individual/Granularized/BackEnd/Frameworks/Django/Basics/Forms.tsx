import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkingWithForms = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Forms/WorkingWithForms'));
const ModelForms = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Forms/ModelForms'));
const ValidationAndErrors = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Forms/ValidationAndErrors'));
const FileUploads = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Django/Basics/Forms/FileUploads'));

const Forms: RouteObject[] = [
  {
    path: '/frameworks/django/basics/forms/working',
    element: <WorkingWithForms />,
  },
  {
    path: '/frameworks/django/basics/forms/model-forms',
    element: <ModelForms />,
  },
  {
    path: '/frameworks/django/basics/forms/validation-errors',
    element: <ValidationAndErrors />,
  },
  {
    path: '/frameworks/django/basics/forms/file-uploads',
    element: <FileUploads />,
  },
];

export default Forms;

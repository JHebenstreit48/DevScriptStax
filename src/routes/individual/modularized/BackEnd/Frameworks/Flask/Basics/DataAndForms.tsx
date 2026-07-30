import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JSONAndFormData = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Flask/Basics/DataAndForms/JSONAndFormData'));
const FileUploads = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Flask/Basics/DataAndForms/FileUploads'));

const DataAndForms: RouteObject[] = [
  {
    path: '/frameworks/flask/basics/data-forms/json-form-data',
    element: <JSONAndFormData />,
  },
  {
    path: '/frameworks/flask/basics/data-forms/file-uploads',
    element: <FileUploads />,
  },
];

export default DataAndForms;

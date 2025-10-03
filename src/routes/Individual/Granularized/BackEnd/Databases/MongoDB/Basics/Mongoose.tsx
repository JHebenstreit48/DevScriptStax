import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/Overview')
);
const SchemasAndModels = lazy(
  () =>
    import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/SchemasAndModels')
);

const Mongoose: RouteObject[] = [
  {
    path: '/mongodb/basics/mongoose/overview',
    element: <Overview />,
  },
  {
    path: '/mongodb/basics/mongoose/schemas-and-models',
    element: <SchemasAndModels />,
  },
];

export default Mongoose;
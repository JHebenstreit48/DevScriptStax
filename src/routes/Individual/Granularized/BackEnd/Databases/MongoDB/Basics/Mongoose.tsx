import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(
  () => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/Overview')
);
const SchemasAndModels = lazy(
  () =>
    import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/SchemasAndModels')
);
const QueriesAndFilters = lazy(
  () => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/QueriesAndFilters')
);
const UpdatesAndWriteOps = lazy(
  () => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/UpdatesAndWriteOps')
);
const ValidationAndMiddleware = lazy(
  () =>
    import(
      '@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/ValidationAndMiddleware'
    )
);
const PopulateAndRelationships = lazy(
  () =>
    import(
      '@/Pages/MainTabs/BackEnd/Databases/MongoDB/Basics/Mongoose/PopulateAndRelationships'
    )
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
  {
    path: '/mongodb/basics/mongoose/queries',
    element: <QueriesAndFilters />,
  },
  {
    path: '/mongodb/basics/mongoose/updates',
    element: <UpdatesAndWriteOps />,
  },
  {
    path: '/mongodb/basics/mongoose/validation-middleware',
    element: <ValidationAndMiddleware />,
  },
  {
    path: '/mongodb/basics/mongoose/populate',
    element: <PopulateAndRelationships />,
  }
];

export default Mongoose;
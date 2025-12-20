import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DunderMethods = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/DataModel/DunderMethods'));
const IteratorsAndGenerators = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/DataModel/IteratorsAndGenerators'));

const DataModel: RouteObject[] = [
  {
    path: '/python/advanced/datamodel/dunder-methods',
    element: <DunderMethods />,
  },
  {
    path: '/python/advanced/datamodel/iterators-generators',
    element: <IteratorsAndGenerators />,
  },
];

export default DataModel;

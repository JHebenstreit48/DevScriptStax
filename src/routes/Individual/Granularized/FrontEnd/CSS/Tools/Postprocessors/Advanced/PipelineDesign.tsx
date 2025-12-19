import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OrderingAndConflicts = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign/OrderingAndConflicts'));
const EnvAwarePipelines = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign/EnvAwarePipelines'));

const PipelineDesign: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/advanced/pipeline-design/ordering-and-conflicts',
    element: <OrderingAndConflicts />,
  },
  {
    path: '/css/tools/postprocessors/advanced/pipeline-design/env-aware-pipelines',
    element: <EnvAwarePipelines />,
  },
];

export default PipelineDesign;

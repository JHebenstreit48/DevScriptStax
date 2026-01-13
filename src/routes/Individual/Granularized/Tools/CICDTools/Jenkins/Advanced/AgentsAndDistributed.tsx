import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DistributedBuilds = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/AgentsAndDistributed/DistributedBuilds'));
const AgentsNodesAndLabels = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/AgentsAndDistributed/AgentsNodesAndLabels'));

const AgentsAndDistributed: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/advanced/agents-distributed/distributed-builds',
    element: <DistributedBuilds />,
  },
  {
    path: '/tools/cicd/jenkins/advanced/agents-distributed/agents-nodes',
    element: <AgentsNodesAndLabels />,
  },
];

export default AgentsAndDistributed;

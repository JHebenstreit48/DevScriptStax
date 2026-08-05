import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DistributedBuilds = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/AgentsAndDistributed/DistributedBuilds'));
const AgentsNodesAndLabels = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CICD/Jenkins/Advanced/AgentsAndDistributed/AgentsNodesAndLabels'));

const AgentsAndDistributed: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/advanced/agents-distributed/distributed-builds',
    element: <DistributedBuilds />,
  },
  {
    path: '/ci-cd/jenkins/advanced/agents-distributed/agents-nodes',
    element: <AgentsNodesAndLabels />,
  },
];

export default AgentsAndDistributed;
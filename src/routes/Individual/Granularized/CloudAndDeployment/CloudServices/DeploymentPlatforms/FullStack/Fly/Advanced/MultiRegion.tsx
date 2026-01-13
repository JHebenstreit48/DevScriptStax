import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MachinesAndScale = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/MultiRegion/MachinesAndScale'));
const PlacementAndSpread = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced/MultiRegion/PlacementAndSpread'));

const MultiRegion: RouteObject[] = [
  {
    path: '/fly/advanced/multi-region/machines-scale',
    element: <MachinesAndScale />,
  },
  {
    path: '/fly/advanced/multi-region/placement-spread',
    element: <PlacementAndSpread />,
  },
];

export default MultiRegion;

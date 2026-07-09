import type { Subpage } from '@/types/navigation';

import CloudflareWorkers from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers';
import FastlyCompute from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute';
import AkamaiEdgeWorkers from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers';

const EdgeComputing: Subpage = {
  name: 'Edge Computing',
  subpages: [
    CloudflareWorkers,
    FastlyCompute,
    AkamaiEdgeWorkers
  ]
};

export default EdgeComputing;
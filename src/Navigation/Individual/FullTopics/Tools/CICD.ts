import type { Subpage } from '@/types/navigation';

import CircleCI from '@/Navigation/Individual/FullTopics/Tools/CICD/CircleCI';
import Jenkins from '@/Navigation/Individual/FullTopics/Tools/CICD/Jenkins';

const CICD: Subpage = {
  name: 'CI/CD',
  subpages: [
    CircleCI,
    Jenkins
  ],
};

export default CICD;
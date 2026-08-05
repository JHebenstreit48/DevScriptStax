import type { Subpage } from '@/types/navigation';

import CircleCI from '@/navigation/individual/topics/toolsAndTesting/Tools/CICD/CircleCI';
import Jenkins from '@/navigation/individual/topics/toolsAndTesting/Tools/CICD/Jenkins';

const CICD: Subpage = {
  name: 'CI/CD',
  subpages: [
    CircleCI,
    Jenkins
  ],
};

export default CICD;
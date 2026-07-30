import type { Subpage } from '@/types/navigation';

import CircleCI from '@/Navigation/Individual/Topics/Tools/CICD/CircleCI';
import Jenkins from '@/Navigation/Individual/Topics/Tools/CICD/Jenkins';

const CICD: Subpage = {
  name: 'CI/CD',
  subpages: [
    CircleCI,
    Jenkins
  ],
};

export default CICD;
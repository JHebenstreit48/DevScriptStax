import type { Subpage } from '@/types/navigation';

import Tools from '@/navigation/combined/topics/toolsAndTesting/tools';
import Testing from '@/navigation/combined/topics/toolsAndTesting/testing';

const toolsAndTesting: Subpage = {
  name: 'Tools & Testing',
  subpages: [
    Tools,
    Testing
  ]
};

export default toolsAndTesting;
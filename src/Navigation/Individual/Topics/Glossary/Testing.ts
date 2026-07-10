import type { Subpage } from '@/types/navigation';

import EndToEnd from '@/Navigation/Individual/Granularized/Glossary/Testing/EndToEnd';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    EndToEnd,
  ],
};

export default Testing;
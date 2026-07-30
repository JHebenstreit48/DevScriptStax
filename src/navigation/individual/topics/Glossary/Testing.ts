import type { Subpage } from '@/types/navigation';

import EndToEnd from '@/navigation/individual/modularized/Glossary/Testing/EndToEnd';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    EndToEnd,
  ],
};

export default Testing;
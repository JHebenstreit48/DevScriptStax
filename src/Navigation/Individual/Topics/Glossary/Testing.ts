import type { Subpage } from '@/types/navigation';

import Cypress from '@/Navigation/Individual/Granularized/Glossary/Testing/Cypress';

const Testing: Subpage = {
  name: 'Testing',
  subpages: [
    Cypress,
  ],
};

export default Testing;
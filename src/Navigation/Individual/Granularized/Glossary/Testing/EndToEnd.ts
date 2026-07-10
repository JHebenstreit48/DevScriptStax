import type { Subpage } from '@/types/navigation';

import Cypress from '@/Navigation/Individual/Granularized/Glossary/Testing/EndToEnd/Cypress';

const EndToEnd: Subpage = {
  name: 'End To End',
  subpages: [
    Cypress,
  ],
};

export default EndToEnd;
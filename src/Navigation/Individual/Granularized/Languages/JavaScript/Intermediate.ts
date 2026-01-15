import type { Subpage } from '@/types/navigation';

import DOMAndEvents from '@/Navigation/Individual/Granularized/Languages/JavaScript/Intermediate/DOMAndEvent';
import ModernES6 from '@/Navigation/Individual/Granularized/Languages/JavaScript/Intermediate/ModernES6';
import ErrorHandling from '@/Navigation/Individual/Granularized/Languages/JavaScript/Intermediate/ErrorHandling';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    DOMAndEvents,
    ModernES6,
    ErrorHandling
  ]
};

export default Intermediate;
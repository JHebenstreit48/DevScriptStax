import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import DOMAndEvents from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Intermediate/DOMAndEvent';
import ModernES6 from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Intermediate/ModernES6';
import ErrorHandling from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Intermediate/ErrorHandling';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    DOMAndEvents,
    ModernES6,
    ErrorHandling
  ]
};

export default Intermediate;
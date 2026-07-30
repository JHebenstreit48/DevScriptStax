import type { Subpage } from '@/types/navigation';

import ExtendedSyntax from '@/navigation/individual/modularized/FrontEnd/Markdown/Intermediate/ExtendedSyntax';
import InteractiveFeatures from '@/navigation/individual/modularized/FrontEnd/Markdown/Intermediate/InteractiveFeatures';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ExtendedSyntax,
    InteractiveFeatures
  ]
};

export default Intermediate;
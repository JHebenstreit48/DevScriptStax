import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ExtendedSyntax from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Intermediate/ExtendedSyntax';
import InteractiveFeatures from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Intermediate/InteractiveFeatures';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ExtendedSyntax,
    InteractiveFeatures
  ]
};

export default Intermediate;
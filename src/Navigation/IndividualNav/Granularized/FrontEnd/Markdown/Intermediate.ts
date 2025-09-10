import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ExtendedSyntax from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Intermediate/ExtendedSyntax';
import InteractiveFeatures from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Intermediate/InteractiveFeatures';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    ExtendedSyntax,
    InteractiveFeatures
  ]
};

export default Intermediate;